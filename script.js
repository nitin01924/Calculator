const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      display.textContent = ""; // clear
    } else if (button.textContent === "=") {
      try {
        display.textContent = eval(display.textContent); // calculate or to evaluate the text like 1 + 2 will be 3.
      } catch {
        display.textContent = "Error";
      }
    } else {
      display.textContent += button.textContent; // add input
    }
  });
});
