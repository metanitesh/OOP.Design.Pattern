interface Game {
  start: () => void
  pause: () => void
  stop: () => void
}

interface SaveableGame {
  save: () => void
  restore: () => void
}

interface VariedDifficultiesGame {
  setDifficulty: () => void
}

export class RPGGame implements Game, SaveableGame, VariedDifficultiesGame {
  start: () => null
  pause: () => void
  stop: () => void
  save: () => void
  restore: () => void
  setDifficulty: () => void

}

export class TapBasedGame implements Game {
  start: () => void
  pause: () => void
  stop: () => void

}
