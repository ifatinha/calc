import { switchTheme } from "./modules/theme.js";
import { calculate, calculatePercentage } from "./modules/calculate.js";
import { copyToClipboard } from "./modules/copyClipboard.js";
import { input } from "./modules/input.js";
import { clearInput, getValueKey, keyboard } from "./modules/keyHandlers.js";

function initialize() {

    const charKeyBtns = document.querySelectorAll(".key");
    const clearBtn = document.querySelector("#clear");
    const eqaulsBtn = document.querySelector("#equals");
    const themeSwitcherBtn = document.querySelector("#themeSwitcher");
    const copyBtn = document.querySelector("#copyToClipboard");
    const sqrtBtn = document.querySelector("#sqrt");
    const percentBtn = document.querySelector("#percent");

    input.addEventListener("keydown", keyboard);

    charKeyBtns.forEach((charKeyBtn) => {
        charKeyBtn.addEventListener("click", getValueKey);
    });

    clearBtn.addEventListener("click", clearInput);

    eqaulsBtn.addEventListener("click", calculate);
    themeSwitcherBtn.addEventListener("click", switchTheme);
    copyBtn.addEventListener("click", copyToClipboard);
    sqrtBtn.addEventListener("click", () => {
        result.innerText = Math.sqrt(parseInt(input.value));
    });

    percentBtn.addEventListener("click", calculatePercentage);
}

(function () {
    input.focus();
    initialize();
})();