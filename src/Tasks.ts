export function Tasks() {
  const el = document.createElement('div');
  el.style.width = "100%";
  el.style.padding = '8px'
  el.style.borderRight = '1px solid black'

  const input = document.createElement('input');
  input.style.border = "none";
  input.style.width = "100%";
  input.style.borderBottom = '1px solid black';
  el.appendChild(input);

  return el;
}