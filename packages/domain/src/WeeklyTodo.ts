import Todo, { TodoProps } from './Todo';
import { getDayDateInWeek } from '@/utils';

export interface WeeklyTodoProps extends TodoProps {
  resetDay: number;
}

export default class WeeklyTodo extends Todo {
  private _resetDay: number;

  constructor(props: WeeklyTodoProps) {
    super(props);
    const { resetDay } = props;
    if (resetDay < 0 || resetDay > 6) {
      throw new Error('초기화일은 0(일요일)~6(토요일) 사이로 입력해야합니다.');
    }
    this._resetDay = resetDay;
  }

  public isDoneNow(): boolean {
    if (!this._isDone || !this._lastChecked) return false;
    if (this.isCheckedBeforeReset()) {
      this.uncheck();
    }
    return this._isDone;
  }

  private isCheckedBeforeReset(): boolean {
    if (!this._lastChecked) return false;

    const resetDate = getDayDateInWeek(this._resetDay);
    return this._lastChecked < resetDate;
  }

  public set resetDay(resetDay: number) {
    if (resetDay < 0 || resetDay > 6) {
      throw new Error('초기화일은 0(알요일)~6(토요일) 사이로 입력해야합니다.');
    }
    this._resetDay = resetDay;
  }
}
