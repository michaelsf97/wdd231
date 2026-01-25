// OpenWeatherMap API Configuration
// ⚠️ IMPORTANT: Replace 'YOUR_API_KEY_HERE' with your actual API key
const API_KEY = 'YOUR_API_KEY_HERE';
const CITY = 'Saint George';
const STATE = 'UT';
const COUNTRY = 'US';

// API URL for current weather
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${STATE},${COUNTRY}&appid=${API_KEY}&units=imperial`;

// API URL for 3-day forecast
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${STATE},${COUNTRY}&appid=${API_KEY}&units=imperial`;

// Fetch and display current weather
async function displayCurrentWeather() {
    try {
        // Step 1: Fetch data from API
        const response = await fetch(currentWeatherURL);
        
        // Step 2: Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Step 3: Convert response to JSON
        const data = await response.json();
        
        // Step 4: Log data to console (for learning/debugging)
        console.log('Current Weather Data:', data);
        
        // Step 5: Extract the data we need
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const iconCode = data.weather[0].icon;
        
        // Step 6: Display on the page
        displayWeatherInfo(temperature, description, humidity, windSpeed, iconCode);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayWeatherError();
    }
}

// Display weather information in the HTML
function displayWeatherInfo(temp, desc, humidity, wind, iconCode) {
    // Find the weather elements
    const weatherSection = document.querySelector('#current-weather');
    
    if (weatherSection) {
        // Update the HTML content
        weatherSection.innerHTML = `
            <h3>Current Weather</h3>
            <div class="weather-card">
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" 
                         alt="${desc}" 
                         width="100" 
                         height="100">
                </div>
                <div class="weather-info">
                    <p class="temperature">${temp}°F</p>
                    <p class="condition">${capitalizeWords(desc)}</p>
                    <p class="humidity">Humidity: ${humidity}%</p>
                    <p class="wind">Wind: ${wind} mph</p>
                    <p class="location">${CITY}, ${STATE}</p>
                </div>
            </div>
        `;
    }
}

// Display error message if API fails
function displayWeatherError() {
    const weatherSection = document.querySelector('#current-weather');
    if (weatherSection) {
        weatherSection.innerHTML = `
            <h3>Current Weather</h3>
            <p>Unable to load weather data. Please try again later.</p>
        `;
    }
}

// Fetch and display 3-day forecast
async function displayForecast() {
    try {
        const response = await fetch(forecastURL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Forecast Data:', data);
        
        // OpenWeatherMap returns forecast in 3-hour intervals
        // We'll get forecasts for noon each day (12:00:00)
        const forecasts = data.list.filter(item => 
            item.dt_txt.includes('12:00:00')
        ).slice(0, 3); // Get first 3 days
        
        displayForecastInfo(forecasts);
        
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Display forecast information
function displayForecastInfo(forecasts) {
    const forecastSection = document.querySelector('#forecast');
    
    if (!forecastSection) return;
    
    let forecastHTML = '<h3>3-Day Forecast</h3><div class="forecast-container">';
    
    forecasts.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayName = index === 0 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(day.main.temp);
        const tempMin = Math.round(day.main.temp_min);
        const tempMax = Math.round(day.main.temp_max);
        const desc = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        
        forecastHTML += `
            <div class="forecast-day">
                <h4>${dayName}</h4>
                <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" 
                     alt="${desc}" 
                     width="75" 
                     height="75">
                <p>${tempMax}°F / ${tempMin}°F</p>
                <p>${capitalizeWords(desc)}</p>
            </div>
        `;
    });
    
    forecastHTML += '</div>';
    forecastSection.innerHTML = forecastHTML;
}

// Helper function to capitalize each word
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Call functions when page loads
displayCurrentWeather();
displayForecast();
