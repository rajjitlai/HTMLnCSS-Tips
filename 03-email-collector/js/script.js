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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxv1KHXAOvorWJyD53F-Q_9zuiS2r34ciSo36oU5wkpeo6soUS4FmvFLZ4G1FdUZj_N/exec'
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
