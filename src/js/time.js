import showDate from "./date";
import showGreeting from "./greeting";
import getQuotes from "./qoutes";
import { cityTranslator } from "./translate";
import showWeather from "./weather";

const langToggle = document.querySelector('#language-toggle');
const inputName = document.querySelector('.name');


const time = document.querySelector('.time');

let language = 'en';

if (localStorage.getItem('checkbox')) {
  language = 'ru';
  inputName.placeholder = 'Введите ваше имя';
}

export default function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(language);
  showGreeting(language);
  setTimeout(showTime, 1000);
}

function changeLanguage() {
  if (language === 'en') {
    language = 'ru'
    localStorage.setItem('lang', "ru");
    localStorage.setItem('checkbox', "checked");
    langToggle.checked = true;
    inputName.placeholder = 'Введите ваше имя';
    if (localStorage.getItem('city') === 'Minsk') {
      localStorage.setItem('city', cityTranslator[localStorage.getItem('lang')].minsk);
    }
    showWeather();
    getQuotes(language);


  } else {
    language = 'en'
    localStorage.setItem('lang', "en");
    localStorage.setItem('checkbox', "");
    inputName.placeholder = 'Enter your name';
    if (localStorage.getItem('city') === 'Минск') {
      localStorage.setItem('city', cityTranslator[localStorage.getItem('lang')].minsk);
    }
    showWeather();
    getQuotes(language);

  }
}

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', "en");
}

langToggle.checked = localStorage.getItem('checkbox');

langToggle.addEventListener('input', changeLanguage)
