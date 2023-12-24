const main = document.querySelector(".main");
const root = document.querySelector(":root");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const allowedKeys = ["0", ".", "1", "2", "3", "+", "4", "5",
    "6", "-", "7", "8", "9", "*", "(", ")", "/", " % "];
const charKeyBtns = document.querySelectorAll(".key");
const clearBtn = document.querySelector("#clear");
const eqaulsBtn = document.querySelector("#equals");

function calculate() {
    const temp = eval(input.value);
    result.innerText = temp;
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
}

function initialize() {
    input.addEventListener("keydown", keyboard);

    charKeyBtns.forEach((charKeyBtn) => {
        charKeyBtn.addEventListener("click", getValueKey);
    });

    clearBtn.addEventListener("click", clearInput);
    eqaulsBtn.addEventListener("click", calculate);
}

(function () {
    input.focus();
    initialize();
})();