import { add } from "./utils/calculator";

const num1Input = document.querySelector<HTMLInputElement>("#num1");
const num2Input = document.querySelector<HTMLInputElement>("#num2");

const calculateBtn = document.querySelector<HTMLButtonElement>("#calculateBtn");

const resultElement = document.querySelector<HTMLHeadingElement>("#result");

if (!num1Input || !num2Input || !calculateBtn || !resultElement) {
  throw new Error("Required HTML elements not found");
}

calculateBtn.addEventListener("click", () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  const result = add(num1, num2);

  resultElement.textContent = `Result: ${result}`;
});
