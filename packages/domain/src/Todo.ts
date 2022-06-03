export interface TodoProps {
  name: string;
  thumbnail?: string;
  isDone?: boolean;
  lastChecked?: number | string | Date;
}

export default class Todo {
  protected _name: string;
  protected _thumbnail?: string;
  protected _isDone: boolean;
  protected _lastChecked?: Date;

  constructor(props: TodoProps) {
    const { name, thumbnail, isDone, lastChecked } = props;
    this._name = name;
    this._thumbnail = thumbnail;
    this._isDone = isDone || false;
    if (lastChecked) {
      this._lastChecked = new Date(lastChecked);
    }
  }

  public check(): void {
    this._isDone = true;
    this._lastChecked = new Date();
  }

  public uncheck(): void {
    this._isDone = false;
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get thumbnail() {
    return this._thumbnail;
  }

  public set thumbnail(thumbnail: string | undefined) {
    this._thumbnail = thumbnail;
  }
}
