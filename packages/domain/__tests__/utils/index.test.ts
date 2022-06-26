import { getDayDateInWeek } from '@/utils';
import dayjs from 'dayjs';

describe('getDayDateInWeek', function () {
  test.each([0, 1, 2, 3, 4, 5, 6])(
    '해당 주의 요일의 날짜를 반환',
    function (day) {
      const result = dayjs(getDayDateInWeek(day));
      expect(result.day()).toBe(day);
    },
  );
});
