<script setup>
import { icons } from '../../icons'

defineEmits(['go-to-contact'])
</script>

<template>
  <div style="background:#fff;border-radius:var(--radius-md);box-shadow:var(--shadow-md);max-width:440px;margin:0 auto;padding:36px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px">
    <div style="width:56px;height:56px;border-radius:999px;background:var(--color-accent-100);display:flex;align-items:center;justify-content:center">
      <component :is="icons.Sparkles" :size="28" color="var(--color-accent-700)" :stroke-width="2.75" />
    </div>
    <h3 style="font-size:22px;margin:0">Egyedi csomag</h3>
    <p style="font-size:14.5px;line-height:1.6;opacity:0.75;margin:0">Ehhez nincs előre elkészített demó — mondd el, mire van szükséged, és összeállítjuk neked a megoldást.</p>
    <button type="button" class="btn btn-primary" @click="$emit('go-to-contact')">Kapcsolatfelvétel</button>
  </div>
</template>
