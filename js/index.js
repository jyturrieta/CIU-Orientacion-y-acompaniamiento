var enviarBoton = document.getElementById("enviar");
var usuarioInput = document.getElementById("usuario");
var passwordInput = document.getElementById("password")

enviarBoton.addEventListener('click', function(e){
    if(usuarioInput.value.length != 8){
        alert("El usuario debe tener 8 digitos");
    }
    else if(passwordInput.value.length < 6){
        alert("La password debe tener 6 o mas caracteres");
        }
    else{
        e.preventDefault()
        localStorage.setItem("nombre", usuarioInput.value)
        window.location.href = 'home.html'
    }  
});