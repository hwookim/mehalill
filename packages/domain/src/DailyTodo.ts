import Todo, { TodoProps } from './Todo';
import dayjs from 'dayjs';

export type DailyTodoProps = TodoProps;

export default class DailyTodo extends Todo {
  constructor(props: DailyTodoProps) {
    super(props);
  }

  public isDoneNow(): boolean {
    if (!this._isDone || !this._lastChecked) return false;
    if (!this.isCheckedToday()) {
      this.uncheck();
    }
    return this._isDone;
  }

  private isCheckedToday(): boolean {
    if (!this._isDone) return false;
    if (!this._lastChecked) return false;

    return dayjs().isSame(this._lastChecked);
  }
}
