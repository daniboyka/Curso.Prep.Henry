// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
 return (Object.entries(objeto))
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let caracter = {};

  for(let i = 0; i < string.length; i++){
    if(!caracter[string[i]]){
      caracter[string[i]] = 0;
    }  
    caracter[string[i]] += 1;
  }
  return caracter;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = ""
  var minusculas = ""
  for (var i = 0; i < s.length; i++){
  if(s[i]===s[i].toUpperCase()) {
     mayuscula +=  s[i] 
  }
  if (s[i] === s[i].toLowerCase ())
  {  minusculas +=  s[i]}

var total = mayuscula + minusculas

}
return total
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   
 
  var espejo = "";

  for (let i = str.length -1; i >= 0; i--){
    espejo = espejo + str[i]
   
   var toto = espejo.split(" ").reverse().join(" ")
  }
  return toto
  }
  
  
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var invertir = 0;
   invertir = Number(numero.toString().split("").reverse().join(""))
 if(numero === invertir){
   return "Es capicua"
 } else {
   return "No es capicua"
 }

/* let invertido = 0;
var numero1 = numero
  while(numero >0){
    invertido = invertido * 10;
    invertido = invertido + (numero % 10);
    numero = parseInt(numero / 10)
  if(invertido === numero){
    return "Es capicua"
  }else {
    "No es capicua"
  }
  }*/

  }
 /*for (let i= 0; i < numero.length; i++){
    if(hola === convertAndReverse) {
     return "Es capicua"
    } 
    if (!hola === convertAndReverse){
      return "No es capicua"
    }    
   }*/
 

  /*var reversa = numero.split("").reverse().join("");
if (reversa === numero) {
  return "Es capicua"
} else {
  return "No es capicua"
}*/

  /*if(reverse(numero) === numero) {
  return "Es capicua"
} else {
  return "No es capicua"
}*/
/*
}
if (rev === numero) {
  return "Es capicua"
} else {
  return "No es capicua"
}*/



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
// return cadena.replace(/"a"|"b"|"c"/g," ")

  var removeData=cadena.replace("a", "");
  var removeData2=removeData.replace("b", "");
  var removeData3= removeData2.replace("c", "");
      return removeData3

} 


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b){return a.length - b.length});
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var nvarray = [];  
  var arr1 = arreglo1.length;
  var arr2 = arreglo2.length;
  
  for (i = 0; i < arreglo1.length; i++) {
      for (j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j]) {
           nvarray.push(arreglo2[j]);
      }
  }
}
  return nvarray        
  
}

/*
  var nuevarray = []
  var vacio = []
  var array1 = arreglo1.map(i) =>  if (arreglo2.includes(array1[i])) 
  { nuevarray.push(array1[i])
      return nuevarray  }
  else {
    return vacio;
  }
  */

//}

/*  var nuevarray = []
var vacio = []
var array1 = arreglo1.map(function(){
})
var array2 = arreglo2.map(function(){
})
if(array1 === array2){
  nuevarray.push(array2)
  return nuevarray
} if(!array1 === array2) {
  return vacio
}
return nuevarray*/





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

