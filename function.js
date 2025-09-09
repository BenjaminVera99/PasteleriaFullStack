// Validacion de formulario de iniciar sesion
const emailSesion = document.querySelector("#IniciarSesion #email");
const passwordSesion = document.querySelector("#IniciarSesion #password");
const errorSesion = document.getElementById("errorSesion");
const formSesion = document.getElementById("IniciarSesion");


formSesion.addEventListener('submit', function (e) {
    let hayError = false;

    if (!emailSesion.value.includes("@")) {
        emailSesion.classList.add("error");
        errorSesion.innerHTML = "Error, el correo no es válido.";
        hayError = true;
    } else {
        emailSesion.classList.remove("error");
    }

    
    if (passwordSesion.value.length < 1) {
        passwordSesion.classList.add("error");
        errorSesion.innerHTML = "Error, la contraseña no puede estar vacía.";
        hayError = true;
    } else {
        passwordSesion.classList.remove("error");
    }

    if (hayError) {
        e.preventDefault(); 
    } else {
        errorSesion.innerHTML = "&nbsp;";
    }
});



// Validacion de formulario de registro 
const nombresRegistro = document.getElementById("nombresRegistro");
const errorRegistro = document.querySelector("#errorRegistro");
const emailRegistro = document.querySelector("#emailRegistro");
const passwordRegistro1 = document.querySelector("#passwordRegistro1");
const passwordRegistro2 = document.querySelector("#passwordRegistro2");
const formRegistro = document.querySelector("#Registrarse");

// formulario registro
nombresRegistro.addEventListener('keyup', function (e) {
    if (nombresRegistro.value.length < 3) {
        nombresRegistro.classList.add("error");
        errorRegistro.innerHTML = "Error, ingrese al menos 3 caracteres!.";
    } else {
        nombresRegistro.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
})

emailRegistro.addEventListener('keyup', function (e) {
    if (!emailRegistro.value.includes("@")) {
        emailRegistro.classList.add("error");
        errorRegistro.innerHTML = "Error, Debes un incluir un signo arroba @ !.";
    } else {
        emailRegistro.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
})

passwordRegistro1.addEventListener('keyup', (e) => password())
passwordRegistro2.addEventListener('keyup', (e) => password())

function password() {
    if (passwordRegistro2.value != passwordRegistro1.value) {
        passwordRegistro2.classList.add("error");
        errorRegistro.innerHTML = "Error, las contraseñas no coinciden!.";
    } else {
        passwordRegistro2.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
}

formRegistro.addEventListener('submit', function (e) {
    if (nombresRegistro.value.length < 3) {
        nombresRegistro.classList.add("error");
    }
    if (!emailRegistro.value.includes("@")) {
        emailRegistro.classList.add("error");
    }
    if (passwordRegistro2.value != passwordRegistro1.value || passwordRegistro1.value == "") {
        passwordRegistro2.classList.add("error");
    }
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault()
            errorRegistro.innerHTML = "Error, revisa los campos en rojo!!!";
            return;
        }
    })
})

