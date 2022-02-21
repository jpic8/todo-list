import "./style.css";

function component() {
  const element = document.createElement("div");
  element.classList.add("container");
  return element;
}

document.body.appendChild(component());

console.log("abbazabba");
