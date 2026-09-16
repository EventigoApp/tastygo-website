<script setup>
import { scrollToId } from '../composables/useScrollTo'
</script>

<template>
  <nav style="display:flex;align-items:center;justify-content:space-between;gap:24px;padding:20px clamp(20px,5vw,72px)">
    <span style="font-family:var(--font-heading);font-size:24px;color:var(--color-text)">Tasty<span style="color:var(--color-accent-600)">go</span></span>
    <div style="display:flex;align-items:center;gap:28px;flex-wrap:wrap">
      <a href="#funkciok" style="font-size:15px">Funkciók</a>
      <a href="#arazas" style="font-size:15px">Árazás</a>
      <a href="#kiknek" style="font-size:15px">Kiknek szól</a>
      <button type="button" class="btn btn-primary" @click="scrollToId('arazas')">Demók megtekintése</button>
    </div>
  </nav>
</template>
