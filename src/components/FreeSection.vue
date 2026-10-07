<script setup>
import { useCopy } from '../i18n'
import { icons } from '../icons'
import { startSignup } from '../signup'
const C = useCopy
</script>

<template>
  <section id="ingyenes" class="block">
    <span class="eyebrow">{{ C().free.eyebrow }}</span>
    <h2 class="h2">{{ C().free.title }}</h2>
    <p class="sub">{{ C().free.sub }}</p>
    <div class="grid">
      <article v-for="[icon, title, text] in C().free.items" :key="title" class="feat">
        <span class="chip"><component :is="icons[icon]" :size="22" :stroke-width="2.75" /></span>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </article>
    </div>
    <div class="cta-row">
      <a href="#regisztracio" class="btn btn-primary btn-lg" @click="startSignup('free')">{{ C().hero.cta }} <component :is="icons.ArrowRight" :size="18" :stroke-width="2.75" /></a>
      <span>{{ C().hero.note }}</span>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 36px; }
.feat { background: var(--color-neutral-100); border-radius: var(--radius-lg); padding: 22px; border: 1px solid var(--color-divider); }
.chip { width: 46px; height: 46px; border-radius: 16px; background: var(--color-accent-100); color: var(--color-accent-700); display: grid; place-items: center; margin-bottom: 16px; }
.feat h3 { font-size: 19px; margin-bottom: 6px; }
.feat p { margin: 0; font-size: 14px; color: var(--color-neutral-800); }
@media (max-width: 1080px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
