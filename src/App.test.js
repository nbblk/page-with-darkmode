import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('change button text after clicking', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button'), 'light off');
  expect(screen.getByRole('button')).toHaveTextContent('light on');
  expect(screen.getByTestId(/app/)).toHaveClass('dark');
});