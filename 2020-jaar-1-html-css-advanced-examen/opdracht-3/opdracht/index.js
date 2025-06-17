/* Negeren */
function randomScore(min, max) {
  return Math.random() * (max - min) + min;
}

const cursisten = [
  { id: 0, naam: "Yoeri" },
  { id: 1, naam: "Marvi Hendriks" },
  { id: 2, naam: "Simone :P" },
  { id: 3, naam: "Domenico" },
  { id: 4, naam: "Marco " },
  { id: 5, naam: "Michelle" },
  { id: 6, naam: "Romy" },
  { id: 9, naam: "Ian" },
  { id: 10, naam: "Angelique" },
  { id: 11, naam: "Arne" },
];

function voegScoresToeAanCursisten() {
  cursisten.forEach(
    (cursist) => (cursist.score = Math.round(randomScore(50, 100)))
  );
}
/* Tot hier negeren */

function cursistenToevoegen() {
  voegScoresToeAanCursisten();
  const cardsEl = document.querySelector(".cards");
  cardsEl.innerHTML = "";

  cursisten.forEach((cursist) => {
    const card = document.createElement("div");
    card.classList = "card";
    card.style.width = "250px";
    card.innerHTML = `<div class="card-body">
 <h5 class="card-title">${cursist.naam}</h5>
 <p class="card-text">${cursist.score}</p>
 <div class="progress">
   <div class="progress-bar" style="width: ${cursist.score}%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
 </div>
 </div>`;

    cardsEl.appendChild(card);
    // Zorg dat er voor elke cursist een element wordt aangemaakt.
    // Enkel hier moet code toegevoegd worden.
  });
}
