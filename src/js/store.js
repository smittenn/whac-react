import { proxy } from "valtio"

/**
 * Our application state.
 * Our "whac" function increments the score if the mole is above the field.
 */
export const state = proxy({
  score: 0,
  isSwingingForward: false,
  isSwingingBackward: false,
  api: {
    whac(position) {
      state.isSwingingForward = true
      setTimeout(() => { state.isSwingingForward = false; state.isSwingingBackward = true }, 250)
      setTimeout(() => state.isSwingingBackward = false, 500)
      if (position.y > 1.25) {
        ++state.score
      }
    }
  }
})