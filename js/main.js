const form = document.querySelector(".city-search .container form");
const input = document.querySelector(".city-search .container input");
const message = document.querySelector(".city-search .container .message");
const list = document.querySelector(".city-display .container .cities");
const IMAGES = [
  { "01d": 'img/01d.png' },
  { "01n": 'img/01n.png' },
  { "02d": 'img/02d.png' },
  { "02n": 'img/02n.png' },
  { "03d": 'img/03d.png' },
  { "03n": 'img/03n.png' },
  { "04d": 'img/04d.png' },
  { "04n": 'img/04n.png' },
  { "09d": 'img/09d.png' },
  { "09n": 'img/09n.png' },
  { "10d": 'img/10d.png' },
  { "10n": 'img/10n.png' },
  { "11d": 'img/11d.png' },
  { "11n": 'img/11n.png' },
  { "13d": 'img/13d.png' },
  { "13n": 'img/13n.png' },
  { "50d": 'img/50d.png' },
  { "50n": 'img/50n.png' }
]

function getImage(iconName) {
  return `img/${iconName}.png`
}

form.addEventListener("submit", e => {
    e.preventDefault(); // Prevents reloading the page
    const inputValue = input.value; // Grabs the value from the search field
    const listItems = list.querySelectorAll(".city-display .container .city");
    const apiKey = "0c829e5b400bfad68fe2d1d7f0b2e066";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json()) // Turning the HTTP response into a JSON format
        .then(data => { // Creating the associated item on the HTML file
            const {
                main,
                name,
                sys,
                weather
            } = data;

            const icon = getImages(weather[0]["icon"]);
            const li = document.createElement("li");

            li.classList.add("city");
            const markup = `
      <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temperature">${Math.round(main.temp)}<sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
    `;

            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            message.textContent = "Sorry, we couldn't find this city";
        });

    message.textContent = ""; // Clearing the search field
    form.reset();
    input.focus();
  });