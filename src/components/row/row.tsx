import Cell from "components/cell/cell"
import useStore from "store/store"
import { styled } from "theme/stitches"

type Props = {
  row: number[]
}

const White = styled("span", {
  filter: "brightness(100)"
})

const Row = ({ row }: Props) => {
  const { usedNumbers, highlighted, bingo } = useStore()
  return (
    <>
      {row.map((cell) => (
        <Cell
          key={cell}
          selected={usedNumbers.includes(cell)}
          dimmed={bingo && !highlighted.includes(cell)}
        >
          {cell !== 0 ? cell : <White>❤</White>}
        </Cell>
      ))}
    </>
  )
}

export default Row
