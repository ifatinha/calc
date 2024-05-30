import { input } from "./input.js";
import { result } from "./result.js";

export function calculate() {

   result.innerText = "ERRO";
   result.classList.add("danger");

   if (input.value.search("mod") !== -1) {
      const inputValue = input.value;
      const stringArr = inputValue.split(" ");
      if (stringArr.length === 3) {
         const temp = parseInt(stringArr[0]) % parseInt(stringArr[stringArr.length - 1]);
         result.innerText = temp;
         result.classList.remove("danger");
      }
   } else {
      result.innerText = eval(input.value);
      result.classList.remove("danger");
   }

}

export function calculatePercentage() {
   result.innerText = "ERRO";
   result.classList.add("danger");

   if (input.value.match(/^[0-9]/) !== null) {
      result.innerText = (parseInt(input.value) / 100);
      result.classList.remove("danger");
   }

}