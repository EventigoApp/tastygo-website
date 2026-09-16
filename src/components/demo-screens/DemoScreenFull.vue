<template>
  <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,220px);gap:16px;max-width:680px;margin:0 auto">
    <div style="background:#fff;border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-md)">
      <div style="padding:8px 14px;background:var(--color-neutral-200);font-size:12px;opacity:0.6">kiskertvendeglo.hu</div>
      <div style="padding:24px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <h3 style="font-size:22px;margin:0">Kiskert Vendéglő</h3>
          <span class="tag tag-neutral">Belváros ▾</span>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:16px">
          <span class="tag tag-accent">Rendelés</span><span class="tag tag-outline">Asztalfoglalás</span><span class="tag tag-outline">Akciók</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:14px">
          <div style="display:flex;justify-content:space-between;align-items:center"><span>Gombakrémleves</span><div style="display:flex;align-items:center;gap:8px"><span style="opacity:0.7">1 490 Ft</span><button type="button" class="btn btn-secondary" style="padding:3px 9px;font-size:11px">Kosárba</button></div></div>
          <div style="display:flex;justify-content:space-between;align-items:center"><span>Rántott sertésszelet, rizs</span><div style="display:flex;align-items:center;gap:8px"><span style="opacity:0.7">2 890 Ft</span><button type="button" class="btn btn-secondary" style="padding:3px 9px;font-size:11px">Kosárba</button></div></div>
        </div>
        <div style="margin-top:14px"><span class="tag tag-accent-2">-15% törzsvendég kupon</span></div>
      </div>
    </div>
    <div style="background:#fff;border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-md);padding:16px;display:flex;flex-direction:column;gap:10px">
      <div style="font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;opacity:0.6">Admin — beérkező</div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px"><span>#128 Nagy J.</span><span class="tag tag-accent-2" style="font-size:10px">Új</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px"><span>#127 Kiss P.</span><span class="tag tag-accent" style="font-size:10px">Készül</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px"><span>#126 Tóth É.</span><span class="tag tag-neutral" style="font-size:10px">Kész</span></div>
    </div>
  </div>
</template>
