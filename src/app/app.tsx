import useStore from "store/store"
import Card from "components/card/card"
import Button from "components/button/button"
import { useEffect } from "react"
import { globalStyles } from "theme/global-styles"
import Ball from "components/ball/ball"
import { styled } from "theme/stitches"
import Header from "components/header/header"
import NameInput from "components/name-input/name-input"
import Layout from "components/layout/layout"
import { numberSort } from "helpers/helpers"

const BallContainer = styled("div", {
  width: "$area"
})

const App = () => {
  globalStyles()

  const {
    usedNumbers,
    drawNumber,
    solutions,
    complete,
    highlight,
    bingo,
    initialize,
    name,
    setName,
    duration
  } = useStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  useEffect(() => {
    const solution = solutions.find((solution) =>
      solution.every((number) => usedNumbers.includes(number))
    )

    if (solution) {
      complete()
      highlight(solution)
    }
  }, [complete, highlight, solutions, usedNumbers])

  if (!name) {
    return <NameInput />
  }

  return (
    <Layout>
      <Header>
        Hi {name}!
        <Button small onClick={() => setName("")}>
          Edit
        </Button>
      </Header>
      <Card />
      <Button onClick={drawNumber} disabled={bingo}>
        Draw number
      </Button>
      <Button onClick={initialize}>Reset</Button>
      {!bingo && (
        <BallContainer>
          {[...usedNumbers].sort(numberSort).map(
            (number, index) =>
              index > 0 && (
                <Ball
                  key={number}
                  latest={number === usedNumbers[usedNumbers.length - 1]}
                >
                  {number}
                </Ball>
              )
          )}
        </BallContainer>
      )}
      {bingo && (
        <>
          <Header>Bingo!</Header>
          <p>
            Your game took {Math.floor(duration / 1000)} seconds and{" "}
            {usedNumbers.length - 1} turns.
          </p>
        </>
      )}
    </Layout>
  )
}

export default App
