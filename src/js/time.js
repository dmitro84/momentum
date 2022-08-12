import showDate from "./data";
import showGreeting from "./greeting";

const langToggle = document.querySelector('#language-toggle');


const time = document.querySelector('.time');

let language = 'us'

export default function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate(language);
    showGreeting(language);
    setTimeout(showTime, 1000);
}

function changeLanguage() {
    if(language === 'us') {
        language = 'ru'
    } else {
        language = 'us'
    }
}

langToggle.addEventListener('input', changeLanguage)
