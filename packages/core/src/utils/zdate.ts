export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}
export function dateStringaddMinutes(date: string, minutes: number): string {
  return addMinutes(new Date(date), minutes).toISOString();
}

export function timeToMinutes(date: Date): number {
  return date.getUTCHours() * 60 + date.getUTCMinutes();
}

export function isNumberInRange(num: number, from: number, to: number): boolean {
  return num >= from && num <= to;
}

export function isDateInRange(date: Date, from: Date, to: Date | null, ignoreTime: boolean = true): boolean {
  const _date = new Date(date);
  const _from = new Date(from);
  const _to = to ? new Date(to) : null;
  if (ignoreTime) {
    _date.setUTCHours(0, 0, 0, 0);
    _from.setUTCHours(0, 0, 0, 0);
    _to && _to.setUTCHours(0, 0, 0, 0);
  }

  return _date.getTime() >= _from.getTime() && (_to === null || _date.getTime() <= _to.getTime());
}

export function makeDateRange(startDate: Date, dayCount: number): Array<Date> {
  var dateArray = new Array();
  var stopDate = addDays(startDate, dayCount);
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }
  return dateArray;
}

export function addDays(date: Date, days: number): Date {
  var newdate = new Date(date.valueOf());
  newdate.setUTCDate(date.getUTCDate() + days);
  return newdate;
}

export function getDayName(date: Date): string {
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  return days[date.getDay()];
}

export function getMonthName(date: Date, short: boolean = true): string {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juiellet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  return short ? months[date.getUTCMonth()].substring(0, 4) : months[date.getUTCMonth()];
}
