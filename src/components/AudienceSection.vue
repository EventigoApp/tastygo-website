<script setup>
import { useCopy } from '../i18n'
import { icons } from '../icons'
const C = useCopy
</script>

<template>
  <section id="kiknek" class="block">
    <span class="eyebrow">{{ C().audience.eyebrow }}</span>
    <h2 class="h2">{{ C().audience.title }}</h2>
    <div class="aud">
      <article v-for="([icon, title, text], i) in C().audience.items" :key="title" class="card-a" :class="{ alt: i % 2 }">
        <component :is="icons[icon]" :size="26" :stroke-width="2.5" />
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.aud { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 32px; }
.card-a { background: var(--color-accent-100); border-radius: var(--radius-lg); padding: 24px; color: var(--color-accent-800); }
.card-a.alt { background: var(--color-accent-2-100); color: var(--color-accent-2-800); }
.card-a h3 { font-size: 20px; margin: 14px 0 6px; color: var(--color-text); }
.card-a p { margin: 0; font-size: 14px; color: var(--color-neutral-800); }
@media (max-width: 960px) { .aud { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .aud { grid-template-columns: 1fr; } }
</style>
