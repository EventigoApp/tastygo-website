<script setup>
import { ref } from 'vue'
import { useCopy, lang, setLang } from '../i18n'
import { appLink } from '../config'
import { startSignup } from '../signup'
import { icons } from '../icons'

const open = ref(false)
const links = [['how', '#hogyan'], ['free', '#ingyenes'], ['pro', '#pro'], ['pricing', '#arak'], ['faq', '#gyik']]
</script>

<template>
  <header class="nav">
    <div class="page-container nav-inner">
      <a href="#top" class="logo" aria-label="TastyGo">
        <span class="logo-mark">T</span><span class="logo-text">Tasty<span>go</span></span>
      </a>
      <nav class="nav-links" :class="{ open }" :aria-label="useCopy().nav.menu">
        <a v-for="[k, href] in links" :key="k" :href="href" @click="open = false">{{ useCopy().nav[k] }}</a>
        <a :href="appLink('/login')" class="nav-login">{{ useCopy().nav.login }}</a>
        <div class="seg menu-lang" role="group" aria-label="Language">
          <button v-for="l in ['hu', 'en']" :key="l" :class="{ on: lang.current === l }" @click="setLang(l)">{{ l.toUpperCase() }}</button>
        </div>
      </nav>
      <div class="nav-right">
        <div class="seg head-lang" role="group" aria-label="Language">
          <button v-for="l in ['hu', 'en']" :key="l" :class="{ on: lang.current === l }" @click="setLang(l)">{{ l.toUpperCase() }}</button>
        </div>
        <a href="#regisztracio" class="btn btn-primary nav-cta" @click="startSignup('free'); open = false"><span class="long">{{ useCopy().nav.start }}</span><span class="short">{{ useCopy().nav.startShort }}</span></a>
        <button class="btn btn-icon burger" :aria-expanded="open" :aria-label="useCopy().nav.menu" @click="open = !open">
          <component :is="open ? icons.X : icons.Menu" :size="20" :stroke-width="2.5" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav { position: sticky; top: 0; z-index: 40; background: color-mix(in srgb, var(--color-bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--color-divider); }
.nav-inner { display: flex; align-items: center; gap: 24px; min-height: 68px; }
.logo { display: flex; align-items: center; gap: 10px; color: var(--color-text); text-decoration: none !important; }
.logo-mark { width: 34px; height: 34px; border-radius: 50%; background: var(--color-accent); color: var(--color-bg); display: grid; place-items: center; font-family: var(--font-heading); font-size: 18px; }
.logo-text { font-family: var(--font-heading); font-size: 22px; }
.logo-text span { color: var(--color-accent); }
.nav-links { display: flex; gap: 22px; margin-left: 12px; flex: 1; }
.nav-links a { color: var(--color-text); font-weight: 600; font-size: 14px; }
.nav-links a:hover { color: var(--color-accent-700); }
.nav-login { margin-left: auto; }
.nav-right { display: flex; align-items: center; gap: 10px; }
.seg { display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; border: 1px solid var(--color-divider); }
.seg button { border: 0; background: transparent; cursor: pointer; border-radius: 999px; padding: 5px 10px; font-weight: 700; font-size: 12px; font-family: var(--font-body); color: var(--color-text); }
.seg button.on { background: var(--color-accent); color: var(--color-bg); }
.burger { display: none; }
@media (max-width: 960px) {
  .burger { display: inline-flex; }
  .nav-links { display: none; position: absolute; top: 68px; left: 0; right: 0; flex-direction: column; gap: 0; margin: 0; padding: 8px clamp(20px, 5vw, 72px) 18px; background: var(--color-bg); border-bottom: 1px solid var(--color-divider); box-shadow: var(--shadow-md); }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px 0; border-bottom: 1px solid var(--color-divider); }
  .nav-login { margin-left: 0; }
}

.nav-cta .short { display: none; }
.menu-lang { display: none; }
@media (max-width: 560px) { .head-lang { display: none; } .menu-lang { display: inline-flex; align-self: flex-start; margin-top: 12px; } .nav-right { margin-left: auto; } .nav-cta { padding: 8px 14px; } .nav-cta .long { display: none; } .nav-cta .short { display: inline; } .logo-text { font-size: 19px; } .nav-inner { gap: 12px; } }
</style>
