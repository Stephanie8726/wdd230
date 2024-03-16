// Define the latitude and longitude coordinates of Trier, Germany
const latitude = 49.75; // Rounded to two decimal places
const longitude = 6.64; // Rounded to two decimal places

// Construct the URL for the OpenWeatherMap API
const apiKey = '9f09a5eccc0510d7c21cbba3d3d1c791'; // Replace 'your_api_key_here' with your actual API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Define the asynchronous function to fetch weather data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output the fetched data to the console for testing
      displayResults(data); // Call the displayResults function to display the weather data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Call the apiFetch function to initiate the API request
apiFetch();

