//Redondear un numero mas bajo

console.log(Math.floor(45.89));

//Redondear un numero arriba
console.log(Math.round(45.89))

//Obtener el maximo de una lista de numeros
console.log(`El número máximo es: ${ Math.max(56.5,45,90,5)}`);

//Obtener el mínimo
console.log(`El número Mínimo es: ${Math.min(56.5, 45, 90,5, 1000)}`)


//Obtener el entero de un numero
let numero = 67.876533
console.log(numero)
console.log(parseInt(numero))  //convierte un string a numero entero.


let decimal = "456.322445"
console.log(parseFloat(decimal))


//Elevar a la potencia
let base=numero
let exponente=3

console.log(`El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`);

//Calcular raiz cuadrada
console.log(Math.sqrt(64))

//Número aleatorio
console.log(Math.round(Math.random() *100) + 1);

//Obtener número con dos decimales
decimal = parseFloat(decimal)

console.log(Math.round(decimal * 100 / 100));

//toFixed(2)
let decimalString = parseFloat(decimal.toFixed(3))
