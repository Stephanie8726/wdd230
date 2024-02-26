document.addEventListener("DOMContentLoaded", function () {
    const tempDegreeElement = document.getElementById("tempDegree");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");

    if (tempDegreeElement && windSpeedElement && windChillElement) {
        const tempDegree = parseFloat(tempDegreeElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);

        if (!isNaN(tempDegree) && !isNaN(windSpeed)) {
            if (tempDegree <= 50 && windSpeed > 3.0) {
                const windChill = calculateWindChill(tempDegree, windSpeed);
                windChillElement.textContent = `Wind Chill: ${windChill}°F`;
            } else {
                windChillElement.textContent = "Wind Chill: N/A";
            }
        }
    }
});

function calculateWindChill(temperature, windSpeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}
