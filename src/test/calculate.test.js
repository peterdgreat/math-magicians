import calculate, { isNumber } from '../logic/calculate';

// check for the function isNumber
it('isNumber', () => {
  expect(typeof isNumber).toBe('function');
});

it('calculate', () => {
  expect(typeof calculate).toBe('function');
});
