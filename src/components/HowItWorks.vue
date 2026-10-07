<script setup>
import { useCopy } from '../i18n'
const C = useCopy
</script>

<template>
  <section id="hogyan" class="block">
    <span class="eyebrow">{{ C().how.eyebrow }}</span>
    <h2 class="h2">{{ C().how.title }}</h2>
    <ol class="steps">
      <li v-for="([title, text], i) in C().how.steps" :key="i" class="step">
        <span class="num">{{ i + 1 }}</span>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.steps { list-style: none; padding: 0; margin: 36px 0 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; counter-reset: s; }
.step { background: var(--color-surface); border-radius: var(--radius-lg); padding: 26px; position: relative; }
.num { width: 42px; height: 42px; border-radius: 50%; background: var(--color-accent); color: var(--color-bg); display: grid; place-items: center; font-family: var(--font-heading); font-size: 20px; margin-bottom: 18px; }
.step h3 { font-size: 22px; margin-bottom: 8px; }
.step p { margin: 0; color: var(--color-neutral-800); }
@media (max-width: 860px) { .steps { grid-template-columns: 1fr; } }
</style>
