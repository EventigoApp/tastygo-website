<script setup>
import { icons } from '../../icons'
</script>

<template>
  <div style="background:#fff;border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-md);max-width:480px;margin:0 auto">
    <div style="padding:8px 14px;background:var(--color-neutral-200);font-size:12px;opacity:0.6">tastygo.hu/menu/kiskert</div>
    <div style="padding:28px">
      <h3 style="font-size:24px;margin:0 0 4px">Kiskert Vendéglő</h3>
      <p style="font-size:13px;opacity:0.6;margin:0 0 20px">Napi menü és étlap</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
        <span class="tag tag-accent">Előételek</span><span class="tag tag-outline">Levesek</span><span class="tag tag-outline">Főételek</span><span class="tag tag-outline">Desszertek</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;font-size:15px">
        <div style="display:flex;justify-content:space-between"><span>Gombakrémleves</span><span style="opacity:0.7">1 490 Ft</span></div>
        <div style="display:flex;justify-content:space-between"><span>Rántott sertésszelet, rizs</span><span style="opacity:0.7">2 890 Ft</span></div>
        <div style="display:flex;justify-content:space-between"><span>Túrós rétes</span><span style="opacity:0.7">1 190 Ft</span></div>
      </div>
      <div style="margin-top:22px;padding-top:16px;border-top:1px solid var(--color-neutral-300);display:flex;align-items:center;gap:8px">
        <component :is="icons.Share2" :size="16" style="opacity:0.5" />
        <span style="font-size:12px;opacity:0.5">Megosztható link — tedd ki a Facebook oldaladra</span>
      </div>
    </div>
  </div>
</template>
