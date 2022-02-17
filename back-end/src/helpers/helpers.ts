import { Token } from 'src/models/token.entity';

export function generate8DigitToken(ammout: number): string {
  if (ammout % 100 !== 0) throw new Error('Note: Amount must be a multiple of 100');

  const d = calculateDaysPerAmount(ammout);

  if (parseInt(d) > 5 * 365)
    throw new Error("Sorry, We can't generate token for more than 5 years");

  return [r(), d[0], r(), d[1], r(), d[2], r(), d[3]].join('');
}

export function calculateDaysPerAmount(amount: number): string {
  const days = Math.floor(amount / 100);
  return days.toString().padStart(4, '0');
}

export function r() {
  return Math.floor(Math.random() * 10);
}

export function getDaysFromToken(token: string): number {
  const parts = token.split('');
  return parseInt([parts[1], parts[3], parts[5], parts[7]].join(''));
}

export function isTokenValid(token: string): boolean {
  return token.length === 8 && getDaysFromToken(token) > 0;
}

export function tokenDaysHelper(token: Token) {
  if (!token) throw new Error('No token object found');
  if (!isTokenValid(token.token)) throw new Error('Token is not valid');

  const today = new Date();
  const boughtAt = token.createdAt;
  const totalDays = getDaysFromToken(token.token);
  const expiryDate = new Date();
  expiryDate.setDate(boughtAt.getDate() + totalDays);
  const isDateExpired = today > expiryDate;

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  const remainingDays = isDateExpired
    ? 0
    : Math.round(Math.abs(((expiryDate as any) - (today as any)) / oneDay));

  return { boughtAt, expiryDate, isDateExpired, totalDays, remainingDays };
}