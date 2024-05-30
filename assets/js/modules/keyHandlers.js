import { calculate } from "./calculate.js";
import { input } from "./input.js";
import { result } from "./result.js";

export function clearInput() {
   input.value = "";
   input.focus();
   result.innerText = "";
}

export function getValueKey(ev) {
   const value = this.dataset.value;
   input.value += value;
}

export function keyboard(ev) {
   const allowedKeys = ["0", ".", "1", "2", "3", "+", "4", "5",
      "6", "-", "7", "8", "9", "*", "(", ")", "/"];

   ev.preventDefault();

   if (allowedKeys.includes(ev.key)) {
      input.value += ev.key;
      // result.innerText += ev.key;
   }

   if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1);
   }

   if (ev.key === "Enter") {
      calculate();
   }
}