export const shuffle = <T = any>(array: T[]) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const temporaryIndex = Math.floor(Math.random() * index)
    const temporary = array[temporaryIndex]
    array[temporaryIndex] = array[index]
    array[index] = temporary
  }

  return array
}

export const rotateGrid = (grid: number[][]) =>
  grid.reduce<number[][]>((rotatedGrid, column, index) => {
    rotatedGrid.push(column.map((_, targetRow) => grid[targetRow][index]))
    return rotatedGrid
  }, [])

export const ensureArray = <T>(value: T | Array<T>): Array<T> =>
  Array.isArray(value) ? value : [value]

export const numberSort = (a: number, b: number) => a - b
