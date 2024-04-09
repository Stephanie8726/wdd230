// Function to fetch weather data
function fetchWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=9f09a5eccc0510d7c21cbba3d3d1c791')
        .then(response => response.json())
        .then(data => {
            // Extract and display the high temperature
            const tempMax = (data.main.temp_max - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            document.getElementById('temp-max').textContent = tempMax + "°C";
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to fetch current weather data
function fetchCurrentWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=9f09a5eccc0510d7c21cbba3d3d1c791')
        .then(response => response.json())
        .then(data => {
            // Extract and display current weather information
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;

            document.getElementById('current-weather').innerHTML = `
                <h4>Current Weather</h4>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Weather: ${weatherDescription}</p>
                <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
            `;
        })
        .catch(error => console.error('Error fetching current weather:', error));
}

// Function to fetch next day's forecast at 3:00 PM
function fetchNextDayForecast() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(15, 0, 0, 0); // Set time to 3:00 PM

    const tomorrowTimestamp = Math.floor(tomorrow.getTime() / 1000);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=9f09a5eccc0510d7c21cbba3d3d1c791`)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.find(item => item.dt >= tomorrowTimestamp);
            if (forecast) {
                const temperature = (forecast.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
                const weatherDescription = forecast.weather[0].description;
                const weatherIcon = forecast.weather[0].icon;

                // Display next day's forecast
                document.getElementById('next-day-forecast').innerHTML = `
                    <h4>Next Day Forecast (3:00 PM)</h4>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${weatherDescription}</p>
                    <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
                `;
            } else {
                console.log('No forecast found for 3:00 PM tomorrow.');
            }
        })
        .catch(error => console.error('Error fetching next day forecast:', error));
}

// Close the message when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.message').style.display = 'none';
});

// Call functions to fetch weather data
fetchWeatherData();
fetchCurrentWeather();
fetchNextDayForecast();
