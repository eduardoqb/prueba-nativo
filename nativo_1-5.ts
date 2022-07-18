//Dada una lista de números enteros, ordene e imprima la lista de menor a mayor.

//Inicializa un array de tipo number con una lista de números
var numeros: number[] = [15, 10, 2, 31, 1000, 5, 1, 2];

//Itera sobre cada elemento del array numeros
for (var i = 0; i < numeros.length; i++) {

    //Itera sobre cada elemento del array numeros, comenzando por primera vez una posición antes del final del array.
    //En cada iteración del bucle externo, se resta una posición al numero de posiciones sobre las que itera el bluce interno
    for (var j = 0; j < (numeros.length - i - 1); j++) {

        //Si el número en la posición actual mas uno es menor que el de la posición actual, se intercambian de posición
        //moviendo el número mas grande hacia la derecha de array
        if (numeros[j + 1] < numeros[j]) {
            var menor = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = menor;
        }
    }
}
//Imprime los valores de "numeros"
console.log(numeros);