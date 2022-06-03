import Todo, { TodoProps } from './Todo';

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

    const today = new Date();
    return (
      this._lastChecked.getDate() == today.getDate() &&
      this._lastChecked.getMonth() == today.getMonth() &&
      this._lastChecked.getFullYear() == today.getFullYear()
    );
  }
}
