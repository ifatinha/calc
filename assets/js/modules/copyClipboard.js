export function copyToClipboard(ev) {
   const button = ev.currentTarget;

   if (button.innerText.toLowerCase() === "copy") {
      button.innerText = "copied";
      button.classList.add("success");
      navigator.clipboard.writeText(result.innerText);
   } else {
      button.innerText = "copy";
      button.classList.remove("success");
   }
}