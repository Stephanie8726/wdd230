document.addEventListener("DOMContentLoaded", function () {
  // Update copyright year
  const copyrightYearElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightYearElement.textContent = `© ${currentYear}`;

  // Update last modified date
  const lastModifiedElement = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

  // Code for the hamburger menu
  const menuButton = document.querySelector('#menu-button');
  const navigation = document.querySelector('.navigation');

  menuButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      menuButton.classList.toggle('open');
  });

  // Function to toggle dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

  // Get weather update and update placeholder
  function getWeatherUpdate() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cebu&units=metric&appid=9f09a5eccc0510d7c21cbba3d3d1c791`)
        .then(response => response.json())
        .then(data => {
            return `Weather update: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            return 'Weather data not available';
        });
}

getWeatherUpdate().then(weatherUpdate => {
  const weatherNameElement = document.getElementById("weatherName");
  weatherNameElement.textContent = weatherUpdate;
});

  // Update visit count
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount++;
  localStorage.setItem('visitCount', visitCount);

  const visitCountPlaceholder = document.getElementById("visitCountPlaceholder");
  visitCountPlaceholder.textContent = `Visits: ${visitCount}`;
});