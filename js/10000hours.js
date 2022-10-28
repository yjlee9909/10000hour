
const startButton = document.querySelector(".form_btn");
const result = document.querySelector(".submitted");
const modal = document.querySelector(".modal");
const openButton = document.querySelector(".submitted-go");
const closeButton = document.querySelector(".modal-btn");
const shareButton = document.querySelector(".submitted-share");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector(".form.con1");
    const timeValue = document.querySelector(".form.con2");
    // 값 - value
    const timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".submitted-result1");
    const timeResult = document.querySelector(".submitted-result2");

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        fieldResult.innerText = fieldValue.value;
        result.style.display = "flex";
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);   
}
startButton.addEventListener("click", calculator);