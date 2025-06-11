import { render, screen } from "@testing-library/react"
import App from "../App"
import { describe, it, expect } from "vitest"

describe("App", () => {
  it("renders the Task Manager title", () => {
    render(<App />)
    expect(screen.getByText("Task Manager")).toBeDefined()
  })
})
