export function switchTheme(ev) {
   const calc = document.querySelector(".calc");
   const root = document.querySelector(":root");
   const checkBtn = ev.currentTarget;

   if (checkBtn.checked) {
      calc.classList.remove("light-mode");
      calc.classList.add("dark-mode");
      calc.dataset.theme = "dark";
   } else {
      calc.classList.remove("dark-mode");
      calc.classList.add("light-mode");
      calc.dataset.theme = "light";
   }

}