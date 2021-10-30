const taskbarDateTime = document.getElementById("taskbarDateTime");
const inputs = document.querySelectorAll("input");

const darkRadio = document.getElementById("darkMode");
const lightRadio = document.getElementById("lightMode");
const customRadio = document.getElementById("custom");

const customColorsDiv = document.getElementById("customColors");
const textColorInput = document.getElementById("textColorInput");
const backgroundColorInput = document.getElementById("backColorInput");

const win10Radio = document.getElementById("win10");

const normalSizeRadio = document.getElementById("smallSize");

inputs.forEach(function(input) {
    input.addEventListener("input", update);
});

function update() {
    if (darkRadio.checked) {
        taskbarDateTime.setAttribute("data-theme", "dark");
    } else if (lightRadio.checked) {
        taskbarDateTime.setAttribute("data-theme", "light");
    } else {
        taskbarDateTime.setAttribute("data-theme", "custom");
        customColorsDiv.style.display = "flex";
        document.documentElement.style.setProperty("--customTextColor", textColorInput.value);
        document.documentElement.style.setProperty("--customBackColor", backgroundColorInput.value);
    }

    if (!customRadio.checked) customColorsDiv.style.display = "none";

    win10Radio.checked ? taskbarDateTime.setAttribute("data-os", "win10") : taskbarDateTime.setAttribute("data-os", "win11");
    normalSizeRadio.checked ? taskbarDateTime.setAttribute("data-size", "normal") : taskbarDateTime.setAttribute("data-size", "big");
}
