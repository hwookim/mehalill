import DailyTodo from '@/DailyTodo';
import WeeklyTodo from '@/WeeklyTodo';

export interface CharacterProps {
  name: string;
  daily?: DailyTodo[];
  weekly?: WeeklyTodo[];
}

export default class Character {
  public name: string;
  private readonly _daily: DailyTodo[];
  private readonly _weekly: WeeklyTodo[];

  constructor(props: CharacterProps) {
    const { name, daily, weekly } = props;
    this.name = name;
    this._daily = daily ?? [];
    this._weekly = weekly ?? [];
  }

  public addDaily(todo: DailyTodo): void {
    this._daily.push(todo);
  }

  public addWeekly(todo: WeeklyTodo): void {
    this._weekly.push(todo);
  }

  public get daily(): DailyTodo[] {
    return this._daily;
  }

  public get weekly(): WeeklyTodo[] {
    return this._weekly;
  }
}
