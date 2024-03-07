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

// getWeatherUpdate().then(weatherUpdate => {
//   const weatherNameElement = document.getElementById("weatherName");
//   weatherNameElement.textContent = weatherUpdate;
// });


// date and number of visits
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-list"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;

localStorage.setItem("visits-list", numVisits);

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
todayDisplay.textContent = today.toLocaleDateString('en-US', options);


// document.addEventListener("DOMContentLoaded", function() {
//     const todayDisplay = document.querySelector(".today");
//     const visitsDisplay = document.querySelector(".visits");
//     const sidebarContent = document.getElementById("sidebar-content");

//     let numVisits = Number(window.localStorage.getItem("visits-list"));
//     const lastVisitTime = window.localStorage.getItem("last-visit-time");

//     if (!lastVisitTime) {
//         sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
//     } else {
//         const lastVisitDate = new Date(lastVisitTime);
//         const currentTime = new Date();
//         const timeDiff = currentTime.getTime() - lastVisitDate.getTime();
//         const oneDay = 1000 * 60 * 60 * 24;
//         const daysDiff = Math.floor(timeDiff / oneDay);

//         if (daysDiff < 1) {
//             sidebarContent.textContent = "Back so soon! Awesome!";
//         } else {
//             sidebarContent.textContent = `You last visited ${daysDiff === 1 ? '1 day' : `${daysDiff} days`} ago.`;
//         }
//     }

//     numVisits++;
//     window.localStorage.setItem("visits-list", numVisits);
//     window.localStorage.setItem("last-visit-time", new Date().toString());

//     visitsDisplay.textContent = numVisits;

//     const today = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     todayDisplay.textContent = today.toLocaleDateString('en-US', options);
// });


});
