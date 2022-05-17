// Creamos la funcion que tenga un paramentro, y este va a ser la cadena de texto que se va a revertir
function cadena(cdn){
  // Crearemos una variable para guardar el string 
    let myMessage = "";
//Crearemos un bucle, que va a iterar sobre el parametro de entrada de la funcion 
    for(let i = cdn.lenght - 1;i >= 0; i--){
myMessage = myMessage + cnd.charAt(i);
    }
//Retornaremos el mensaje guardado en la variable
    return myMessage;
}
//Mostraremos en la consola el string
console.log(cadena("w3resource"));