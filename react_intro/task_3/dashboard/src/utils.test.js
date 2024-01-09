import { getFullYear } from "./utils";
import { getFooterCopy } from "./utils";
import { getLatestNotification } from './utils';


// Prueba para getFullYear
test('getFullYear returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Prueba para getFooterCopy con argumento true
test('getFooterCopy returns "Holberton School" when the argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

// Prueba para getFooterCopy con argumento false
test('getFooterCopy returns "Holberton School main dashboard" when the argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Prueba para getLatestNotification
test('getLatestNotification returns the correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});
