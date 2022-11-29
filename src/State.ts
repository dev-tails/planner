import { getDateStringFromDate } from "./DateUtils.js";

let date = new Date();

type DateChangeListenerType = (date: Date) => void;

const dateChangeListeners: DateChangeListenerType[] = [];

export function getDateString() {
  return getDateStringFromDate(date);
}

export function setDateFromString(newDate: string) {
  date = new Date(newDate);
  handleDateChanged();
}

export function decrementDate() {
  date.setDate(date.getDate() - 1);
  handleDateChanged();
}

export function incrementDate() {
  date.setDate(date.getDate() + 1);
  handleDateChanged();
}

function handleDateChanged() {
  for (const listener of dateChangeListeners) {
    listener(date);
  }
}

export function onDateChanged(dateChangeListener: (date: Date) => void) {
  dateChangeListeners.push(dateChangeListener);
}
