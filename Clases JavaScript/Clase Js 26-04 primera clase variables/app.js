
//Variable
//Es un espacio de memoria donde guardo datos.

var nombre = 'Eugenio';

let apellido = 'Perez';
const pi = 3.14;

// Tipos de datos

//String
let cliente = 'Frabizio'  //textos

//Number
let numero1 = 34 //numeros. Sin comillas.
let numero2 = 67.25 //valores numericos con decimales van con un punto.
let numero3 = -24 

//Boolean
let comprar = true //datos verdaderos (true) o falsas (false).
let comer = false 

//null
let billetera = null //es un valor que no tiene nada pero puede cambiar su valor.

//Undefined
let caja;

//Array
let arreglo = ['Pablo',689,true,false] //es un valor que puede tener dintintos valores juntos.

//Object
let persona = {
    nombre:'Jose',
    apellido:'Mandarino',
    edad: 33,

};

//Operadores:

//Aritmeticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 + numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2; //Para calcular el resto de una division.

//Unitarios
++numero1; //Crece el valor del numero en 1.
--numero1; //Decrece el valor en 1.

//Relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("Hola mundo");

console.log("El resultado de la suma es " + suma);


//Negacion
let verdadero = true;
console.log(!verdadero);

let valor = prompt('ingrese su nombre');

let edad = prompt('Ingrese su edad');