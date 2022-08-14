import "./styles/style.css";
import showTime from "./js/time";
import getRandomNum, { setBg } from "./js/slider";
import showWeather from "./js/weather";
import getQuotes from "./js/qoutes";
import turnPlayer from "./js/player";


showTime();
showWeather();
setInterval(showWeather, 300000);
getQuotes(localStorage.getItem('lang'));
turnPlayer();
