let nombre = 'Eugenio'
let apellido = 'Gonzalez'
let frase= '    Bienvenidos a la clase    '

//concatenar texto
console.log(nombre,apellido);
console.log(nombre+' '+apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los String

console.log(nombre.toUpperCase()); //Mostrar el texto en MAYUSCULAS.
console.log(nombre.toLowerCase()); //Mostrar el texto en minuscula.
console.log(apellido.length); //Mostrar la cantidad de caracteres(tambien espacios en blanco).
console.log(apellido.charAt(3)); //Mostrar la posicion de un caracter(empieza a contar desde 0)
console.log(nombre.charAt(nombre.length - 1)); //Mostrar el último caracter.
console.log(apellido.substr(0,3)); //Mostrar los caracteres desde una posicion. (En este caso desde la posicion 0 hasta la 3).
console.log(frase.trim()) //Mostrar caracteres ignorando espacios.

frase = frase.trim() //Elimina espacios iniciales en blanco.

console.log(apellido.charAt(apellido.length - 1));
