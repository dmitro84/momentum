import { getRandomNum } from "./functions";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export default async function getQuotes(lang='en') {
    try {
        const quotesURL = 'data/data.json';
        const res = await fetch(quotesURL);
        const data = await res.json();

        const quoteRandom = data[getRandomNum(0, data.length-1)]


        quote.textContent = quoteRandom[lang].text;
        author.textContent = quoteRandom[lang].author;

    }
    catch (e) {
        alert('Возникла шибка получения цитат')
    }
}

changeQuote.addEventListener('click', ()=>getQuotes(localStorage.getItem('lang')));
