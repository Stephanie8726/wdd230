document.addEventListener("DOMContentLoaded", function () {
  // Update copyright year
  const copyrightYearElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightYearElement.textContent = `© ${currentYear}`;

  // Update last modified date
  const lastModifiedElement = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

  // code for the hamburger menu
  const hamButton = document.querySelector('#menu-button');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });

  // local storage / number of visit
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);


// for weather update
const apiKey = '9f09a5eccc0510d7c21cbba3d3d1c791';
const city = 'Cebu';

// API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch data from OpenWeatherMap API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // weather information
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        // weather information html update
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('description').textContent = description;

        // weather icon url
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        // weather icon img
        const iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.alt = 'Weather Icon';
        // Append icon to the div icon
        document.getElementById('icon').appendChild(iconImg);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
});
