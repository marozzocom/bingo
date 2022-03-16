import { rotateGrid, shuffle } from "helpers/helpers"
import { CENTER, NUMBERS_PER_COLUMN, GRID_SIZE } from "constants"

const getDiagonalSolutions = (grid: number[][]) => [
  grid.map((row, index) => row[index]),
  grid.map((row, index) => row[row.length - 1 - index])
]

export const extractSolutions = (grid: number[][]) => [
  ...grid,
  ...rotateGrid(grid),
  ...getDiagonalSolutions(grid)
]

export const getUniqueRandomNumbers = (length: number, offSet = 0) =>
  shuffle([...Array(length)].map((_, index: number) => index + offSet))

export const generateColumn = (_: any, index: number) =>
  getUniqueRandomNumbers(NUMBERS_PER_COLUMN, index * NUMBERS_PER_COLUMN + 1)
    .slice(0, GRID_SIZE)
    .map((number, columnIndex) =>
      index === CENTER && columnIndex === CENTER ? 0 : number
    )
