<script setup>
import EditorDemo from './EditorDemo.vue'
import { useCopy } from '../i18n'
import { appLink, DEMO_URL } from '../config'
import { icons } from '../icons'
const C = useCopy
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-text">
      <span class="eyebrow">{{ C().hero.eyebrow }}</span>
      <h1>{{ C().hero.title }} <span class="accent">{{ C().hero.titleAccent }}</span></h1>
      <p class="lead">{{ C().hero.sub }}</p>
      <div class="ctas">
        <a :href="appLink('/signup')" class="btn btn-primary btn-lg">{{ C().hero.cta }} <component :is="icons.ArrowRight" :size="18" :stroke-width="2.75" /></a>
        <a :href="DEMO_URL" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">{{ C().hero.demo }}</a>
      </div>
      <p class="note"><component :is="icons.Check" :size="14" :stroke-width="3" /> {{ C().hero.note }}</p>
    </div>
    <div class="hero-visual"><EditorDemo /></div>
  </section>
  <section class="stats" aria-label="TastyGo">
    <div v-for="([n, l], i) in C().stats" :key="i" class="stat" :class="{ alt: i % 2 }">
      <b>{{ n }}</b><span>{{ l }}</span>
    </div>
  </section>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr); gap: 56px; align-items: center; padding: 72px 0 48px; }
.hero h1 { font-size: clamp(38px, 5.4vw, 62px); line-height: 1.04; letter-spacing: -0.015em; margin: 14px 0 20px; }
.accent { color: var(--color-accent); }
.lead { font-size: 18px; color: var(--color-neutral-800); max-width: 560px; margin: 0 0 28px; }
.ctas { display: flex; flex-wrap: wrap; gap: 12px; }
.note { display: flex; align-items: center; gap: 6px; margin: 18px 0 0; font-size: 13px; color: var(--color-accent-2-700); }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; padding-bottom: 32px; }
.stat { background: var(--color-accent-100); border-radius: var(--radius-lg); padding: 20px 22px; display: flex; flex-direction: column; gap: 2px; }
.stat.alt { background: var(--color-accent-2-100); }
.stat b { font-family: var(--font-heading); font-weight: 400; font-size: 30px; }
.stat span { font-size: 14px; color: var(--color-neutral-800); }
@media (max-width: 960px) { .hero { grid-template-columns: 1fr; gap: 40px; padding-top: 48px; } .stats { grid-template-columns: repeat(2, 1fr); } }
</style>
