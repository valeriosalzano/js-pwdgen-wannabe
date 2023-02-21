// Asking user: name, surname, favourite colour.
const userName = prompt ('Inserisci il tuo nome');

const userSurname = prompt ('Inserisci il tuo cognome');

const userFavColour = prompt ('Inserisci il tuo colore preferito');

// Generating password "namesurnamefavouritecolour23"
document.getElementById("userPassword").innerHTML = (`${userName}${userSurname}${userFavColour}23`);