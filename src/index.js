import '../public/style.css';

const card = document.querySelector('.card');
const quoteText = document.querySelector('#quote-text');
const authorText = document.querySelector('#quote-author');
const infoBtn = document.querySelector('.infoBtn');
const info = document.querySelector('.info');

const getQuote = async () => {
  fetch('https://api.quotable.io/random?maxLength=125')
  .then((response) => response.json())
    .then((data) => {
      quoteText.innerHTML = data.content;
      authorText.textContent = data.author;
    })
};

infoBtn.addEventListener('click', () => {
  const displayOpen = infoBtn.data === 'open';
  displayOpen ?
    infoBtn.innerHTML = '<span class="open">&#9432;</span>' :
    infoBtn.innerHTML = '<span class="close">&#x2715;</span>';
  displayOpen ? card.style.display = 'flex' : card.style.display = 'none';
  displayOpen ? info.style.display = 'none' : info.style.display = 'flex';
  displayOpen === true ? infoBtn.data = 'close' : infoBtn.data = 'open';
});
  
card.addEventListener('click', () => {
  getQuote();
});

if (quoteText.innerHTML === '') {
  getQuote();
} 

infoBtn.click();
infoBtn.click();
