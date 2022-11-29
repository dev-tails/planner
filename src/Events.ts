export function Events() {
  const el = document.createElement("div");
  el.style.padding = "8px";
  el.style.width = "100%";

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      const flex = document.createElement("div");
      flex.style.display = "flex";
      flex.style.alignItems = "center";
      el.appendChild(flex);

      const hour = document.createElement("div");
      hour.style.width = "16px";
      hour.style.textAlign = "center";
      if (j === 0) {
        hour.innerText = String(i);
        hour.style.fontWeight = "bold"
      } else {
        hour.innerText = String(j * 15);
        hour.style.fontSize = '8px';
      }
      hour.style.marginRight = "8px";
      flex.appendChild(hour);

      const input = document.createElement("input");
      input.style.border = "none";
      input.style.width = "100%";
      input.style.borderBottom = "1px solid black";
      flex.appendChild(input);
    }
  }

  return el;
}
