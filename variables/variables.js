var nombre="Jazael"
var email="jazaelgalindo.contact@gmail.com"
var edad=19

function getNombre(){
 console.log(nombre);
 var myNameElement = document.getElementByID("nombre");
 myNameElement.innerHTML = nombre;
}

function getEmail(){ 
 console.log(email);
 var myEmailElement = document.getElementByID("email");
 myEmailElement.innerHTML = '<b>' + email + '</b>';
}

function getEdad(){ 
 console.log(edad);
 var myEdadElement = document.getElementByID("edad");
 myEdadElement.innerHTML = '<h1>' + edad + '</h1>';
 myEdadElement.style.color= "#0000FF";
}


