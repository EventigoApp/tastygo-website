// Registration on tastygo.hu. The form posts to the app's public signup API
// (cross-origin, see tastygo-app server/src/routes/platform.js); the answer is a
// one-time sign-in link that opens the new restaurant in the app.
import { reactive } from 'vue'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Which plan the visitor came for (the Pro card's button sets 'pro').
export const intent = reactive({ plan: 'free' })
export function startSignup(plan = 'free') {
  intent.plan = plan === 'pro' ? 'pro' : 'free'
}

// { field: code } for what has to be fixed before sending.
export function validateSignup(f) {
  const e = {}
  if (!String(f.restaurant || '').trim()) e.restaurant = 'required'
  if (!EMAIL_RE.test(String(f.email || '').trim())) e.email = 'invalid_email'
  if (String(f.password || '').length < 8) e.password = 'password_too_short'
  if (f.phone && !/^\+?[\d\s()/-]{6,20}$/.test(String(f.phone).trim())) e.phone = 'invalid_phone'
  if (!f.terms) e.terms = 'terms_required'
  return e
}

export function signupPayload(f, lang, plan = 'free') {
  return {
    restaurant: String(f.restaurant || '').trim(),
    name: String(f.name || '').trim(),
    email: String(f.email || '').trim().toLowerCase(),
    phone: String(f.phone || '').trim(),
    password: String(f.password || ''),
    terms: !!f.terms,
    website: f.website || '', // honeypot, stays empty for people
    lang: lang === 'en' ? 'en' : 'hu',
    plan: plan === 'pro' ? 'pro' : 'free',
    source: `website-${lang === 'en' ? 'en' : 'hu'}`,
  }
}

export class SignupError extends Error {
  constructor(message, fields = {}, status = 0) { super(message); this.fields = fields; this.status = status }
}

// Resolves to the URL that signs the new owner in; rejects with SignupError.
export async function submitSignup(appUrl, form, lang, plan = 'free', fetchImpl = fetch) {
  const errors = validateSignup(form)
  if (Object.keys(errors).length) throw new SignupError('invalid', errors)
  let res
  try {
    res = await fetchImpl(`${appUrl}/api/public/signup`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupPayload(form, lang, plan)),
    })
  } catch {
    throw new SignupError('network')
  }
  const data = await res.json().catch(() => ({}))
  if (res.status === 429) throw new SignupError('rate_limited', {}, 429)
  if (!res.ok) throw new SignupError(data.error || 'failed', data.fields || {}, res.status)
  if (!data.redirect || !/^https?:\/\//.test(data.redirect)) throw new SignupError('failed')
  return data.redirect
}
