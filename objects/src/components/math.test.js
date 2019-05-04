import math from './math';

test('Test the addition function', () => {
  expect(math.sum(1,2)).toBe(3);
  expect(math.sum(5,2)).not.toBe(3);
 
});

test('Test the subtraction function', () => {
  expect(math.sub(6,2)).toBe(4);
});

test('Test the divide function', () => {
  expect(math.divide(10,2)).toBe(5);
  expect(math.divide(5,3)).not.toBe(5);
});

test('Test the multiplicaiton function', () => {
  expect(math.multiply(4,2)).toBe(8);
});