export function getDateStringFromDate(date: Date) {
  return date.toLocaleDateString('sv').substring(0, 10);
}