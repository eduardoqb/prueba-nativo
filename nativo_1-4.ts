//Dada una lista de números enteros, imprima cuál es la suma de los números al cuadrado.

//Inicializa un array de tipo number con una lista de números
var numeros: number[] = [15, 10, 2, 31, 1000, 5, 1, 2];

//Inicializa una variable de tipo number con el valor 0
var suma: number = 0;

//Itera sobre cada elemento del array numeros
numeros.forEach((numero) => {

    //Suma el valor de "numero" a la variable "suma"
    suma += numero;
});

//Imprime el valor de "suma"
console.log(suma);