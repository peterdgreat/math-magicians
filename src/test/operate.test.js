import operate from '../logic/operate';

it('should add two numbers', () => {
  expect(operate(2, 3, '+')).toBe('5');
});

it('should subtract two numbers', () => {
  expect(operate(5, 3, '-')).toBe('2');
});

it('should multiply two numbers', () => {
  expect(operate(2, 3, 'x')).toBe('6');
});

it('should divide two numbers', () => {
  expect(operate(6, 3, '÷')).toBe('2');
});
