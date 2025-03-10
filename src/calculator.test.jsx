// src/calculator.test.js
import { describe, it, expect } from 'vitest';
import { calculate } from './calculatorLogic';

describe('calculate function', () => {
  it('should return the correct result for addition', () => {
    expect(calculate('2 + 3')).toBe(5);
  });

  it('should return the correct result for subtraction', () => {
    expect(calculate('5 - 3')).toBe(2);
  });

  it('should return the correct result for multiplication', () => {
    expect(calculate('2 * 3')).toBe(6);
  });

  it('should return the correct result for division', () => {
    expect(calculate('6 / 2')).toBe(3);
  });

  it('should return "Error" for invalid expressions', () => {
    expect(calculate('2 / 0')).toBe('Error');
    expect(calculate('invalid expression')).toBe('Error');
  });
});
