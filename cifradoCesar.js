/*
* Pidiendo frase al usuario
*/
function gettingPhrase() {
  do {
    // variable auxiliar
    var success = true;
    var phrase = prompt('Ingresa una frase');
    if (phrase.length === 0) {
      alert('Por favor, ingresa una frase');
      success = false;
    }
    if (phrase.match(/[0-9]/g)) {
      alert('Por favor, ingresa una frase que solo contenga letras');
      success = false;
    }
  }
  // mientras las condiciones resulten falsas, seguirá ejecutándose el ciclo
  while (success === false);
  return phrase;
}

// solo funciona con mayúsculas :c me aseguro de que la frase obtenida lo sea.
var obtainedPhrase = gettingPhrase().toUpperCase();
// Si le entrego "ABCD", debe devolver "HIJK"
function cipher() {
  // variable acía, para recibir los índices cifrados
  var cipherPhrase = '';
  // recorro la frase obtenida
  for (var i = 0; i < obtainedPhrase.length; i++) {
    // si la frase tiene espacio, devuelve espacio
    if (obtainedPhrase[i] === ' ') {
      cipherPhrase = cipherPhrase + ' ';
    } else {
      // codifica a ASCII las letras de la frase
      var letters = obtainedPhrase.charCodeAt(i);
      // fórmula para cifrar
      letters = (((letters - 65) + 7) % 26) + 65;
      // devuelve las letras de lo cifrado
      letters = String.fromCharCode(letters);
      cipherPhrase = cipherPhrase + letters;
    }
  }
  return alert('Tu frase cifrada se ve así: \n' + cipherPhrase);
}

/*
* Si le entrego "HIJK", debe devolver "ABCD"
* (x - 23 + 26) % 26 da positivo
*/
function decipher() {
  // vacía, para recibir los índices descifrados
  var decipherPhrase = '';
  // recorre la frase obtenida
  for (var i = 0; i < obtainedPhrase.length; i++) {
    // si la frase tiene espacio, devuelve espacio
    if (obtainedPhrase[i] === ' ') {
      decipherPhrase = decipherPhrase + ' ';
    } else {
      // codifica a ASCII las letras de la frase
      var letters = obtainedPhrase.charCodeAt(i);
      // fórmula para descifrar
      letters = ((((letters - 65) - 7) + 26) % 26) + 65;
      // devuelve las letras de lo descifrado
      letters = String.fromCharCode(letters);
      decipherPhrase = decipherPhrase + letters;
    }
  }
  return alert('Tu frase descifrada se ve así: \n' + decipherPhrase);
}

function start() {
  do {
    var response = prompt('Ingresa el número de lo que deseas hacer: \n ' +
      '1: si quieres cifrar tu frase \n ' +
      '2: si quieres descifrar tu frase \n ' +
      '3: si quieres salir :)');
    if (response !== '') {
      if (response === '1') {
        cipher(obtainedPhrase);
        // response = 3;
      } else if (response === '2') {
        decipher(obtainedPhrase);
        // response = 3;
      } else if (response === '3') {
        break;
      } else {
        alert('Ingresa una opción válida :c');
      }
    }
  } while (response === '' || (response !== 1 && response !== 2 && response !== 3));
}

start();