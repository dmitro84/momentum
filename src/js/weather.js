const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

export default function showWeather() {


    async function getWeather(city) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${process.env.ID_APP_WEATHER}&units=metric`
            const res = await fetch(url);
            const data = await res.json();

    
            weatherIcon.classList.add(`owf-${Math.round(data.weather[0].id)}`);
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`
        } catch {
            localStorage.setItem('city', city.value);
            alert('Неверно указан город. Попробуйте еще.')

        }

    }

    function getCity(evt) {
        localStorage.setItem('city', city.value);
        if (evt.key === 'Enter') {
            getWeather(city.value)
        }
        getWeather(city.value)
    }

    function getLocalStorage() {
        if (localStorage.getItem('city')) {
            city.value = localStorage.getItem('city');
            getWeather(city.value);
            
        } else {
            localStorage.setItem('city', "Minsk");
            city.value = localStorage.getItem('city');

        }
    }
    window.addEventListener('load', getLocalStorage)

    city.addEventListener('change', getCity);

    getWeather("Minsk");
}



