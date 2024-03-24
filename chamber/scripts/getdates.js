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

//   number of visits
function welcomeMessage(){

    let lastVisit = localStorage.getItem("lastVisit") || Date.now();
    let currentDate = Date.now();
    const dayMs = 86400000;

    if (lastVisit == currentDate){
        localStorage.setItem("lastVisit", currentDate);
        return "Welcome! Let us know if you have any questions.";
    }
    else if ((currentDate - lastVisit) / dayMs < 1 ){
        localStorage.setItem("lastVisit", currentDate);
        return "Back so soon! Awesome!";
    }
    else{
        localStorage.setItem("lastVisit", currentDate);
        return `You last visited ${(lastVisit/dayMs).toFixed(0)} days ago.`;
    }

}

document.querySelector("#message").innerHTML = welcomeMessage();

    const today = new Date().toLocaleDateString();
    document.querySelector(".today").textContent = today;
});




  // week10 current weather
  function toggleBannerVisibility() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 
    const banner = document.getElementById('meetAndGreetBanner');
    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

const currentWeatherDiv = document.getElementById("current-weather");
const weatherCardsDiv = document.getElementById("weather-cards");
const API_KEY = "9f09a5eccc0510d7c21cbba3d3d1c791";

const createWeatherCard = (weatherItem) => {
    return `<li class="card">
                <h3>${weatherItem.date}</h3>
                <div class="details">
                    <p>${weatherItem.temp}°C - ${weatherItem.description}</p>
                    <img src="http://openweathermap.org/img/wn/${weatherItem.icon}.png" alt="Weather Icon">
                </div>
            </li>`;
};

const updateWeatherData = () => {
    // Get current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cebu&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const currentWeather = {
                temperature: (data.main.temp - 273.15).toFixed(2),
                description: data.weather[0].description,
                icon: data.weather[0].icon
            };
            currentWeatherDiv.innerHTML = `
                <h4>Current Weather</h4>
                <div class="details">
                    <p>${currentWeather.temperature}°C - ${currentWeather.description}</p>
                    <img src="http://openweathermap.org/img/wn/${currentWeather.icon}.png" alt="Weather Icon" tyle="width: 20px; height: 30px;">
                </div>`;
        })
        .catch((error) => console.error("Error fetching current weather:", error));

    // Get three-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cebu&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
            weatherCardsDiv.innerHTML = forecast.map((item) => {
                const weatherItem = {
                    date: item.dt_txt.split(" ")[0],
                    temp: (item.main.temp - 273.15).toFixed(2),
                    description: item.weather[0].description,
                    icon: item.weather[0].icon
                };
                return createWeatherCard(weatherItem);
            }).join("");
        })
        .catch((error) => console.error("Error fetching weather forecast:", error));
};

updateWeatherData();

const banner = document.getElementById("meetAndGreetBanner");
const closeButton = document.getElementById("closeBannerButton");

// check if today is Monday, Tuesday, or Wednesday
const isBannerDay = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
};

// toggle the banner visibility
const toggleBanner = () => {
    banner.style.display = isBannerDay() ? "block" : "none";
};

// Close button event listener
closeButton.addEventListener("click", () => {
    banner.style.display = "none";
});

// Check and display the banner on page load
window.addEventListener("load", toggleBanner);

  