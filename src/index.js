import _ from "lodash";
import "./style.css";
import printMe from "./print.js";
// import Icon from './icon.png';
// import Data from './data.xml';

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.style = 'width: 50px';

  // element.appendChild(myIcon);

  // console.log("READDATA:");
  // console.log(Data);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    // printMe();
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
