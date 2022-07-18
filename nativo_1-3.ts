//Dada una lista de números enteros, imprima cuál es el menor de los números de la lista

//Inicializa un array de tipo number con una lista de números
var numeros: number[] = [15, 10, 2, 31, 1000, 5, 1, 2];

//Inicializa una variable de tipo number con el primer elemento del array numeros
var menor: number = numeros[0];

//Itera sobre cada elemento del array numeros
numeros.forEach((numero) => {

    //Si el número de la variable "numero" es menor que el almacenado en la variable "menor",
    //asigna a la variable "menor" el valor de "numero"
    if (numero < menor) {
        menor = numero;
    }
});

//Imprime el valor de "menor"
console.log(menor);