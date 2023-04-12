function getNombre() {
    const nombre = prompt("Por favor ingrese su nombre:");
    document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
  }
  
  function getEmail() {
    const email = prompt("Por favor ingrese su email:");
    document.getElementById("email").innerHTML = "Email: " + email;
  }
  
  function getEdad() {
    const edad = prompt("Por favor ingrese su edad:");
    document.getElementById("edad").innerHTML = "Edad: " + edad;
  }
  