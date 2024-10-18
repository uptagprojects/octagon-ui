import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from "./Button";

test("renders a button", () => {
  render(<Button label="Hello world!" />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});