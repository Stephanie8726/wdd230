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

  function toggleBannerVisibility() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const banner = document.getElementById('meetAndGreetBanner');
    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to close the banner
  document.getElementById('closeBannerButton').addEventListener('click', function () {
      document.getElementById('meetAndGreetBanner').style.display = 'none';
  });

  // Fetch current weather data for a specific location
  const lat = 10.31;
  const lon = 123.91;
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch weather data');
          }
          return response.json();
      })
      .then(data => {
          // Display current weather information
          const currentTemperatureElement = document.getElementById('current-temperature');
          const currentWeatherDescriptionElement = document.getElementById('current-weather-description');
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          currentTemperatureElement.textContent = `Current Temperature: ${temperature}°C`;
          currentWeatherDescriptionElement.textContent = `Weather Description: ${description}`;

          // Toggle banner visibility based on day
          toggleBannerVisibility();
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });

  // Function to toggle banner visibility based on day
  function toggleBannerVisibility() {
      const currentDate = new Date();
      const currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
      const banner = document.getElementById('meetAndGreetBanner');
      if (currentDay >= 1 && currentDay <= 3) {
          banner.style.display = 'block';
      } else {
          banner.style.display = 'none';
      }
  }
});
});

  