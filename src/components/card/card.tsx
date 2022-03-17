import { styled } from "theme/stitches"
import useStore from "store/store"
import Row from "components/row/row"

const Grid = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(5, 100px)",
  gridTemplateRows: "repeat(5, 100px)",
  "@sm": {
    gridGap: "3vw",
    gridTemplateColumns: "repeat(5, calc((100vw - 2.5rem - 12vw) / 5))",
    gridTemplateRows: "repeat(5, calc((100vw - 2.5rem - 12vw) / 5))"
  }
})

const Card = () => {
  const { grid } = useStore()
  return (
    <Grid>
      {grid.map((row, index) => (
        <Row row={row} key={index} />
      ))}
    </Grid>
  )
}

export default Card
