let notaUno = parseInt(prompt("Ingrese la primera nota"));
let notaDos = parseInt(prompt("Ingrese la segunda nota"));
let notaTres = parseInt(prompt("Ingrese la tercera nota"));
let promedio = Math.round(((notaUno + notaDos + notaTres) / 3));


if (typeof(notaUno)!== 'number' || typeof(notaDos)!== 'number' || typeof(notaTres)!== 'number'){
    console.warm("Alguna de las notas ingresadas es inválida");
}

else if (notaUno>10 || notaDos>10 || notaTres>10){
    console.log("Imposible sacar más de 10");
}
else if (notaUno<0 || notaDos<0 || notaTres<0){
    console.log("Imposible sacar menos de 0");

}
else{
    
    if (notaUno>10 || notaDos>10 || notaTres>10){
        console.log("Imposible sacar más de 10");
    }
    else if (notaUno<0 || notaDos<0 || notaTres<0){
        console.log("Imposible sacar menos de 0");
    }
    else{
        console.log("Su promedio es " +  (promedio));
        if(promedio>=6){
        console.log("Estás aprobado");

        }else{
        console.log("Estás desaprobado");
    }
        

}
}
