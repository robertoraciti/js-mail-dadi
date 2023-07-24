// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emails = [
  "mail1@gmail.com",
  "mail2@gmail.com",
  "mail3@gmail.com",
  "mail4@gmail.com",
];

for (let i = 0; i < emails.length; i++) {
  const email = emails[i];
  let userMail = prompt("Inserisci qui la tua E-mail");
  userMail =
    userMail === email ? alert("Accesso consentito") : alert("Accesso negato");
}
