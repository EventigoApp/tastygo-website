<script setup>
import { useCopy } from '../i18n'
import { appLink, CONTACT_EMAIL, DEMO_URL } from '../config'
const C = useCopy
const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div class="foot-brand">
      <div class="logo"><span class="logo-mark">T</span><span class="logo-text">Tasty<span>go</span></span></div>
      <p>{{ C().footer.tagline }}</p>
    </div>
    <div class="foot-col">
      <b>{{ C().footer.product }}</b>
      <a href="#ingyenes">{{ C().nav.free }}</a>
      <a href="#pro">{{ C().nav.pro }}</a>
      <a href="#arak">{{ C().nav.pricing }}</a>
      <a :href="DEMO_URL" target="_blank" rel="noopener">Demo</a>
    </div>
    <div class="foot-col">
      <b>{{ C().footer.company }}</b>
      <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
      <a :href="appLink('/login')">{{ C().nav.login }}</a>
      <a :href="appLink('/signup')">{{ C().nav.start }}</a>
    </div>
    <div class="foot-bottom">© {{ year }} TastyGo · {{ C().footer.rights }}</div>
  </footer>
</template>

<style scoped>
.foot { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 32px; padding: 48px 0 32px; border-top: 1px solid var(--color-divider); margin-top: 24px; }
.logo { display: flex; align-items: center; gap: 10px; }
.logo-mark { width: 30px; height: 30px; border-radius: 50%; background: var(--color-accent); color: var(--color-bg); display: grid; place-items: center; font-family: var(--font-heading); font-size: 16px; }
.logo-text { font-family: var(--font-heading); font-size: 20px; }
.logo-text span { color: var(--color-accent); }
.foot-brand p { color: var(--color-neutral-700); max-width: 360px; font-size: 14px; }
.foot-col { display: flex; flex-direction: column; gap: 8px; font-size: 14px; }
.foot-col b { margin-bottom: 4px; }
.foot-col a { color: var(--color-neutral-800); }
.foot-bottom { grid-column: 1 / -1; font-size: 13px; color: var(--color-neutral-700); padding-top: 16px; border-top: 1px solid var(--color-divider); }
@media (max-width: 720px) { .foot { grid-template-columns: 1fr 1fr; } .foot-brand { grid-column: 1 / -1; } }
</style>
