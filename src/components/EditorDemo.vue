<script setup>
// A small, working imitation of the TastyGo editor: pick a color preset or font
// and the sample storefront updates, the way the real editor does.
import { computed, ref } from 'vue'
import { useCopy } from '../i18n'

const PRESETS = [
  { nav: '#2e2b25', bg: '#f9f4ed', accent: '#c67139' },
  { nav: '#7a8a5e', bg: '#f5ead8', accent: '#b23a48' },
  { nav: '#f5ead8', bg: '#ffffff', accent: '#2f6f8f' },
  { nav: '#8c491a', bg: '#e1eecc', accent: '#d9a21b' },
]
const FONTS = ["'Playfair Display', serif", "'Caprasimo', serif", "'DM Serif Display', serif"]
const preset = ref(0), font = ref(0), mode = ref('edit')
const t = computed(() => PRESETS[preset.value])

// Readable text on any background (WCAG luminance), as in the editor.
const lum = h => { const c = [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16) / 255).map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] }
const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05) }
const on = bg => (cr(bg, '#201e1d') >= cr(bg, '#f9f4ed') ? '#201e1d' : '#f9f4ed')
const C = useCopy
</script>

<template>
  <div class="ed" :aria-label="C().hero.tryIt">
    <div class="ed-top">
      <span class="ed-mark">T</span>
      <div class="ed-seg"><button :class="{ on: mode === 'edit' }" @click="mode = 'edit'">{{ C().demo.edit }}</button><button :class="{ on: mode === 'preview' }" @click="mode = 'preview'">{{ C().demo.preview }}</button></div>
      <span class="ed-status"><i />{{ C().demo.live }}</span>
      <span class="ed-publish">{{ C().demo.publish }}</span>
    </div>
    <div class="ed-body">
      <div class="ed-canvas">
        <div class="site" :style="{ background: t.bg, color: on(t.bg) }">
          <div class="site-url"><i /><i /><i /><span>{{ C().demo.url }}</span></div>
          <div class="site-nav" :style="{ background: t.nav, color: on(t.nav), fontFamily: FONTS[font] }">
            <span :class="{ editable: mode === 'edit' }">{{ C().demo.brand }}</span><small>{{ C().demo.menu }}</small>
          </div>
          <div class="site-hero">
            <div class="site-hero-body">
              <h4 :style="{ fontFamily: FONTS[font] }" :class="{ editable: mode === 'edit' }">{{ C().demo.heroTitle }}</h4>
              <p>{{ C().demo.heroSub }}</p>
              <span class="site-cta" :style="{ background: t.accent, color: on(t.accent), fontFamily: FONTS[font] }">{{ C().demo.cta }}</span>
            </div>
          </div>
          <div class="site-menu">
            <div class="site-cat" :style="{ borderColor: t.accent, fontFamily: FONTS[font] }">{{ C().demo.starters }}</div>
            <div v-for="[n, d, p, v] in C().demo.items" :key="n" class="site-item">
              <div class="site-row"><b :style="{ fontFamily: FONTS[font] }">{{ n }}</b><span class="dots" /><b :style="{ color: cr(t.bg, t.accent) >= 4.5 ? t.accent : on(t.bg) }">{{ p }}</b></div>
              <div class="site-desc">{{ d }} <span v-if="v" class="v">V</span></div>
            </div>
          </div>
          <div v-if="mode === 'edit'" class="hint">{{ C().demo.hint }}</div>
        </div>
      </div>
      <div class="ed-panel">
        <div class="lbl">{{ C().hero.tryIt }}</div>
        <div class="swatches">
          <button v-for="(p, i) in PRESETS" :key="i" :class="{ on: preset === i }" :aria-label="`Theme ${i + 1}`" @click="preset = i">
            <span :style="{ background: p.nav }" /><span :style="{ background: p.bg }" /><span :style="{ background: p.accent }" />
          </button>
        </div>
        <div class="fonts">
          <button v-for="(f, i) in FONTS" :key="f" :class="{ on: font === i }" :style="{ fontFamily: f }" @click="font = i">Aa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ed { background: #f5ead8; border-radius: 26px; box-shadow: 0 24px 60px rgba(46, 43, 37, 0.28); overflow: hidden; border: 1px solid var(--color-divider); }
.ed-top { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--color-divider); font-size: 12px; }
.ed-mark { width: 24px; height: 24px; border-radius: 50%; background: var(--color-accent); color: #f5ead8; display: grid; place-items: center; font-family: var(--font-heading); font-size: 13px; }
.ed-seg { display: inline-flex; gap: 2px; padding: 2px; border-radius: 999px; border: 1px solid var(--color-divider); margin: 0 auto; }
.ed-seg button { border: 0; background: transparent; border-radius: 999px; padding: 4px 12px; font-family: var(--font-heading); font-size: 12px; cursor: pointer; color: var(--color-text); }
.ed-seg button.on { background: var(--color-accent); }
.ed-status { display: inline-flex; align-items: center; gap: 6px; color: var(--color-neutral-800); }
.ed-status i { width: 7px; height: 7px; border-radius: 50%; background: var(--color-accent-2); }
.ed-publish { background: var(--color-accent); border-radius: 999px; padding: 5px 12px; font-family: var(--font-heading); }
.ed-body { display: grid; grid-template-columns: 1fr 150px; background: #e6d8be; }
.ed-canvas { padding: 14px; min-width: 0; }
.site { position: relative; border-radius: 6px; overflow: hidden; box-shadow: 0 8px 22px rgba(46, 43, 37, 0.2); transition: background 0.3s, color 0.3s; }
.site-url { display: flex; align-items: center; gap: 4px; height: 22px; padding: 0 8px; background: #d8c9ad; }
.site-url i { width: 6px; height: 6px; border-radius: 50%; background: #b8a98d; }
.site-url span { margin-left: 8px; font-family: ui-monospace, monospace; font-size: 9px; color: #474238; background: #f5ead8; border-radius: 999px; padding: 1px 8px; }
.site-nav { display: flex; align-items: center; justify-content: space-between; height: 34px; padding: 0 14px; font-size: 14px; transition: background 0.3s, color 0.3s; }
.site-nav small { font-family: var(--font-body); font-size: 10px; font-weight: 600; opacity: 0.85; }
.site-hero { height: 150px; position: relative; background: #5d4e3c url('/hero.jpg') center/cover; }
.site-hero::after { content: ''; position: absolute; inset: 0; background: rgba(24, 18, 12, 0.44); }
.site-hero-body { position: absolute; z-index: 1; left: 14px; right: 14px; bottom: 14px; color: #fff; }
.site-hero h4 { margin: 0 0 4px; font-size: 22px; line-height: 1.05; font-weight: 400; }
.site-hero p { margin: 0 0 8px; font-size: 10px; }
.site-cta { display: inline-block; border-radius: 999px; padding: 4px 12px; font-size: 10px; transition: background 0.3s; }
.site-menu { padding: 12px 14px 16px; }
.site-cat { font-size: 15px; border-bottom: 2px solid; padding-bottom: 3px; margin-bottom: 4px; transition: border-color 0.3s; }
.site-item { padding: 6px 0; border-bottom: 1px solid rgba(127, 127, 127, 0.2); }
.site-row { display: flex; align-items: baseline; gap: 6px; font-size: 12px; }
.site-row .dots { flex: 1; border-bottom: 2px dotted rgba(127, 127, 127, 0.35); transform: translateY(-3px); }
.site-desc { font-size: 10px; opacity: 0.72; margin-top: 2px; }
.v { display: inline-block; font-size: 8px; font-weight: 700; padding: 0 5px; border-radius: 999px; background: #e1eecc; color: #3d472b; opacity: 1; }
.editable { outline: 1.5px dashed rgba(198, 113, 57, 0.85); outline-offset: 3px; border-radius: 3px; }
.hint { position: absolute; top: 64px; right: 10px; background: #201e1d; color: #f5ead8; font-size: 9px; padding: 3px 9px; border-radius: 999px; }
.ed-panel { padding: 14px 12px; background: #f5ead8; border-left: 1px solid var(--color-divider); display: flex; flex-direction: column; gap: 12px; }
.lbl { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-neutral-700); font-weight: 700; }
.swatches { display: grid; gap: 8px; }
.swatches button { display: flex; border: 0; padding: 3px; border-radius: 999px; background: transparent; cursor: pointer; box-shadow: inset 0 0 0 1px var(--color-divider); }
.swatches button.on { box-shadow: 0 0 0 2px var(--color-accent); }
.swatches span { flex: 1; height: 18px; }
.swatches span:first-child { border-radius: 999px 0 0 999px; }
.swatches span:last-child { border-radius: 0 999px 999px 0; }
.fonts { display: flex; gap: 6px; }
.fonts button { flex: 1; height: 32px; border-radius: 12px; border: 1px solid var(--color-divider); background: #ebddc5; cursor: pointer; font-size: 15px; color: var(--color-text); }
.fonts button.on { background: var(--color-accent); border-color: transparent; }
@media (max-width: 520px) { .ed-body { grid-template-columns: 1fr; } .ed-panel { border-left: 0; border-top: 1px solid var(--color-divider); flex-direction: row; flex-wrap: wrap; } .swatches { grid-template-columns: repeat(4, 1fr); flex: 1 1 100%; } .ed-publish { display: none; } }
</style>
