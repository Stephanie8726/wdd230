// getdates.js

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
  const menuButton = document.getElementById('menu-button');
  const navigation = document.querySelector('.navigation');

  menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
  });
});
  
