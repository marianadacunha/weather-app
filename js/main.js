// function fetchWeatherData() {
//     let temperature = document.getElementById("temperature");
//     let description = document.getElementById("description");
//     let location = document.getElementById("location");
//     let api = "https://api.openweathermap.org/data/2.5/weather";
//     let apiKey = "0c829e5b400bfad68fe2d1d7f0b2e066";
// }

// Stops the form from submitting to prevent reloading the page
Grab the value which is contained in the search field.
const form = document.querySelector(".city-search form");
 
// Grabs the value from the search field
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputValue = input.value;
});