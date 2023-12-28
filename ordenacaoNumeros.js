
var lista = [10,1, 5, 9, 8, 12, 15];

let listaOrdenada = lista.sort(); // [1, 10, 12, 15, 5, 8, 9]
console.log(listaOrdenada);

// Implementando o sort() usando uma função de comapração 


function comparaNumeros(a,b) { 
    if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; 
} // Se for 0 -> são iguais, se -1 -> o primeiro é menor, se 1 o segundo é menor


let funcaoOrdenar = lista.sort(comparaNumeros); // [1, 5, 8, 9, 10, 12, 15]
console.log(funcaoOrdenar);

// simplicifcando a função com arrow functions
console.log(lista.sort((a, b) => a - b)); // [1, 5, 8, 9, 10, 12, 15] 
