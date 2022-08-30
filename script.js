let now = new Date();

let currentdate = document.querySelector("#weekDay");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
li.innerHTML = `${day} ${date}, ${hours}:${minutes}`;
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchF");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#searchF");

form.addEventListener("submit", search);
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchF");

  let h1 = document.querySelector("h1");
  h2.innerHTML = `${searchInput.value}`;
}

let form1 = document.querySelector("#searchF");

form.addEventListener("submit", search);
