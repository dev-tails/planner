import { Events } from "./Events.js";
// import { Header } from "./Header.js";
import { Tasks } from "./Tasks.js";

const body = document.body;

// body.appendChild(Header());

const main = body.appendChild(document.createElement('main'));
main.style.display = "flex";
main.style.height = "100%"

main.appendChild(Tasks());
main.appendChild(Events());