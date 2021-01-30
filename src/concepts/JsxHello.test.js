import { render, screen } from '@testing-library/react';
import JsxHello from "./JsxHello";

test('renders greeting', () => {
  render(<JsxHello />);
  const linkElement = screen.getByText(/Felipe Neuhauss/i);
  expect(linkElement).toBeInTheDocument();
});
