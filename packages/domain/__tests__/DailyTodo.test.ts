import DailyTodo, { DailyTodoProps } from '@/DailyTodo';

const DEFAULT_ARGS: DailyTodoProps = {
  name: '',
};

describe('isDoneNow', function () {
  test('lastChecked가 오늘이 아니면 false를 반환', function () {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    const dailyTodo = new DailyTodo({
      ...DEFAULT_ARGS,
      isDone: true,
      lastChecked: yesterday,
    });

    expect(dailyTodo.isDoneNow()).toBeFalsy();
  });
});
