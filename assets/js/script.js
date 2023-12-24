const calc = document.querySelector(".calc");
const root = document.querySelector(":root");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const allowedKeys = ["0", ".", "1", "2", "3", "+", "4", "5",
    "6", "-", "7", "8", "9", "*", "(", ")", "/", " % "];
const charKeyBtns = document.querySelectorAll(".key");
const clearBtn = document.querySelector("#clear");
const eqaulsBtn = document.querySelector("#equals");
const themeSwitcherBtn = document.querySelector("#themeSwitcher");
const copyBtn = document.querySelector("#copyToClipboard");

function calculate() {

    result.innerText = "ERRO";
    result.classList.add("danger");

    result.innerText = eval(input.value);
    result.classList.remove("danger");
}

function keyboard(ev) {
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

function getValueKey(ev) {
    const value = this.dataset.value;
    input.value += value;
}

function clearInput() {
    input.value = "";
    input.focus();
    result.innerText = "";
}

function switchTheme(ev) {
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

function copyToClipboard(ev) {
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

function initialize() {
    input.addEventListener("keydown", keyboard);

    charKeyBtns.forEach((charKeyBtn) => {
        charKeyBtn.addEventListener("click", getValueKey);
    });

    clearBtn.addEventListener("click", clearInput);
    eqaulsBtn.addEventListener("click", calculate);
    themeSwitcherBtn.addEventListener("click", switchTheme);
    copyBtn.addEventListener("click", copyToClipboard);
}

(function () {
    input.focus();
    initialize();
})();