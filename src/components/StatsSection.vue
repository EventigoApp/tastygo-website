<script setup>
const stats = [
  { value: '0%', label: 'JUTALÉK AZ ONLINE RENDELÉSEKBŐL', bg: 'var(--color-accent-100)', color: 'var(--color-accent-700)' },
  { value: '1', label: 'PLATFORM: RENDELÉS, FOGLALÁS, ADMIN', bg: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-800)' },
  { value: '100%', label: 'SAJÁT MÁRKA ÉS DOMAIN', bg: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-800)' },
  { value: '0', label: 'HOSSZÚ TÁVÚ SZERZŐDÉSI KÖTELEZETTSÉG', bg: 'var(--color-accent-100)', color: 'var(--color-accent-700)' },
]
</script>

<template>
  <section style="padding:24px 0 56px;display:flex;flex-wrap:wrap;gap:20px">
    <div
      v-for="stat in stats"
      :key="stat.label"
      style="flex:1 1 200px;border-radius:var(--radius-lg);padding:28px 24px;min-width:200px"
      :style="{ background: stat.bg }"
    >
      <div style="font-family:var(--font-heading);font-size:clamp(32px,3vw,44px);line-height:1" :style="{ color: stat.color }">{{ stat.value }}</div>
      <div style="font-size:13.5px;letter-spacing:0.03em;opacity:0.75;margin-top:8px">{{ stat.label }}</div>
    </div>
  </section>
</template>
