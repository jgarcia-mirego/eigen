import { extractText } from "lib/tests/extractText"
import React from "react"
import { Text } from "react-native"
import { create } from "react-test-renderer"
import { Disappearable } from "../Disappearable"

describe("Disappearable", () => {
  const ref = { current: null as null | Disappearable }
  it(`disappears`, async () => {
    const tree = create(
      <Disappearable ref={ref}>
        <Text>this is the content</Text>
      </Disappearable>
    )
    expect(extractText(tree.root)).toBe("this is the content")
    await ref.current?.disappear()
    expect(extractText(tree.root)).toBe("")
  })
})
