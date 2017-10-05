## Cifrado César

#### Pseudocódigo
###### Primero defino mis funciones:

+ Función **gettingPhrase**: *Esta función le pide al usuario que ingrese una frase con la que se va a trabajar posteriormente.*

	- Pedir al usuario que ingrese una frase mediante un *prompt*. 
	- Mientras la variable auxiliar *success* sea falsa, se pide nuevamente una frase mediante: 
	   - un alert pidiendo que ingrese una frase 
	   - un alert pidiendo que la frase no contenga números 
	- Mientras la frase ingresada contenga números o no se ingrese nada, se repetirá el bucle pidiendo una frase.

+ Función **cipher**: *Esta función cifrará la frase entregada por el usuario*

	- Creo una variable tipo string vacía, que luego recibirá los índices cifrados.
		- Inicio un ciclo *for* para recorrer la frase entregada por el usuario.
			- Si un índice de la frase es un espacio, devolverá un espacio en la variable que contenga los índices cifrados,
			- Si no hay espacios en la frase, se continua con lo siguiente.
			- Creo una variable *letters* en la que se codifica a ASCII los índices de cada una de las letras de la frase, entregada por el usuario.
			- La variable *letters* ahora cifra los índices mediante la fórmula del cifrado de César.
			- La variable *letter* ahora transforma los índices cifrados a letras.
		- Retorna una alerta al usuario mostrándole su frase cifrada.

+ Función **decipher**: *Esta función cifrará la frase entregada por el usuario*

	- Creo una variable tipo string vacía, que luego recibirá los índices descifrados.
		- Inicio un ciclo *for* para recorrer la frase entregada por el usuario
			- Si un índice de la frase es un espacio, devolverá un espacio en la variable que contenga los índices descifrados,
			- Si no hay espacios en la frase, se continua con lo siguiente.
			- Creo una variable *letters* en la que se codifica a ASCII los índices de cada una de las letras de la frase entregada por el usuario.
			- La variable *letters* ahora descifra los índices mediante la fórmula del descifrado de César.
			- La variable *letter* ahora transforma los índices descifrados a letras.
		- Retorna una alerta al usuario mostrándole su frase descifrada.

+ Función **start**: *Esta función facilitará el flujo del código mediante opciones que elija el usuario*

	- Creo una variable que recibirá mediante un prompt la opción que decida el usuario: 1, si quiere cifrar; 2, si quiere descifrar; y 3, si quiere salir del menú ~~(ya que creé un loop...)~~.
	- Creo un bucle con distintas condiciones, dependientes de la opción que ingrese el usuario
		- Si la respuesta ingresada es 1, se ejecutará la función **cipher**,
		- Si la respuesta ingresada es 2, se ejecutará la función **decipher**,
		- Si la respuesta ingresada es 3, se saldrá del menú,
		- Si la respuesta no concuerda con ninguna de las opciones, aparece una alerta al usuario pidiéndole que ingrese una opción válida.
	- Mientras la respuesta ingresada no sea igual a las opciones o no se ingrese nada, se repetirá el bucle pidiendo una opción.


##### Este archivo es la versión `0.0.1`




