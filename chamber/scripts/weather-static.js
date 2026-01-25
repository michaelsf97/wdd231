// Temporary static weather (works without API key)
// Use this while waiting for your OpenWeatherMap API key to activate

function displayStaticWeather() {
    const weatherSection = document.querySelector('#current-weather');
    
    if (weatherSection) {
        weatherSection.innerHTML = `
            <h3>Current Weather</h3>
            <div class="weather-card">
                <div class="weather-icon">
                    <img src="https://openweathermap.org/img/wn/02d@2x.png" 
                         alt="Partly cloudy" 
                         width="100" 
                         height="100">
                </div>
                <div class="weather-info">
                    <p class="temperature">72°F</p>
                    <p class="condition">Partly Cloudy</p>
                    <p class="humidity">Humidity: 45%</p>
                    <p class="wind">Wind: 5 mph</p>
                    <p class="location">Saint George, UT</p>
                </div>
            </div>
        `;
    }
}

function displayStaticForecast() {
    const forecastSection = document.querySelector('#forecast');
    
    if (!forecastSection) return;
    
    forecastSection.innerHTML = `
        <h3>3-Day Forecast</h3>
        <div class="forecast-container">
            <div class="forecast-day">
                <h4>Tomorrow</h4>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" 
                     alt="Sunny" 
                     width="75" 
                     height="75">
                <p>75°F / 52°F</p>
                <p>Sunny</p>
            </div>
            <div class="forecast-day">
                <h4>Monday</h4>
                <img src="https://openweathermap.org/img/wn/03d@2x.png" 
                     alt="Cloudy" 
                     width="75" 
                     height="75">
                <p>68°F / 48°F</p>
                <p>Cloudy</p>
            </div>
            <div class="forecast-day">
                <h4>Tuesday</h4>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" 
                     alt="Rainy" 
                     width="75" 
                     height="75">
                <p>62°F / 45°F</p>
                <p>Rainy</p>
            </div>
        </div>
    `;
}

// Run when page loads
displayStaticWeather();
displayStaticForecast();
