import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the calculator display', () => {
  render(<App />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
