<script setup>
import { icons } from '../icons'

defineProps({
  value: { type: [Boolean, String], required: true },
})
</script>

<template>
  <component :is="icons.Check" v-if="value === true" :size="19" color="var(--color-accent-2-700)" :stroke-width="2.75" />
  <component :is="icons.Minus" v-else-if="value === false" :size="16" color="var(--color-text)" style="opacity:0.3" />
  <span v-else style="font-size:13px;opacity:0.8">{{ value }}</span>
</template>
