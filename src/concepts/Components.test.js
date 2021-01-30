import { render, screen } from '@testing-library/react';
import Components from "./Components";

test('renders component', () => {
  render(<Components />);
  const linkElement = screen.getByText(/Component/i);
  expect(linkElement).toBeInTheDocument();
});
