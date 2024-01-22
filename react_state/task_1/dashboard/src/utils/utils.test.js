import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utility functions', () => {
  it('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  it('getFooterCopy returns the correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Atlas School');
  });

  it('getFooterCopy returns the correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Atlas School main dashboard');
  });

  it('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
