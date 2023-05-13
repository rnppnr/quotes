import '../public/style.css';

const card = document.querySelector('.card');
const quoteText = document.querySelector('#quote-text');
const authorText = document.querySelector('#quote-author');

const getQuote = async () => {
  fetch('https://api.quotable.io/random?maxLength=125')
  .then((response) => response.json())
    .then((data) => {
      quoteText.innerHTML = data.content;
      authorText.textContent = data.author;
    })
};

card.addEventListener('click', () => {
  getQuote();
});

if (quoteText.innerHTML === '') {
  getQuote();
} 

