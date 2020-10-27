const form = document.querySelector(".city-search form");
const input = document.querySelector(".city-search input");
const message = document.querySelector(".city-search .msg");
const list = document.querySelector(".city-display .cities");

form.addEventListener("submit", e => {
    e.preventDefault(); // Prevents reloading the page
    const inputValue = input.value; // Grabs the value from the search field

    const apiKey = "0c829e5b400bfad68fe2d1d7f0b2e066";
    const inputValue = input.value; // The city the user wants to check
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API key}`;

    fetch(url)
        .then(response => response.json()) // Turning the HTTP response into JSON format
        .then(data => { // Creating the associated item on the HTML file
            const {
                main,
                name,
                sys,
                weather
            } = data;

            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
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

    // Clearing the search field
    message.textContent = "";
    form.reset();
    input.focus();
});