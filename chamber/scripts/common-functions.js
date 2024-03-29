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
        if (modeButton.textContent.includes("🌑")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "🔆";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "🌑";
        }
    });
  
  });