import "./styles/style.css";
import showTime from "./js/time"
import getName from "./js/saveName";
import getRandomNum, { setBg } from "./js/slider";
import { getTimeOfDay } from "./js/greeting";
import getWeather, { getCity } from "./js/weather";
import useLoacalStorage from "./js/functions";
import showWeather from "./js/weather";


showTime();
showWeather();
setInterval(showWeather, 300000);




