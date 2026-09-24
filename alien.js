// Table de conversion : caractère humain -> symbole alien
export const ALPHABET = {
  // Minuscules
  a: '⏃', b: '𓂸', c: '☊', d: '⎅', e: '⟒', f: '⎎', g: '☌', h: '⊑', i: '⟟',
  j: '⟊', k: '☍', l: '⌰', m: '⋔', n: '⋏', o: '⍜', p: '⌿', q: '⍾', r: '⍀',
  s: '⌇', t: '⏁', u: '⎍', v: '⎐', w: '⍙', x: '⌖', y: '⊬', z: '⋉',

  // Majuscules
  A: 'ᚨ', B: 'ᛒ', C: 'ᚲ', D: 'ᛞ', E: 'ᛖ', F: 'ᚠ', G: 'ᚷ', H: 'ᚺ', I: 'ᛁ',
  J: 'ᛃ', K: 'ᚴ', L: 'ᛚ', M: 'ᛗ', N: 'ᚾ', O: 'ᛟ', P: 'ᛈ', Q: 'ᛩ', R: 'ᚱ',
  S: 'ᛊ', T: 'ᛏ', U: 'ᚢ', V: 'ᚡ', W: 'ᚹ', X: 'ᛪ', Y: 'ᚤ', Z: 'ᛉ',

  // Accents minuscules
  à: 'ᐁ', â: 'ᐂ', ä: 'ᐃ', ç: 'ᐄ', é: 'ᐅ', è: 'ᐆ', ê: 'ᐇ', ë: 'ᐈ', î: 'ᐉ',
  ï: 'ᐊ', ô: 'ᐋ', ö: 'ᐌ', ù: 'ᐍ', û: 'ᐎ', ü: 'ᐏ', ÿ: 'ᐐ', œ: 'ᐑ', æ: 'ᐒ',

  // Accents majuscules
  À: 'ᑌ', Â: 'ᑍ', Ä: 'ᑎ', Ç: 'ᑏ', É: 'ᑐ', È: 'ᑑ', Ê: 'ᑒ', Ë: 'ᑓ', Î: 'ᑔ',
  Ï: 'ᑕ', Ô: 'ᑖ', Ö: 'ᑗ', Ù: 'ᑘ', Û: 'ᑙ', Ü: 'ᑚ', Ÿ: 'ᑛ', Œ: 'ᑜ', Æ: 'ᑝ',

  // Chiffres
  0: '⦰', 1: '⦱', 2: '⦲', 3: '⦳', 4: '⦴', 5: '⦵', 6: '⦶', 7: '⦷', 8: '⦸', 9: '⦹',

  // Ponctuation
  '.': '◉', ',': '◌', '!': '◬', '?': '◭', "'": '◜', '"': '◝', ':': '◈', ';': '◊',
  '-': '◠', '(': '◖', ')': '◗', '@': '◍', '&': '◎', '+': '◇', '=': '◫', '/': '◸',
  '*': '◆', '%': '◔', '#': '◙',
};

// Table inverse : symbole alien -> caractère humain (générée automatiquement)
export const INVERSE = Object.fromEntries(
  Object.entries(ALPHABET).map(([humain, alien]) => [alien, humain])
);

// Texte humain -> code alien
export function encoder(texte) {
  return Array.from(texte, (caractere) => ALPHABET[caractere] ?? caractere).join('');
}

// Code alien -> texte humain
export function decoder(code) {
  return Array.from(code, (symbole) => INVERSE[symbole] ?? symbole).join('');
}