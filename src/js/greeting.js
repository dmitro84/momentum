import greetingTranslation from "./translate";


const greeting = document.querySelector('.greeting');

const date = new Date();

export function getTimeOfDay(hour, lang='us') {
    if (hour >= 6 && hour < 12) {
        return greetingTranslation[lang].morning
    }

    if (hour >= 12 && hour < 18) {
        return greetingTranslation[lang].afternoon
    }

    
    if (hour >= 18 && hour < 24) {
        return greetingTranslation[lang].evening
    }

    return greetingTranslation[lang].night

}


export default function showGreeting(lang) {
    greeting.textContent = `${lang === 'ru' ? '' : 'Good'} ${getTimeOfDay(date.getHours(), lang)}, `
}