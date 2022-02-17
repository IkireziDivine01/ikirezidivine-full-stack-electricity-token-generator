import {
  calculateDaysPerAmount,
  generate8DigitToken,
  getDaysFromToken,
  isTokenValid,
} from './helpers';

describe('helpers test', () => {
  it('should return token consting of 8 digit', () => {
    expect(generate8DigitToken(100).length).toBe(8);
  });
  it('should throw error on invalid', () => {
    expect(() => generate8DigitToken(8)).toThrow(
      'Amount must be a multiple of 100',
    );
  });
  it('should throw error when buying with amount more that 5 years', () => {
    expect(() => generate8DigitToken(100 * 365 * 6)).toThrow(
      "Sorry, We can't generate token for more than 5 years",
    );
  });

  it('should return valid days', () => {
    expect(calculateDaysPerAmount(200)).toBe('0002');
    expect(calculateDaysPerAmount(500)).toBe('0005');
    expect(calculateDaysPerAmount(100 * 900)).toBe('0900');
  });

  it('Token should have same days as amount provided', () => {
    expect(getDaysFromToken(generate8DigitToken(100))).toBe(1);
    expect(getDaysFromToken(generate8DigitToken(100 * 432))).toBe(432);
  });

  it('Token should be valid', () => {
    expect(isTokenValid(generate8DigitToken(100))).toBe(true);
    expect(isTokenValid('inshallah')).toBe(false);
  });
});
