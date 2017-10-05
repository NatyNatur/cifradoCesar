// Pidiendo frase al usuario
function gettingPhrase(){
	do {
		var success = true; // variable auxiliar
		var phrase = prompt("Ingresa una frase"); 
			if (phrase.length === 0 ) {
				alert ("Por favor, ingresa una frase"); 
				success = false; 
				}
			if (phrase.match(/[0-9]/g)) {
				alert("Por favor, ingresa una frase que solo contenga letras");
				success = false;
				}
			}
	 while (success === false); // mientras las condiciones resulten falsas, seguirá ejecutándose el ciclo
return phrase;
}

var obtainedPhrase = gettingPhrase();  // solo funciona con mayúsculas :c me aseguro de que la frase obtenida lo sea.

// Si le entrego "ABCD", debe devolver "HIJK"
function cipher(){
	var cipherPhrase = ""; // vacía, para recibir los índices cifrados
	for (var i = 0; i < obtainedPhrase.length; i++) { // recorre la frase obtenida
		if (obtainedPhrase[i] == " ") { // si la frase tiene espacio, devuelve espacio
			cipherPhrase = cipherPhrase + " ";
		}
		else {
		var letters = obtainedPhrase.charCodeAt(i); // codifica a ASCII las letras de la frase
			letters = (((letters - 65) + 33) % 26) + 65; // fórmula para cifrar
			letters = String.fromCharCode(letters); // devuelve las letras de lo cifrado
			cipherPhrase = cipherPhrase + letters;
		}
	}
	return alert("Tu frase cifrada se ve así: \n" + cipherPhrase);
}

// Si le entrego "HIJK", debe devolver "ABCD"
function decipher() {  //(x - 23 + 26) % 26 da positivo
	var decipherPhrase = ""; // vacía, para recibir los índices descifrados
	for (var i = 0; i < obtainedPhrase.length; i++) { // recorre la frase obtenida
		if (obtainedPhrase[i] == " ") { // si la frase tiene espacio, devuelve espacio
			decipherPhrase = decipherPhrase + " ";
		}
		else {
		var letters = obtainedPhrase.charCodeAt(i); // codifica a ASCII las letras de la frase
			letters = ((((letters - 65) - 33)+26) % 26) + 65; // fórmula para descifrar
			letters = String.fromCharCode(letters); // devuelve las letras de lo descifrado
			decipherPhrase = decipherPhrase + letters;
		}
	}
	return alert("Tu frase descifrada se ve así: \n" + decipherPhrase);
}

function start(){
	do {
		var response = prompt("Ingresa el número de lo que deseas hacer: \n  1: si quieres cifrar tu frase \n  2: si quieres descifrar tu frase \n  3: si quieres salir :)"); 
		if (response !== "") {
			if (response == "1") {
				cipher(obtainedPhrase);
				//response = 3;
			} 
			else if (response == "2") {
				decipher(obtainedPhrase);
				//response = 3;
			}
			else if (response == "3") {
				break;
			} 
			else {
				alert ("Ingresa una opción válida :c");
			}
		}
	} while (response === "" || (response !== 1 && response !== 2 && response !== 3));
}

start();