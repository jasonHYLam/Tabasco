import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Homepage } from "../components/homepage/Homepage";

describe("something", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Homepage />
      </MemoryRouter>
    );

    const form = screen.getByRole("form");
    const usernameInput = form.getByRole("username");
    expect(usernameInput).toBe("");

    // screen.debug();
  });
});
