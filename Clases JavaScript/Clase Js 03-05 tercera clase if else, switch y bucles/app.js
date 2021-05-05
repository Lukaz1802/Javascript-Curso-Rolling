//Estructura de control

//If.. else


// si se cúmple la condición
//        entónces realizar la acción 
// si no se cúmple la condición 
//         entónces hacer otra cosa

// let num=10
// if( num % 2 ===0  ){   //Si se cumple la condición
//     //accion
//     console.log(`El número es par`);
// }else{               //Si no se cumple la condición
//     //otra accion
//     console.warn(`El número no es par`);
// }

// let num = parseInt(prompt('Ingrese un numero'))

// if (isNaN(num)) {
//     console.error('Ingrese un número');
// }

// else {
//     if(num==10){
//         console.log('El número es igual a 10');
//     }else if(num > 10) {
//         console.log('El número es mayor que 10');
//     }else if (num !==10) {
//         console.log((`El valor ${num} es distinto de 10`));
//     }
//     else {
//         console.log('El número es menor que 10');
//     }
// }

//fiesta
//Solo puede entrar un mayor de edad osea edad <= 18
//Si no es mayor de edad entonces debe ir acompañado de un tutor
 let edad = 15
 let tutor = false


//  if(edad >=18){
//      console.log('Bienvenido a la JODA!!!')
//  }else if(tutor===true){
//      console.log('Bienvenidos a la JODA!! no se separe de su tutor');
//  }
//  else{
//      console.log('Salga de aquí, ústed no puede disfrutar de la vida')
//  }


// && = and (condicion "tambien")
// || = or (condicion "o")

 if(edad<18 && tutor==false){
     console.error('Salga de aquí, ústed no puede disfrutar de la vida')
 }else if(edad>=18 || tutor===true){
     console.log('Bienvenido a la JODA!!')
 }