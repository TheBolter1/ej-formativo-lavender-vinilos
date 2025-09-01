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


const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const correoLogin = document.getElementById("correoLogin").value.trim();
  const passwordLogin = document.getElementById("passwordLogin").value.trim();

  if (!validarCorreo(correoLogin)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  if (passwordLogin === "") {
    alert("Debes ingresar tu contraseña.");
    return;
  }

  alert(" ¡Bienvenido de nuevo a Lavender Vinilos Store!");
  formLogin.reset();
});


function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}
