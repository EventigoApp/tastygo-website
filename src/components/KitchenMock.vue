<script setup>
// Animated mock of the Pro kitchen board: tickets move from column to column.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useCopy } from '../i18n'
import { icons } from '../icons'

const C = useCopy
const tickets = ref([
  { n: 1042, col: 0, type: 'delivery', time: '18:30', items: ['2× Gulyásleves', '1× Somlói galuska'] },
  { n: 1041, col: 1, type: 'pickup', time: 'ASAP', items: ['1× Paprikás csirke', '1× Házi limonádé'] },
  { n: 1040, col: 2, type: 'delivery', time: '18:15', items: ['3× Lángos'] },
])
let timer, next = 1043
onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    tickets.value = tickets.value.map(t => ({ ...t, col: t.col + 1 })).filter(t => t.col < 3)
    tickets.value.unshift({ n: next++, col: 0, type: next % 2 ? 'pickup' : 'delivery', time: next % 3 ? '19:00' : 'ASAP', items: next % 2 ? ['1× Marhapörkölt', '2× Lángos'] : ['2× Halászlé'] })
  }, 3200)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="board" aria-hidden="true">
    <div class="board-top"><component :is="icons.ChefHat" :size="16" :stroke-width="2.75" /> {{ C().pro.board.title }}<span class="live" /></div>
    <div class="cols">
      <div v-for="(col, ci) in C().pro.board.cols" :key="ci" class="col">
        <div class="col-head">{{ col }} <span>{{ tickets.filter(t => t.col === ci).length }}</span></div>
        <TransitionGroup name="tk" tag="div" class="col-body">
          <div v-for="t in tickets.filter(x => x.col === ci)" :key="t.n" class="tk">
            <div class="tk-top"><b>#{{ t.n }}</b><span class="pill" :class="t.type">{{ t.type === 'delivery' ? C().pro.board.delivery : C().pro.board.pickup }}</span></div>
            <div class="tk-time"><component :is="icons.Clock" :size="12" :stroke-width="2.75" /> {{ t.time }}</div>
            <div v-for="it in t.items" :key="it" class="tk-item">{{ it }}</div>
            <div class="tk-btn">{{ ci === 0 ? C().pro.board.next : ci === 1 ? C().pro.board.done : C().pro.board.out }}</div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board { background: var(--color-neutral-900); color: var(--color-bg); border-radius: 26px; padding: 16px; box-shadow: var(--shadow-lg); }
.board-top { display: flex; align-items: center; gap: 8px; font-family: var(--font-heading); font-size: 16px; padding: 2px 4px 12px; }
.live { width: 8px; height: 8px; border-radius: 50%; background: #9fd36b; margin-left: auto; box-shadow: 0 0 0 4px rgba(159, 211, 107, 0.2); }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.col { background: rgba(245, 234, 216, 0.06); border-radius: 18px; padding: 10px; min-height: 270px; }
.col-head { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.8; padding: 2px 4px 10px; }
.col-head span { background: rgba(245, 234, 216, 0.14); border-radius: 999px; padding: 0 8px; }
.col-body { display: flex; flex-direction: column; gap: 8px; }
.tk { background: var(--color-bg); color: var(--color-text); border-radius: 14px; padding: 10px; font-size: 12px; }
.tk-top { display: flex; justify-content: space-between; align-items: center; }
.tk-top b { font-family: var(--font-heading); font-weight: 400; font-size: 15px; }
.pill { font-size: 10px; font-weight: 700; border-radius: 999px; padding: 1px 8px; }
.pill.delivery { background: var(--color-accent-200); color: var(--color-accent-800); }
.pill.pickup { background: var(--color-accent-2-200); color: var(--color-accent-2-800); }
.tk-time { display: flex; align-items: center; gap: 4px; color: var(--color-neutral-700); margin: 4px 0 6px; }
.tk-item { padding: 2px 0; }
.tk-btn { margin-top: 8px; text-align: center; background: var(--color-accent); border-radius: 999px; padding: 4px; font-family: var(--font-heading); }
.tk-enter-from { opacity: 0; transform: translateY(-10px); }
.tk-leave-to { opacity: 0; transform: translateX(20px); }
.tk-enter-active, .tk-leave-active { transition: all 0.4s ease; }
.tk-leave-active { position: absolute; }
@media (max-width: 560px) { .col:nth-child(3) { display: none; } .cols { grid-template-columns: repeat(2, 1fr); } }
</style>
