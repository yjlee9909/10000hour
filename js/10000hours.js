const main = document.querySelector("#app");
const submitButton = main.querySelector(".form_btn");
const result = main.querySelector(".submitted");
const loading = main.querySelector(".result_loading");
const goButton = main.querySelector(".submitted-go");
const shareButton = main.querySelector(".submitted-share");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-btn");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fieldValue = main.querySelector(".con1");
    const timeValue = main.querySelector(".con2");
    // 값 - value
    const timeValue_int = Number(timeValue.value);

    const fieldResult = main.querySelector(".submitted-result1");
    const timeResult = main.querySelector(".submitted-result2");

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        fieldResult.innerText = fieldValue.value;
        result.style.display = "flex";
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
});