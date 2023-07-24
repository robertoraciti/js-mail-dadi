// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNumber = Math.round(Math.random() * 5) + 1;
const computerNumber = Math.round(Math.random() * 5) + 1;

if (userNumber > computerNumber) {
  alert("L'utente ha vinto");
} else if (userNumber < computerNumber) {
  alert("Il computer ha vinto");
} else alert("Parità");
