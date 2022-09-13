let apiKey = "d07425abe7948f94ff4d95c78538a93d";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}&units=metric";
console.log(apiUrl);

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
