const datePage = document.querySelector('.date');

export default function showDate() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    datePage.textContent = currentDate;
}


