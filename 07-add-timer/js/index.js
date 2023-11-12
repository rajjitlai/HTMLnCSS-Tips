const time = document.getElementById("current-time");

// const d = new Date();

// time.innerHTML = d.toLocaleTimeString();

setInterval(() => {
          const d = new Date();
          time.innerHTML = d.toLocaleTimeString();
}, 1000)