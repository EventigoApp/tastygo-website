<script setup>
import { useCopy } from '../i18n'
import { icons } from '../icons'
const C = useCopy
</script>

<template>
  <section id="gyik" class="block faq">
    <div>
      <span class="eyebrow">{{ C().faq.eyebrow }}</span>
      <h2 class="h2">{{ C().faq.title }}</h2>
    </div>
    <div class="list">
      <details v-for="([q, a], i) in C().faq.items" :key="i" class="qa">
        <summary>{{ q }}<component :is="icons.Plus" :size="18" :stroke-width="2.75" class="ic" /></summary>
        <p>{{ a }}</p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.faq { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 40px; align-items: start; }
.list { display: flex; flex-direction: column; gap: 10px; }
.qa { background: var(--color-neutral-100); border: 1px solid var(--color-divider); border-radius: 22px; padding: 0 22px; }
.qa summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; gap: 16px; align-items: center; padding: 18px 0; font-weight: 700; }
.qa summary::-webkit-details-marker { display: none; }
.qa .ic { flex: none; color: var(--color-accent); transition: transform 0.2s; }
.qa[open] .ic { transform: rotate(45deg); }
.qa p { margin: 0 0 18px; color: var(--color-neutral-800); }
@media (max-width: 860px) { .faq { grid-template-columns: 1fr; gap: 24px; } }
</style>
