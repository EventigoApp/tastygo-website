<template>
  <section style="padding:8px 0 64px">
    <div id="kapcsolat" style="background:var(--color-accent-2-100);border-radius:calc(2 * var(--radius-lg));padding:48px clamp(24px,4vw,64px);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px">
      <div style="max-width:480px">
        <h3 style="font-size:28px;margin:0 0 12px">Készen állsz a saját rendelési platformra?</h3>
        <p style="font-size:15.5px;line-height:1.6;opacity:0.8;margin:0">Kérj egy ingyenes, személyes demót — megmutatjuk, hogyan nézne ki a Tastygo a te éttermed arculatával.</p>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;max-width:420px;flex:1 1 320px">
        <input class="input" type="email" placeholder="te@etterem.hu" aria-label="Email cím" style="flex:1;min-width:200px">
        <button type="button" class="btn btn-primary">Demó kérése</button>
      </div>
    </div>
    <p style="font-size:14px;opacity:0.7;text-align:center;margin:20px 0 0">Van kérdésed, amit a weboldal nem válaszolt meg? <a href="mailto:info@tastygo.hu">Írj nekünk az info@tastygo.hu címre</a>.</p>
  </section>
</template>
