import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { validateSignup, signupPayload, submitSignup, SignupError } from '../src/signup.js'

const ok = { restaurant: 'Mákos Bistro', name: 'Anna', email: ' Anna@Example.com ', phone: '+36 30 123 4567', password: 'password123', terms: true, website: '' }

test('validation: required fields, email, password, phone, terms', () => {
  assert.deepEqual(validateSignup(ok), {})
  assert.deepEqual(validateSignup({}), { restaurant: 'required', email: 'invalid_email', password: 'password_too_short', terms: 'terms_required' })
  assert.equal(validateSignup({ ...ok, phone: 'call me' }).phone, 'invalid_phone')
  assert.equal(validateSignup({ ...ok, phone: '' }).phone, undefined, 'phone is optional')
  assert.equal(validateSignup({ ...ok, terms: false }).terms, 'terms_required')
})

test('payload: trimmed, lower-case email, plan and source', () => {
  const p = signupPayload(ok, 'en', 'pro')
  assert.equal(p.email, 'anna@example.com')
  assert.equal(p.lang, 'en')
  assert.equal(p.plan, 'pro')
  assert.equal(p.source, 'website-en')
  assert.equal(p.terms, true)
  assert.equal(signupPayload(ok, 'xx', 'gold').plan, 'free')
})

function fakeFetch(status, body) {
  const calls = []
  const fn = async (url, init) => { calls.push({ url, init }); return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } }) }
  fn.calls = calls
  return fn
}

test('submit: posts to the app and returns the sign-in link', async () => {
  const f = fakeFetch(200, { ok: true, redirect: 'https://app.tastygo.hu/api/auth/handoff?token=abc' })
  const url = await submitSignup('https://app.tastygo.hu', ok, 'hu', 'free', f)
  assert.equal(url, 'https://app.tastygo.hu/api/auth/handoff?token=abc')
  assert.equal(f.calls[0].url, 'https://app.tastygo.hu/api/public/signup')
  assert.equal(JSON.parse(f.calls[0].init.body).restaurant, 'Mákos Bistro')
})

test('submit: invalid form is not sent; server field errors come back', async () => {
  const f = fakeFetch(200, {})
  await assert.rejects(submitSignup('https://x', { ...ok, terms: false }, 'hu', 'free', f), e => e instanceof SignupError && e.fields.terms === 'terms_required')
  assert.equal(f.calls.length, 0)
  await assert.rejects(submitSignup('https://x', ok, 'hu', 'free', fakeFetch(400, { error: 'An account with this email already exists.', fields: { email: 'email_taken' } })), e => e.fields.email === 'email_taken')
  await assert.rejects(submitSignup('https://x', ok, 'hu', 'free', fakeFetch(429, { error: 'Too many' })), e => e.message === 'rate_limited')
  await assert.rejects(submitSignup('https://x', ok, 'hu', 'free', fakeFetch(200, { redirect: 'javascript:alert(1)' })), e => e.message === 'failed')
  await assert.rejects(submitSignup('https://x', ok, 'hu', 'free', async () => { throw new TypeError('offline') }), e => e.message === 'network')
})

test('every sign-up button leads to the form on the page', () => {
  const dir = new URL('../src/components/', import.meta.url)
  const all = fs.readdirSync(dir).map(f => fs.readFileSync(new URL(f, dir), 'utf8')).join('\n')
  assert.ok(!all.includes("appLink('/signup')"), 'no button sends people away to sign up')
  assert.ok((all.match(/href="#regisztracio"/g) || []).length >= 6)
  const app = fs.readFileSync(new URL('../src/App.vue', import.meta.url), 'utf8')
  assert.match(app, /<SignupSection \/>/)
  const i18n = fs.readFileSync(new URL('../src/i18n.js', import.meta.url), 'utf8')
  assert.equal((i18n.match(/signup: \{/g) || []).length, 2, 'copy in Hungarian and English')
})
