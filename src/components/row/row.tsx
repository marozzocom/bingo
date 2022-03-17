import Cell from "components/cell/cell"
import useStore from "store/store"

type Props = {
  row: number[]
}

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
          {cell !== 0 ? cell : "❤"}
        </Cell>
      ))}
    </>
  )
}

export default Row
