const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener('click', function() {
    const receitaID = card.getAttribute('id');
    alert(receitaID);
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      "iframe"
    ).src = `/assets/${receitaID}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
  });
  