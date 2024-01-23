import { getAllNotificationsByUser } from './notifications';

describe('getAllNotificationsByUser', () => {
  it('returns the correct data for userId 5debd764a7c57c7839d722e9', () => {
    const expected = [
      // ... (datos esperados aquí)
    ];
    expect(getAllNotificationsByUser('5debd764a7c57c7839d722e9')).toEqual(expect.arrayContaining(expected));
  });
});
