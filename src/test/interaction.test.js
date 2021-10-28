import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('should render the calculator', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '1' });
    expect(button).toBeInTheDocument();
  });

  // test button click
  it('should add 1 to the display', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '1' });
    userEvent.click(button);
    userEvent.click(button);
    const display = screen.getByText('11');
    expect(display).toBeInTheDocument();
  });
});
