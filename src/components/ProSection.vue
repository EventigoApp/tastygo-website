<script setup>
import KitchenMock from './KitchenMock.vue'
import { useCopy } from '../i18n'
import { icons } from '../icons'
const C = useCopy
</script>

<template>
  <section id="pro" class="pro">
    <div class="pro-head">
      <div>
        <span class="eyebrow light">{{ C().pro.eyebrow }}</span>
        <h2 class="h2">{{ C().pro.title }}</h2>
        <p class="sub">{{ C().pro.sub }}</p>
      </div>
      <KitchenMock />
    </div>
    <div class="groups">
      <article v-for="g in C().pro.groups" :key="g.title" class="group">
        <span class="chip"><component :is="icons[g.icon]" :size="22" :stroke-width="2.75" /></span>
        <h3>{{ g.title }}</h3>
        <ul>
          <li v-for="it in g.items" :key="it"><component :is="icons.Check" :size="15" :stroke-width="3" />{{ it }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.pro { background: var(--color-accent-2-100); border-radius: calc(var(--radius-lg) * 1.6); padding: clamp(28px, 5vw, 64px); margin: 40px 0; }
.pro-head { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 48px; align-items: center; }
.eyebrow.light { color: var(--color-accent-2-700); }
.groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
.group { background: var(--color-neutral-100); border-radius: var(--radius-lg); padding: 24px; }
.chip { width: 46px; height: 46px; border-radius: 16px; background: var(--color-accent-2-200); color: var(--color-accent-2-800); display: grid; place-items: center; margin-bottom: 14px; }
.group h3 { font-size: 21px; margin-bottom: 10px; }
.group ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.group li { display: flex; gap: 8px; font-size: 14px; color: var(--color-neutral-800); }
.group li svg { flex: none; margin-top: 3px; color: var(--color-accent-2-600); }
@media (max-width: 1000px) { .pro-head { grid-template-columns: 1fr; } .groups { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .groups { grid-template-columns: 1fr; } }
</style>
