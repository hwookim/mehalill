import DailyTodo, { DailyTodoProps } from '@/DailyTodo';
import dayjs from 'dayjs';

const DEFAULT_ARGS: DailyTodoProps = {
  id: 0,
  name: '',
};

describe('isDoneNow', function () {
  test('lastChecked가 오늘이 아니면 false를 반환', function () {
    const yesterday = dayjs().add(-1, 'day').toDate();
    const dailyTodo = new DailyTodo({
      ...DEFAULT_ARGS,
      isDone: true,
      lastChecked: yesterday,
    });

    expect(dailyTodo.isDoneNow()).toBeFalsy();
  });
});
