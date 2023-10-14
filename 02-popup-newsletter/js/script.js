document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        openPopup();
    }, 5000);
});

function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.visibility = "visible";
}

document.getElementById("closePopup").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
});