import dayjs from 'dayjs';

export interface TodoProps {
  id: number;
  name: string;
  thumbnail?: string;
  isDone?: boolean;
  lastChecked?: number | string | Date;
}

export default class Todo {
  protected readonly _id: number;
  protected _name: string;
  protected _thumbnail?: string;
  protected _isDone: boolean;
  protected _lastChecked?: string;

  constructor(props: TodoProps) {
    const { id, name, thumbnail, isDone, lastChecked } = props;
    this._id = id;
    this._name = name;
    this._thumbnail = thumbnail;
    this._isDone = isDone || false;
    if (lastChecked) {
      this._lastChecked = dayjs(lastChecked).toISOString();
    }
  }

  public check(): void {
    this._isDone = true;
    this._lastChecked = dayjs().toISOString();
  }

  public uncheck(): void {
    this._isDone = false;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get thumbnail(): string | undefined {
    return this._thumbnail;
  }

  public set thumbnail(thumbnail: string | undefined) {
    this._thumbnail = thumbnail;
  }
}
