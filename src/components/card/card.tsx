import { styled } from "theme/stitches"
import useStore from "store/store"
import Row from "components/row/row"

const Grid = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(5, 100px)",
  gridTemplateRows: "repeat(5, 100px)"
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
