import showDate from "./data";
import showGreeting from "./greeting";
import showWeather from "./weather";



const time = document.querySelector('.time');

export default function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
