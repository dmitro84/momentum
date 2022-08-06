const greeting = document.querySelector('.greeting');

const date = new Date();

export function getTimeOfDay(hour) {
    if (hour >= 6 && hour < 12) {
        return 'morning'
    }

    if (hour >= 12 && hour < 18) {
        return 'afternoon'
    }

    
    if (hour >= 18 && hour < 24) {
        return 'evening'
    }

    return 'night'

}


export default function showGreeting() {
    greeting.textContent = 'Good ' + getTimeOfDay(date.getHours())+','
}
