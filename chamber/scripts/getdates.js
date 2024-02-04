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
