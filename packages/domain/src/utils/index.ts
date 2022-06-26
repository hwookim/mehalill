import dayjs from 'dayjs';

export function getDayDateInWeek(day: number): string {
  if (day < 0 || day > 6) {
    throw new Error('요일 0(일요일)~6(토요일) 사이로 입력해야합니다.');
  }
  return dayjs().day(day).startOf('d').format();
}
