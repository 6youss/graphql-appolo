export class ZTime {
  private _date: Date;
  private _datestring: string;
  private _hours: number = 0;
  private _minutes: number = 0;
  private _id?: string | undefined;
  private _unavailable?: boolean | undefined;

  constructor(_datestring: string, _id?: ZTime["_id"], _unavailable?: ZTime["_unavailable"]) {
    this._datestring = _datestring;
    this._id = _id;
    this._unavailable = _unavailable;
    this._date = new Date(this._datestring);
    this._hours = this._date.getUTCHours();
    this._minutes = this._date.getUTCMinutes();
  }

  get id(): string | undefined {
    return this._id;
  }
  set id(id: string | undefined) {
    this._id = id;
  }
  get unavailable(): boolean | undefined {
    return this._unavailable;
  }
  set unavailable(unavailable: boolean | undefined) {
    this._unavailable = unavailable;
  }
  get date(): Date {
    return this._date;
  }
  get dateString(): string {
    return this._datestring;
  }
  get hours(): number {
    return this._hours;
  }
  get minutes(): number {
    return this._minutes;
  }

  addDuration(duration: number): ZTime {
    var newDateObj = new Date(this._date.getTime() + duration * 60000);
    return new ZTime(newDateObj.toISOString());
  }

  copy() {
    return new ZTime(this._datestring, this._id, this._unavailable);
  }

  isLess(zdate: ZTime) {
    return this._date.getTime() < zdate._date.getTime();
  }
  toMinutes(): number {
    return this._hours * 60 + this._minutes;
  }
  timeString(): string {
    return ("0" + this._date.getHours()).slice(-2) + ":" + ("0" + this._date.getMinutes()).slice(-2);
  }
  static timeStringToMinutes(timeString: string): number {
    let [h = 0, m = 0] = timeString.split(":").map((val) => parseInt(val));
    if (h < 24 && h >= 0 && m >= 0 && m < 60) return h * 60 + m;
    throw new Error("Time string should be of format HH:MM");
  }
  equals(anotherHour: ZTime): boolean {
    return this._datestring === anotherHour._datestring;
  }

  equalsById(anotherHour: ZTime): boolean {
    if (this._id !== undefined && anotherHour._id !== undefined) {
      return this._id === anotherHour._id;
    }
    return false;
  }
}
