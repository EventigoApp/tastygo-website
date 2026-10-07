<script setup>
import { ref } from 'vue'
import { useCopy } from '../i18n'
import { appLink } from '../config'
import { icons } from '../icons'
const C = useCopy
const showTable = ref(false)
</script>

<template>
  <section id="arak" class="block">
    <span class="eyebrow">{{ C().plans.eyebrow }}</span>
    <h2 class="h2">{{ C().plans.title }}</h2>
    <p class="sub">{{ C().plans.sub }}</p>
    <div class="plans">
      <article class="plan">
        <h3>{{ C().plans.free.name }}</h3>
        <div class="price"><b>{{ C().plans.free.price }}</b><span>{{ C().plans.free.per }}</span></div>
        <p class="desc">{{ C().plans.free.desc }}</p>
        <a :href="appLink('/signup')" class="btn btn-secondary btn-block">{{ C().plans.free.cta }}</a>
        <ul><li v-for="it in C().plans.free.items" :key="it"><component :is="icons.Check" :size="15" :stroke-width="3" />{{ it }}</li></ul>
      </article>
      <article class="plan featured">
        <span class="badge">{{ C().plans.pro.badge }}</span>
        <h3>{{ C().plans.pro.name }}</h3>
        <div class="price"><b>{{ C().plans.pro.price }}</b><span>{{ C().plans.pro.per }}</span></div>
        <div class="setup">{{ C().plans.pro.setup }}</div>
        <p class="desc">{{ C().plans.pro.desc }}</p>
        <a :href="appLink('/signup')" class="btn btn-primary btn-block">{{ C().plans.pro.cta }}</a>
        <ul><li v-for="it in C().plans.pro.items" :key="it"><component :is="icons.Check" :size="15" :stroke-width="3" />{{ it }}</li></ul>
      </article>
      <article class="plan custom">
        <h3>{{ C().plans.custom.name }}</h3>
        <div class="price"><b class="small">{{ C().plans.custom.price }}</b></div>
        <p class="desc">{{ C().plans.custom.desc }}</p>
        <a href="#kapcsolat" class="btn btn-secondary btn-block">{{ C().plans.custom.cta }}</a>
      </article>
    </div>
    <button class="btn btn-ghost toggle" :aria-expanded="showTable" @click="showTable = !showTable">
      {{ C().plans.compare }} <component :is="icons.ChevronDown" :size="16" :stroke-width="2.75" :style="{ transform: showTable ? 'rotate(180deg)' : '' }" />
    </button>
    <div v-if="showTable" class="table-wrap">
      <table class="cmp">
        <thead><tr><th>{{ C().plans.feature }}</th><th>{{ C().plans.free.name }}</th><th>{{ C().plans.pro.name }}</th></tr></thead>
        <tbody>
          <tr v-for="[label, a, b] in C().plans.rows" :key="label">
            <td>{{ label }}</td>
            <td v-for="(v, i) in [a, b]" :key="i" class="c">
              <component :is="icons.Check" v-if="v === true" :size="18" :stroke-width="3" class="yes" :aria-label="'✓'" />
              <component :is="icons.Minus" v-else-if="v === false" :size="18" :stroke-width="2.5" class="no" :aria-label="'–'" />
              <span v-else>{{ v }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.plans { display: grid; grid-template-columns: 1fr 1.1fr 0.9fr; gap: 16px; margin-top: 36px; align-items: start; }
.plan { position: relative; background: var(--color-neutral-100); border: 1px solid var(--color-divider); border-radius: var(--radius-lg); padding: 28px; display: flex; flex-direction: column; gap: 12px; }
.plan.featured { background: var(--color-surface); border: 2px solid var(--color-accent); box-shadow: var(--shadow-md); }
.plan.custom { background: transparent; border-style: dashed; }
.badge { position: absolute; top: -12px; left: 28px; background: var(--color-accent); color: var(--color-bg); font-size: 12px; font-weight: 700; border-radius: 999px; padding: 3px 12px; }
.plan h3 { font-size: 24px; }
.price { display: flex; align-items: baseline; gap: 6px; }
.price b { font-family: var(--font-heading); font-weight: 400; font-size: 40px; line-height: 1; }
.price b.small { font-size: 28px; }
.price span { color: var(--color-neutral-700); }
.setup { font-size: 13px; color: var(--color-neutral-700); margin-top: -6px; }
.desc { margin: 0; color: var(--color-neutral-800); font-size: 14px; }
.plan ul { list-style: none; padding: 0; margin: 6px 0 0; display: flex; flex-direction: column; gap: 8px; }
.plan li { display: flex; gap: 8px; font-size: 14px; }
.plan li svg { flex: none; margin-top: 3px; color: var(--color-accent-2-600); }
.toggle { margin-top: 20px; }
.table-wrap { overflow-x: auto; margin-top: 8px; border-radius: var(--radius-lg); border: 1px solid var(--color-divider); background: var(--color-neutral-100); }
.cmp { width: 100%; border-collapse: collapse; font-size: 14px; }
.cmp th { text-align: left; padding: 14px 18px; font-family: var(--font-heading); font-weight: 400; font-size: 16px; border-bottom: 1px solid var(--color-divider); }
.cmp td { padding: 12px 18px; border-bottom: 1px solid var(--color-divider); }
.cmp tr:last-child td { border-bottom: 0; }
.cmp .c, .cmp th:not(:first-child) { text-align: center; width: 120px; }
.yes { color: var(--color-accent-2-600); }
.no { color: var(--color-neutral-500); }
@media (max-width: 960px) { .plans { grid-template-columns: 1fr; } }
</style>
