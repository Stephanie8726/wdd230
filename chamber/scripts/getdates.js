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

  // Get weather update and update placeholder
  getWeatherUpdate().then(weatherUpdate => {
      const weatherPlaceholder = document.getElementById("weatherPlaceholder");
      weatherPlaceholder.textContent = weatherUpdate;
  });

  // Update visit count
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount++;
  localStorage.setItem('visitCount', visitCount);

  const visitCountPlaceholder = document.getElementById("visitCountPlaceholder");
  visitCountPlaceholder.textContent = `Visits: ${visitCount}`;
});

// to pin the map
// function initMap() {
//   var center = { lat: 10.252338482105115, lng: 124.01940599374602 };
//   var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: center
//   });

//   var marker = new google.maps.Marker({
//       position: center,
//       map: map
//   });

//   getLocationData('Cebu, Philippines');

//   function getLocationData(location) {
//     const apiKey = 'AIzaSyCAC8eP20iVmcCd6y-W3WTnCEgZmLId0M0';
//     const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`;
  
// }}


// dark mode
// Add this script in your JavaScript file or within <script> tags in your HTML

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