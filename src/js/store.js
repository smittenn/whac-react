import { proxy } from "valtio"

/**
 * Our application state.
 * Our "whac" function increments the score if the mole is above the field.
 */
export const state = proxy({
  score: 0,
  isSwinging: false,
  api: {
    whac(position) {
      state.isSwinging = true
      setTimeout(() => state.isSwinging = false, 400)
      if (position.y > 1.25) {
        ++state.score
      }
    }
  }
})