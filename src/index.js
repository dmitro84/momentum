import "./styles/style.css";
import showTime from "./js/time";
import showWeather from "./js/weather";
import getQuotes from "./js/qoutes";
import turnPlayer from "./js/player";
import saveName from "./js/saveName";
import getSlider from "./js/slider";


showTime();
getSlider();
showWeather();
saveName();
setInterval(showWeather, 300000);
getQuotes(localStorage.getItem('lang'));
turnPlayer();
