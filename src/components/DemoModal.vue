<script setup>
import { icons } from '../icons'
import { tiers } from '../data/pricing'
import { scrollToId } from '../composables/useScrollTo'
import DemoScreenFree from './demo-screens/DemoScreenFree.vue'
import DemoScreenBasic from './demo-screens/DemoScreenBasic.vue'
import DemoScreenFull from './demo-screens/DemoScreenFull.vue'
import DemoScreenCustom from './demo-screens/DemoScreenCustom.vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  activeIndex: { type: Number, required: true },
})
const emit = defineEmits(['close', 'step'])

const demoScreens = [DemoScreenFree, DemoScreenBasic, DemoScreenFull, DemoScreenCustom]

function onBackdropClick(event) {
  if (event.target === event.currentTarget) emit('close')
}

function goToContact() {
  emit('close')
  scrollToId('kapcsolat')
}
</script>

<template>
  <div class="dialog-backdrop" :class="{ open: isOpen }" @click="onBackdropClick">
    <div class="dialog">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;background:var(--color-accent-2-100)">
        <button type="button" class="btn btn-icon" @click="emit('step', -1)" aria-label="Előző verzió">
          <component :is="icons.ChevronLeft" :size="20" />
        </button>
        <div style="text-align:center">
          <div style="font-family:var(--font-heading);font-size:18px">{{ tiers[activeIndex].name }} csomag</div>
          <div style="font-size:13px;opacity:0.7">{{ tiers[activeIndex].price }}{{ tiers[activeIndex].priceSub ? ' ' + tiers[activeIndex].priceSub : '' }}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <button type="button" class="btn btn-icon" @click="emit('step', 1)" aria-label="Következő verzió">
            <component :is="icons.ChevronRight" :size="20" />
          </button>
          <button type="button" class="btn btn-icon" @click="emit('close')" aria-label="Bezárás">
            <component :is="icons.X" :size="20" />
          </button>
        </div>
      </div>
      <div style="background:var(--color-neutral-100);padding:28px;overflow-y:auto;flex:1">
        <component :is="demoScreens[activeIndex]" @go-to-contact="goToContact" />
      </div>
      <div style="padding:16px 20px;border-top:1px solid var(--color-neutral-300);background:#fff">
        <p style="font-size:13.5px;line-height:1.55;opacity:0.8;margin:0">{{ tiers[activeIndex].demoDesc }}</p>
      </div>
    </div>
  </div>
</template>
