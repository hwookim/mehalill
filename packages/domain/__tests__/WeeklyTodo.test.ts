import WeeklyTodo, { WeeklyTodoProps } from '@/WeeklyTodo';
import { getDayDateInWeek } from '@/utils';

const DEFAULT_ARGS: WeeklyTodoProps = {
  id: 0,
  name: '',
  resetDay: 0,
};

describe('isDoneNow', function () {
  test.each([
    [2, 1],
    [3, 1],
    [5, 4],
    [6, 0],
    [6, 6],
  ])(
    'lastChecked가 초기화일 이후면 true를 반환',
    function (lastChecked, resetDay) {
      const weeklyTodo = new WeeklyTodo({
        ...DEFAULT_ARGS,
        isDone: true,
        lastChecked: getDayDateInWeek(lastChecked),
        resetDay: resetDay,
      });

      expect(weeklyTodo.isDoneNow()).toBeTruthy();
    },
  );

  test.each([
    [1, 2],
    [3, 5],
    [0, 6],
    [3, 4],
    [5, 6],
  ])(
    'lastChecked가 초기화일 이전이면 false를 반환',
    function (lastChecked, resetDay) {
      const weeklyTodo = new WeeklyTodo({
        ...DEFAULT_ARGS,
        isDone: true,
        lastChecked: getDayDateInWeek(lastChecked),
        resetDay: resetDay,
      });

      expect(weeklyTodo.isDoneNow()).toBeFalsy();
    },
  );
});
