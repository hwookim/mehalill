import DailyTodo from '@/DailyTodo';
import WeeklyTodo from '@/WeeklyTodo';

export interface CharacterProps {
  id: number;
  name: string;
  daily?: DailyTodo[];
  weekly?: WeeklyTodo[];
}

export default class Character {
  private readonly _id: number;
  public name: string;
  private readonly _daily: DailyTodo[];
  private readonly _weekly: WeeklyTodo[];

  constructor(props: CharacterProps) {
    const { id, name, daily, weekly } = props;
    this._id = id;
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

  public get id(): number {
    return this._id;
  }

  public get daily(): DailyTodo[] {
    return this._daily;
  }

  public get weekly(): WeeklyTodo[] {
    return this._weekly;
  }
}
