const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener('click', function() {
    const receitaID = card.getAttribute('id');
    const title = card.querySelector('.card__title').textContent;
    const author = card.querySelector('.card__author').textContent;
    alert(title);
    alert(author);
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `assets/${receitaID}`+'.png';
    modalOverlay.querySelector('.modal__title').innerHTML = title;
    modalOverlay.querySelector('.modal__author').innerHTML = author;
    });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
  });
  