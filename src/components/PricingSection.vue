<script setup>
import { tiers, rowDefs } from '../data/pricing'
import { scrollToId } from '../composables/useScrollTo'
import PricingCell from './PricingCell.vue'

defineEmits(['open-demo'])

const gridCols = 'grid-template-columns:minmax(160px,1.3fr) repeat(4,minmax(150px,1fr))'
</script>

<template>
  <section id="arazas" style="padding:40px 0 64px">
    <span style="display:block;font-size:13px;letter-spacing:0.06em;text-transform:uppercase;font-weight:600;color:var(--color-accent-700);margin-bottom:16px">Árazás</span>
    <h2 style="font-size:34px;margin:0 0 12px;max-width:20ch">Válaszd ki, mekkora rendszerre van szükséged</h2>
    <p style="font-size:15.5px;opacity:0.75;margin:0 0 32px;max-width:60ch">Minden csomagot ki is próbálhatsz — kattints egy "Demó megtekintése" gombra, és a verziók között is tudsz lapozni.</p>
    <div style="overflow-x:auto;padding-bottom:4px">
      <div style="min-width:820px">
        <div :style="`display:grid;${gridCols};gap:1px;background:var(--color-neutral-300);border-radius:var(--radius-lg) var(--radius-lg) 0 0;overflow:hidden`">
          <div style="background:var(--color-bg)"></div>
          <div v-for="(tier, i) in tiers" :key="tier.name" style="background:var(--color-bg);padding:20px 16px;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center">
            <div style="font-family:var(--font-heading);font-size:19px">{{ tier.name }}</div>
            <div>
              <div style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">{{ tier.price }}</div>
              <div v-if="tier.priceSub" style="font-size:12px;opacity:0.6">{{ tier.priceSub }}</div>
            </div>
            <button type="button" class="btn btn-primary btn-block" style="font-size:13px;padding:8px 10px" @click="scrollToId('kapcsolat')">Megrendelem</button>
            <button type="button" class="btn btn-ghost btn-block" style="font-size:13px;padding:8px 10px" @click="$emit('open-demo', i)">Demó megtekintése</button>
          </div>
        </div>

        <div v-for="[label, vals] in rowDefs" :key="label" :style="`display:grid;${gridCols};gap:1px;background:var(--color-neutral-300)`">
          <div style="background:var(--color-bg);padding:12px 16px;display:flex;align-items:center;font-size:14px">{{ label }}</div>
          <div v-for="(val, i) in vals" :key="i" style="background:var(--color-bg);padding:12px 16px;display:flex;align-items:center;justify-content:center;text-align:center">
            <PricingCell :value="val" />
          </div>
        </div>

        <div :style="`display:grid;${gridCols};gap:1px;background:var(--color-neutral-300);border-radius:0 0 var(--radius-lg) var(--radius-lg);overflow:hidden`">
          <div style="background:var(--color-bg)"></div>
          <div v-for="(tier, i) in tiers" :key="tier.name" style="background:var(--color-bg);padding:20px 16px;display:flex;flex-direction:column;gap:10px">
            <button type="button" class="btn btn-primary btn-block" style="font-size:13px;padding:8px 10px" @click="scrollToId('kapcsolat')">Megrendelem</button>
            <button type="button" class="btn btn-ghost btn-block" style="font-size:13px;padding:8px 10px" @click="$emit('open-demo', i)">Demó megtekintése</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
