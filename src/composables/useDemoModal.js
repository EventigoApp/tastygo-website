import { reactive } from 'vue'

export function useDemoModal(tierCount) {
  const state = reactive({
    isOpen: false,
    activeIndex: 0,
  })

  function open(index) {
    state.activeIndex = index
    state.isOpen = true
  }

  function close() {
    state.isOpen = false
  }

  function step(delta) {
    state.activeIndex = (state.activeIndex + delta + tierCount) % tierCount
  }

  return { state, open, close, step }
}
