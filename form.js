const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value.trim();


  if (nombre === "") {
    alert("Por favor ingresa tu nombre completo.");
    return;
  }

  if (!validarCorreo(correo)) {
    alert("El correo electrónico no es válido.");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }


  alert("¡Bienvenido a Lavender Vinilos Store!");
  formRegistro.reset(); 
});



