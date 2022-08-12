const datePage = document.querySelector('.date');

export default function showDate(lang) {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric'};
    const currentDate = date.toLocaleDateString(lang, options);
    datePage.textContent = currentDate;
}


