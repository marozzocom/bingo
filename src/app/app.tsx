import useStore from "store/store"
import Card from "components/card/card"
import Button from "components/button/button"
import { useEffect } from "react"
import { globalStyles } from "theme/global-styles"
import Ball from "components/ball/ball"
import { styled } from "theme/stitches"
import Header from "components/header/header"
import Text from "components/text/text"
import NameInput from "components/name-input/name-input"
import Layout from "components/layout/layout"
import { numberSort } from "helpers/helpers"

const BallContainer = styled("div", {
  width: "100%",
  maxWidth: "$area"
})

const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "baseline",
  width: "100%",
  maxWidth: "$area"
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
      <HeaderContainer>
        <Header>Hi {name}!</Header>
        <Button small onClick={() => setName("")}>
          Edit
        </Button>
      </HeaderContainer>
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
          <Text>
            Your game took {Math.floor(duration / 1000)} seconds and{" "}
            {usedNumbers.length - 1} turns.
          </Text>
        </>
      )}
    </Layout>
  )
}

export default App
