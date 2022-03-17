import create from "zustand"
import {
  extractSolutions,
  generateColumn,
  getUniqueRandomNumbers
} from "helpers/extract-solutions"
import { GRID_SIZE, NUMBERS } from "helpers"

type Store = {
  bingo: boolean
  name: string
  grid: number[][]
  usedNumbers: number[]
  availableNumbers: number[]
  solutions: number[][]
  highlighted: number[]
  highlight: (number: number[]) => void
  startTime: number
  duration: number
  setName: (name: string) => void
  complete: () => void
  drawNumber: () => void
  generateNumbers: () => void
  generateGrid: () => void
  generateSolutions: () => void
  initialize: () => void
}

const useStore = create<Store>((set, get) => ({
  bingo: false,
  grid: [],
  startTime: 0,
  duration: 0,
  solutions: [],
  usedNumbers: [0],
  availableNumbers: [],
  highlighted: [],
  name: "",
  setName: (name) => set({ name }),
  complete: () =>
    set(({ startTime }) => ({ bingo: true, duration: Date.now() - startTime })),
  highlight: (numbers) =>
    set(({ highlighted }) => ({ highlighted: [...highlighted, ...numbers] })),
  generateNumbers: () =>
    set({
      availableNumbers: getUniqueRandomNumbers(NUMBERS, 1)
    }),
  drawNumber: () =>
    set(({ availableNumbers, usedNumbers, startTime }) => ({
      availableNumbers: availableNumbers.splice(1),
      usedNumbers: [...usedNumbers, availableNumbers[0]],
      startTime: startTime === 0 ? Date.now() : startTime
    })),
  generateGrid: () =>
    set({
      grid: [...Array(GRID_SIZE)].map(generateColumn)
    }),
  generateSolutions: () =>
    set(({ grid }) => ({
      solutions: extractSolutions(grid)
    })),
  initialize: () => {
    set({
      bingo: false,
      solutions: [],
      usedNumbers: [0],
      highlighted: [],
      startTime: 0,
      duration: 0
    })

    get().generateNumbers()
    get().generateGrid()
    get().generateSolutions()
  }
}))

export default useStore
