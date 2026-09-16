<script setup>
import { features } from '../data/features'
import { icons } from '../icons'
</script>

<template>
  <section id="funkciok" style="padding:40px 0 56px">
    <span style="display:block;font-size:13px;letter-spacing:0.06em;text-transform:uppercase;font-weight:600;color:var(--color-accent-700);margin-bottom:16px">Funkciók</span>
    <h2 style="font-size:34px;margin:0 0 40px;max-width:16ch">Minden, ami egy étterem online működéséhez kell</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px 40px">
      <div v-for="feature in features" :key="feature.title" style="display:flex;flex-direction:column;gap:12px">
        <div style="width:48px;height:48px;border-radius:var(--radius-lg);background:var(--color-accent-100);display:flex;align-items:center;justify-content:center">
          <component :is="icons[feature.icon]" :size="24" color="var(--color-accent-700)" :stroke-width="2.75" />
        </div>
        <h3 style="font-size:21px">{{ feature.title }}</h3>
        <p style="font-size:15px;line-height:1.6;opacity:0.78;margin:0">{{ feature.copy }}</p>
      </div>
    </div>
  </section>
</template>
