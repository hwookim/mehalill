export function getDayDateInWeek(day: number): Date {
  if (day < 0 || day > 6) {
    throw new Error('요일 0(일요일)~6(토요일) 사이로 입력해야합니다.');
  }
  const today = new Date();
  const result = new Date();
  result.setDate(today.getDate() - today.getDay() + day);
  result.setHours(0, 0, 0, 0);
  return result;
}
