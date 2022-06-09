import WeeklyTodo, { WeeklyTodoProps } from '@/WeeklyTodo';
import { getDayDateInWeek } from '@/utils';

const DEFAULT_ARGS: WeeklyTodoProps = {
  id: 0,
  name: '',
  resetDay: 0,
};

describe('isDoneNow', function () {
  test('lastChecked가 초기화일 이후면 true를 반환', function () {
    const thursday = getDayDateInWeek(5);
    const weeklyTodo = new WeeklyTodo({
      ...DEFAULT_ARGS,
      isDone: true,
      lastChecked: thursday,
      resetDay: 4,
    });

    expect(weeklyTodo.isDoneNow()).toBeTruthy();
  });

  test('lastChecked가 초기화일 이전이면 false를 반환', function () {
    const wednesday = getDayDateInWeek(3);
    const weeklyTodo = new WeeklyTodo({
      ...DEFAULT_ARGS,
      isDone: true,
      lastChecked: wednesday,
      resetDay: 4,
    });

    expect(weeklyTodo.isDoneNow()).toBeFalsy();
  });
});
