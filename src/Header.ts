import { decrementDate, getDateString, incrementDate, onDateChanged, setDateFromString } from "./State.js";

export const HEADER_HEIGHT = 24;

export function Header() {
  const el = document.createElement('div');
  el.style.display = "flex";
  el.style.width = "100%";
  el.style.justifyContent = "center"
  el.style.height = `${HEADER_HEIGHT}px`;
  el.style.padding = '8px'
  el.style.borderBottom = '1px solid black'

  const leftArrow = document.createElement('button');
  leftArrow.addEventListener("click", () => {
    decrementDate();
  })
  leftArrow.innerText = "<";
  el.appendChild(leftArrow);

  const date = document.createElement('input');
  date.style.marginLeft = '8px';
  date.style.marginRight = '8px';
  date.value = getDateString();
  date.type = "date";
  date.style.textAlign = "center"
  date.addEventListener('change', (e) => {
    setDateFromString(date.value);
  })

  onDateChanged(() => {
    date.value = getDateString();
  })

  el.appendChild(date);

  const rightArrow = document.createElement('button');
  rightArrow.innerText = ">";
  rightArrow.addEventListener("click", () => {
    incrementDate();
  })
  el.appendChild(rightArrow);

  return el;
}