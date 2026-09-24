import { ALPHABET, encoder, decoder } from './alien.js';

// Éléments de la page
const zoneTexte = document.getElementById('texte');
const zoneAlien = document.getElementById('alien');
const boutonCopierTexte = document.getElementById('copier-texte');
const boutonCopierAlien = document.getElementById('copier-alien');
const boutonEffacer = document.getElementById('effacer');
const grilleAlphabet = document.getElementById('alphabet');

// Traduction en direct, dans les deux sens
zoneTexte.addEventListener('input', () => {
  zoneAlien.value = encoder(zoneTexte.value);
});

zoneAlien.addEventListener('input', () => {
  zoneTexte.value = decoder(zoneAlien.value);
});

// Copie dans le presse-papiers
function copier(zone, bouton) {
  navigator.clipboard.writeText(zone.value);
  bouton.textContent = 'Copié !';
  setTimeout(() => (bouton.textContent = 'Copier'), 1500);
}

boutonCopierTexte.addEventListener('click', () => copier(zoneTexte, boutonCopierTexte));
boutonCopierAlien.addEventListener('click', () => copier(zoneAlien, boutonCopierAlien));

// Tout effacer
boutonEffacer.addEventListener('click', () => {
  zoneTexte.value = '';
  zoneAlien.value = '';
  zoneTexte.focus();
});

// Affichage de l'alphabet
for (const [lettre, symbole] of Object.entries(ALPHABET)) {
  const carte = document.createElement('div');
  carte.className = 'case';

  const spanSymbole = document.createElement('span');
  spanSymbole.className = 'symbole';
  spanSymbole.textContent = symbole;

  const spanLettre = document.createElement('span');
  spanLettre.className = 'lettre';
  spanLettre.textContent = lettre;

  carte.append(spanSymbole, spanLettre);
  grilleAlphabet.appendChild(carte);
}