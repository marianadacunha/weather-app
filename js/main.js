// function fetchWeatherData() {
//     let temperature = document.getElementById("temperature");
//     let description = document.getElementById("description");
//     let location = document.getElementById("location");
//     let api = "https://api.openweathermap.org/data/2.5/weather";
//     let apiKey = "0c829e5b400bfad68fe2d1d7f0b2e066";
// }  

const form = document.querySelector(".city-search form"); 

form.addEventListener("submit", e => { 
    e.preventDefault(); // Prevents reloading the page
    const inputValue = input.value; // Grabs the value from the search field
});

const apiKey = "0c829e5b400bfad68fe2d1d7f0b2e066";
const inputValue = input.value; // The city the user wants to check
const url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric";

fetch(url)
    .then(response => response.json()) // Turning the HTTP response into JSON format
    .then(data => {
        // do stuff with the data
    })
    .catch(() => {
        message.textContent = "Sorry, we couldn't find this city";
    });