let taskElements: HTMLElement[] = [];

export function Tasks() {
  const el = document.createElement("div");
  el.style.overflowY = "scroll";
  el.style.width = "100%";
  el.style.padding = "8px";
  el.style.borderRight = "1px solid black";

  const task = Task({ parent: el });
  taskElements.push(task);
  el.appendChild(task);

  return el;
}

function Task(props: { parent: HTMLElement }) {
  const el = document.createElement("div");

  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.alignContent = "center";
  el.appendChild(flex);

  const checkbox = document.createElement("input");
  checkbox.tabIndex = -1;
  checkbox.type = "checkbox";
  flex.appendChild(checkbox);

  const input = document.createElement("input");
  input.style.border = "none";
  input.style.width = "100%";
  input.style.borderBottom = "1px solid black";

  input.addEventListener("focus", () => {
    if (input.value === "") {
      const task = Task({ parent: props.parent });
      taskElements.push(task);
      props.parent.appendChild(task);
    }
  });

  input.addEventListener("blur", () => {
    if (taskElements.length > 1 && input.value == "") {
      el.remove();
    }
  });

  flex.appendChild(input);

  return el;
}
