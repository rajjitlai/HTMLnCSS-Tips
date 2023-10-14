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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwNfsrR8hRMGMYIxs8DuUwlaKHYyn7evXoyD3X5Ihfcapa48g9gQB79eBlt56S68zDZ/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for Subscribing!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)

            form.reset()
        })
        .catch(error => {
            msg.innerHTML = "Your subscription could not be added!"
        })
})
