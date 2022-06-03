import { getDayDateInWeek } from '@/utils';

describe('getDayDateInWeek', function () {
  test('해당 주의 요일의 날짜를 반환', function () {
    const thursday = getDayDateInWeek(5);
    expect(thursday.getDay()).toBe(5);
  });
});
