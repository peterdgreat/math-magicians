import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  // test not disabled
  test('should not be disabled', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '1' });
    expect(button).not.toBeDisabled();
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

  it('should give result for 1 +2 = 3', () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '1' });
    userEvent.click(button);
    userEvent.click(button);
    const button2 = screen.getByRole('button', { name: '+' });
    userEvent.click(button2);
    const button3 = screen.getByRole('button', { name: '2' });
    userEvent.click(button3);
    const button4 = screen.getByRole('button', { name: '=' });
    userEvent.click(button4);
    const display = screen.getByText('3');
    expect(display).toBeInTheDocument();
  });
});
