const apiKey = "f171ed88147e84d776c5043d8e6b3d7c";

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            document.querySelector('.temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.querySelector('.feels-like').textContent = `Feels Like: ${data.main.feels_like}°C`;
            document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector('.wind').textContent = `Wind: ${data.wind.speed} m/s`;
            document.querySelector('.pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
            document.querySelector('.visibility').textContent = `Visibility: ${data.visibility} meters`;
            document.querySelector('.condition').textContent = `${data.weather[0].main} - ${data.weather[0].description}`;
            document.querySelector('.city').textContent = `City: ${data.name}`;
            
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error fetching ", error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const cityForm = document.querySelector('.city-form');
    
    cityForm.addEventListener('submit', function (event) {
        
        event.preventDefault(); 
        const cityInput = document.querySelector('#city').value;
        getWeather(cityInput); 
     
        document.querySelector('#city').value = ''; 
    });
});

