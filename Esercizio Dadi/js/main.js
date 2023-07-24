// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const rollDice = document.getElementById("roll-dice");

rollDice.addEventListener("click", function () {
  const userNumber = Math.round(Math.random() * 5) + 1;
  const computerNumber = Math.round(Math.random() * 5) + 1;
  const userResult = document.getElementById("user-result");
  const computerResult = document.getElementById("computer-result");
  userResult.innerHTML = "Risultato utente: " + userNumber;
  computerResult.innerHTML = "Risultato computer: " + computerNumber;
  const result = document.getElementById("result");
  if (userNumber > computerNumber) {
    result.innerHTML = "L'utente ha vinto";
  } else if (userNumber < computerNumber) {
    result.innerHTML = "Il computer ha vinto";
  } else result.innerHTML = "Parità";
});
