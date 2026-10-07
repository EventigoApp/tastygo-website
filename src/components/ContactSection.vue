<script setup>
import { reactive, ref } from 'vue'
import { useCopy, lang } from '../i18n'
import { APP_URL, CONTACT_EMAIL } from '../config'
import { icons } from '../icons'

const C = useCopy
const form = reactive({ name: '', email: '', restaurant: '', message: '', website: '' })
const state = ref('idle') // idle | sending | sent | error
const error = ref('')

async function submit() {
  state.value = 'sending'; error.value = ''
  try {
    const res = await fetch(`${APP_URL}/api/public/leads`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, source: `website-${lang.current}` }),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || '')
    }
    state.value = 'sent'
  } catch (e) {
    state.value = 'error'
    error.value = C().contact.error
  }
}
</script>

<template>
  <section id="kapcsolat" class="contact">
    <div class="contact-text">
      <span class="eyebrow light">{{ C().contact.eyebrow }}</span>
      <h2 class="h2">{{ C().contact.title }}</h2>
      <p class="sub">{{ C().contact.sub }}</p>
      <p class="mail"><component :is="icons.Mail" :size="18" :stroke-width="2.5" /> {{ C().contact.or }} <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a></p>
    </div>
    <div v-if="state === 'sent'" class="done" role="status"><component :is="icons.Check" :size="28" :stroke-width="3" /> {{ C().contact.sent }}</div>
    <form v-else class="cform" @submit.prevent="submit">
      <div class="row">
        <label><span>{{ C().contact.name }}</span><input v-model="form.name" class="input" autocomplete="name"></label>
        <label><span>{{ C().contact.restaurant }}</span><input v-model="form.restaurant" class="input" autocomplete="organization"></label>
      </div>
      <label><span>{{ C().contact.email }} *</span><input v-model="form.email" class="input" type="email" autocomplete="email" required></label>
      <label><span>{{ C().contact.message }}</span><textarea v-model="form.message" class="input" rows="4" /></label>
      <input v-model="form.website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <p v-if="error" class="err" role="alert">{{ error }}</p>
      <button class="btn btn-primary btn-lg" :disabled="state === 'sending'">{{ state === 'sending' ? C().contact.sending : C().contact.send }}</button>
    </form>
  </section>
</template>

<style scoped>
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; background: var(--color-neutral-900); color: var(--color-bg); border-radius: calc(var(--radius-lg) * 1.6); padding: clamp(28px, 5vw, 64px); margin: 40px 0; }
.contact .h2 { color: var(--color-bg); }
.contact .sub { color: color-mix(in srgb, var(--color-bg) 80%, transparent); }
.eyebrow.light { color: var(--color-accent-400); }
.mail { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 20px 0 0; }
.mail a { color: var(--color-accent-300); }
.cform { display: flex; flex-direction: column; gap: 14px; background: var(--color-bg); color: var(--color-text); border-radius: var(--radius-lg); padding: 24px; }
.cform label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; flex: 1; min-width: 0; }
.row { display: flex; gap: 12px; flex-wrap: wrap; }
.cform .input { min-height: 44px; }
.cform textarea.input { border-radius: 20px; padding: 12px 16px; resize: vertical; }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
.err { margin: 0; color: #b23a48; font-size: 14px; }
.done { display: flex; align-items: center; gap: 12px; background: var(--color-accent-2-200); color: var(--color-accent-2-800); border-radius: var(--radius-lg); padding: 28px; font-size: 18px; font-weight: 700; }
@media (max-width: 860px) { .contact { grid-template-columns: 1fr; } }
</style>
