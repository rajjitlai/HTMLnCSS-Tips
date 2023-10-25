const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
    initialCountry: "us",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.0/js/utils.js",
});

input.addEventListener("input", function () {
    const phoneNumber = iti.getNumber();
    // console.log(phoneNumber);
});