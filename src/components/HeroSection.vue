<script setup>
import { scrollToId } from '../composables/useScrollTo'
</script>

<template>
  <section style="position:relative;padding:64px 0 56px">
    <div style="position:absolute;right:-140px;top:-160px;width:380px;height:380px;border-radius:50%;background:var(--color-accent-2-200);z-index:-1"></div>
    <h1 style="font-size:clamp(38px,5.5vw,68px);line-height:1.1;max-width:16ch">Minden, ami éttermednek kell! Jutalék = 0%</h1>
    <p style="font-size:18px;line-height:1.65;opacity:0.85;max-width:58ch;margin:28px 0 0">A Tastygo online rendelést és asztalfoglalást ad az éttermednek, gyorséttermednek vagy street food vállalkozásodnak — saját néven, saját domainen, saját arculattal. Ingyenes menüoldaltól a teljes rendelési és foglalási rendszerig, a te tempódban bővíthető.</p>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:32px">
      <button type="button" class="btn btn-primary" @click="scrollToId('arazas')">Tekintse meg rendszerünket</button>
      <button type="button" class="btn btn-ghost" @click="scrollToId('funkciok')">Funkciók megtekintése</button>
    </div>
  </section>
</template>
