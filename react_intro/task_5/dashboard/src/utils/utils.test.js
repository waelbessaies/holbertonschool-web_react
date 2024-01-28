import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('year should be equal to 2022', function () {
    it('get the year', function () {
        var year = 2022;
        expect(getFullYear()).toBe(year);
    });
});

describe('text should be equal Holberton School if true', function () {
    it('reuturn must be true ', function () {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
});

it('should return <strong>Urgent requirement</strong> - complete by EOD', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });