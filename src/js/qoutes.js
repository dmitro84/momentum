const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export default async function getQuotes() {
    try {
        const quotesURL = 'https://favqs.com/api/qotd';
        const res = await fetch(quotesURL);
        const data = await res.json();

        quote.textContent = data.quote.body;
        author.textContent = data.quote.author;

    }
    catch (e) {
        alert('Возникла шибка получения цитат')
    }
}

changeQuote.addEventListener('click', getQuotes);
