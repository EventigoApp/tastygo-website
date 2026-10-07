<script setup>
import { reactive, ref } from 'vue'
import { useCopy, lang } from '../i18n'
import { APP_URL, appLink } from '../config'
import { icons } from '../icons'
import { intent, submitSignup, validateSignup } from '../signup'

const C = useCopy
const form = reactive({ restaurant: '', name: '', email: '', phone: '', password: '', terms: false, website: '' })
const errors = ref({})
const state = ref('idle') // idle | sending | done
const error = ref('')
const msg = code => C().signup.errors[code] || C().signup.errors.failed

async function submit() {
  error.value = ''
  errors.value = validateSignup(form)
  if (Object.keys(errors.value).length) return
  state.value = 'sending'
  try {
    const url = await submitSignup(APP_URL, form, lang.current, intent.plan)
    state.value = 'done'
    window.location.assign(url)
  } catch (e) {
    state.value = 'idle'
    errors.value = e.fields || {}
    if (!Object.keys(errors.value).length) error.value = msg(e.message)
  }
}
</script>

<template>
  <section id="regisztracio" class="signup">
    <div class="signup-text">
      <span class="eyebrow">{{ C().signup.eyebrow }}</span>
      <h2 class="h2">{{ C().signup.title }}</h2>
      <p class="sub">{{ C().signup.sub }}</p>
      <ul class="perks">
        <li v-for="p in C().signup.perks" :key="p"><component :is="icons.Check" :size="16" :stroke-width="3" />{{ p }}</li>
      </ul>
    </div>
    <div v-if="state === 'done'" class="sform done" role="status"><component :is="icons.Check" :size="26" :stroke-width="3" /> {{ C().signup.done }}</div>
    <form v-else class="sform" novalidate @submit.prevent="submit">
      <div class="seg plan" role="radiogroup" :aria-label="C().signup.plan">
        <button v-for="p in ['free', 'pro']" :key="p" type="button" role="radio" :aria-checked="intent.plan === p" :class="{ on: intent.plan === p }" @click="intent.plan = p">{{ C().signup.plans[p] }}</button>
      </div>
      <p class="plan-note">{{ C().signup.planNote[intent.plan] }}</p>
      <label><span>{{ C().signup.restaurant }} *</span><input v-model="form.restaurant" class="input" :class="{ bad: errors.restaurant }" autocomplete="organization" maxlength="80"><em v-if="errors.restaurant">{{ msg(errors.restaurant) }}</em></label>
      <div class="two">
        <label><span>{{ C().signup.name }}</span><input v-model="form.name" class="input" autocomplete="name" maxlength="100"></label>
        <label><span>{{ C().signup.phone }}</span><input v-model="form.phone" class="input" :class="{ bad: errors.phone }" type="tel" autocomplete="tel" maxlength="40"><em v-if="errors.phone">{{ msg(errors.phone) }}</em></label>
      </div>
      <label><span>{{ C().signup.email }} *</span><input v-model="form.email" class="input" :class="{ bad: errors.email }" type="email" autocomplete="email" maxlength="254"><em v-if="errors.email">{{ msg(errors.email) }}</em></label>
      <label><span>{{ C().signup.password }} *</span><input v-model="form.password" class="input" :class="{ bad: errors.password }" type="password" autocomplete="new-password" maxlength="200"><em v-if="errors.password">{{ msg(errors.password) }}</em><small v-else>{{ C().signup.passwordHint }}</small></label>
      <label class="check" :class="{ bad: errors.terms }">
        <input v-model="form.terms" type="checkbox">
        <span>{{ C().signup.terms[0] }}<a :href="appLink(`/legal/terms${lang.current === 'en' ? '?lang=en' : ''}`)" target="_blank" rel="noopener">{{ C().signup.terms[1] }}</a>{{ C().signup.terms[2] }}<a :href="appLink(`/legal/privacy${lang.current === 'en' ? '?lang=en' : ''}`)" target="_blank" rel="noopener">{{ C().signup.terms[3] }}</a>{{ C().signup.terms[4] }}</span>
      </label>
      <em v-if="errors.terms" class="terms-err">{{ msg(errors.terms) }}</em>
      <input v-model="form.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" name="website">
      <p v-if="error" class="err" role="alert">{{ error }}</p>
      <button class="btn btn-primary btn-lg btn-block" :disabled="state === 'sending'">
        {{ state === 'sending' ? C().signup.sending : C().signup.submit[intent.plan] }}
        <component :is="icons.ArrowRight" v-if="state !== 'sending'" :size="18" :stroke-width="2.75" />
      </button>
      <p class="login">{{ C().signup.haveAccount }} <a :href="appLink('/login')">{{ C().nav.login }}</a></p>
    </form>
  </section>
</template>

<style scoped>
.signup { display: grid; grid-template-columns: 1fr minmax(0, 480px); gap: 48px; align-items: start; padding: 72px 0 32px; }
.perks { list-style: none; padding: 0; margin: 24px 0 0; display: flex; flex-direction: column; gap: 10px; font-size: 16px; }
.perks li { display: flex; gap: 10px; align-items: flex-start; }
.perks svg { color: var(--color-accent-2-600); flex: none; margin-top: 3px; }
.sform { display: flex; flex-direction: column; gap: 14px; background: var(--color-neutral-100); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-md); }
.sform label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; min-width: 0; }
.sform .input { min-height: 44px; background: #fff; }
.sform .input.bad { border-color: #b23a48; }
.sform em, .terms-err { font-style: normal; font-size: 12px; color: #b23a48; font-weight: 600; }
.sform small { font-size: 12px; color: var(--color-neutral-700); font-weight: 400; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.check { flex-direction: row !important; align-items: flex-start; gap: 10px !important; font-weight: 400 !important; font-size: 14px !important; line-height: 1.45; cursor: pointer; }
.check input { width: 18px; height: 18px; margin: 1px 0 0; accent-color: var(--color-accent); flex: none; }
.check.bad span { color: #b23a48; }
.terms-err { margin-top: -8px; }
.seg { display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; border: 1px solid var(--color-divider); align-self: flex-start; background: #fff; }
.seg button { border: 0; background: transparent; cursor: pointer; border-radius: 999px; padding: 7px 16px; font-weight: 700; font-size: 13px; font-family: var(--font-body); color: var(--color-text); }
.seg button.on { background: var(--color-accent); color: var(--color-bg); }
.plan-note { margin: -4px 0 0; font-size: 13px; color: var(--color-neutral-700); }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
.err { margin: 0; color: #b23a48; font-size: 14px; }
.login { margin: 0; text-align: center; font-size: 14px; color: var(--color-neutral-700); }
.done { flex-direction: row; align-items: center; font-size: 17px; font-weight: 700; color: var(--color-accent-2-800); background: var(--color-accent-2-200); }
@media (max-width: 900px) { .signup { grid-template-columns: 1fr; gap: 28px; padding-top: 56px; } }
@media (max-width: 480px) { .two { grid-template-columns: 1fr; } .sform { padding: 20px; } }
</style>
