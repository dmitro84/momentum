import { cityTranslator, weatherTranslator } from "./translate";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');




export default function showWeather() {


  async function getWeather(town, lang) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&lang=${lang}&appid=${process.env.ID_APP_WEATHER}&units=metric`
      const res = await fetch(url);
      const data = await res.json();


      weatherIcon.classList.add(`owf-${Math.round(data.weather[0].id)}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${weatherTranslator[lang].windSpeed}: ${Math.round(data.wind.speed)} ${weatherTranslator[lang].ms}`;
      humidity.textContent = `${weatherTranslator[lang].humidity}: ${Math.round(data.main.humidity)} %`
    } catch {
      localStorage.setItem('city', city.value);
      alert('Неверно указан город. Попробуйте еще.')

    }

  }

  function getCity(evt) {
    localStorage.setItem('city', city.value);
    if (evt.key === 'Enter') {
      getWeather(city.value, localStorage.getItem('lang'))
    }
    getWeather(city.value, localStorage.getItem('lang'))
  }

  function getLocalStorage() {
    if (localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
      getWeather(city.value, localStorage.getItem('lang'));

    } else {
      localStorage.setItem('city', cityTranslator[localStorage.getItem('lang')].minsk);
      city.value = localStorage.getItem('city');

    }
  }
  getLocalStorage();

  city.addEventListener('change', getCity);

  getWeather(cityTranslator[localStorage.getItem('lang')].minsk, localStorage.getItem('lang'));
}
