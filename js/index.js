const taskbarDateTime = document.getElementById("taskbarDateTime");
const radioInputs = document.querySelectorAll("input[type='radio']");

const darkRadio = document.getElementById("darkMode");
const win10Radio = document.getElementById("win10");
const normalSizeRadio = document.getElementById("smallSize");

radioInputs.forEach(function(radioInput) {
    radioInput.addEventListener("input", update);
});

function update() {
    darkRadio.checked ? taskbarDateTime.setAttribute("data-theme", "dark") : taskbarDateTime.setAttribute("data-theme", "light");
    win10Radio.checked ? taskbarDateTime.setAttribute("data-os", "win10") : taskbarDateTime.setAttribute("data-os", "win11");
    normalSizeRadio.checked ? taskbarDateTime.setAttribute("data-size", "normal") : taskbarDateTime.setAttribute("data-size", "big");
}