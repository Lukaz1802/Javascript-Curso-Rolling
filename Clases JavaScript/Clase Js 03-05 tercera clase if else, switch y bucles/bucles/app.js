//bucles

//while

/* 
mientras condicion 
      entonces accion
*/

let vecesSumar=10;
let totalSuma=0
while (vecesSumar>0){

    totalSuma +=1
    vecesSumar -=1
    console.log('totalSuma: ${totalSuma} | vecesSumar: ${vecesSumar}')
  

}



console.log(`Total= ${totalSuma}`)


//-----------------------

let respuesta='HELSINKI';
let acierto=false;
let contador=0

while(contador < 3 && acierto == false){
    let usuario = prompt("Cual es la capital de Finlandia:")
    if(usuario===null){
        console.log("Debe ingresar un valor:")
    }else if(usuario.toUpperCase() === respuesta){
        document.write("Muy bien. Acertaste!")
        acierto = true
    }
contador++
}

if(acierto===false){
    document.write('Lo sentimos no la pegaste. LOSER!')
}