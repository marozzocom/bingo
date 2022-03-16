import { styled } from "theme/stitches"
import { useStore } from "app/store"
import Header from "components/header/header"
import { KeyboardEventHandler, useEffect, useRef, useState } from "react"
import Button from "components/button/button"
import Layout from "components/layout/layout"

const StyledInput = styled("input", {
  border: "none",
  backgroundColor: "$secondary",
  px: "$3",
  py: "$2",
  color: "$white",
  borderRadius: "$1",
  fontSize: "$3",
  fontFamily: "Patrick Hand"
})

const NameInput = () => {
  const { setName } = useStore()
  const [draft, setDraft] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = ({ key }) =>
    key === "Enter" && setName(draft)

  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.focus()
  }, [inputRef.current])

  return (
    <Layout>
      <Header>Hi Stranger! Please tell me your name.</Header>
      <StyledInput
        ref={inputRef}
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button disabled={!draft} onClick={() => setName(draft)}>
        Submit
      </Button>
    </Layout>
  )
}

export default NameInput
