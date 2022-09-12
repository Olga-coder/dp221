let apiKey = "08e78219c87d99220692bb5baa65854d";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apiKey}';
console.log(apiUrl);


function

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
  h1.innerHTML = `${searchInput.value}`;
}

