const nombres = document.getElementById("nombres");
const errorRegistro = document.querySelector("#errorRegistro");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const formRegistro = document.querySelector("#Registrarse");

nombres.addEventListener('keyup', function (e) {
    if (nombres.value.length < 3) {
        nombres.classList.add("error");
        errorRegistro.innerHTML = "Error, ingrese al menos 3 caracteres!.";
    } else {
        nombres.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
})

email.addEventListener('keyup', function (e) {
    if (!email.value.includes("@")) {
        email.classList.add("error");
        errorRegistro.innerHTML = "Error, Debes un incluir un signo arroba @ !.";
    } else {
        email.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
})

password1.addEventListener('keyup', (e) => password())
password2.addEventListener('keyup', (e) => password())

function password() {
    if (password2.value != password1.value) {
        password2.classList.add("error");
        errorRegistro.innerHTML = "Error, las contraseñas no coinciden!.";
    } else {
        password2.classList.remove("error");
        errorRegistro.innerHTML = "&nbsp;";
    }
}

formRegistro.addEventListener('submit', function (e) {
    if (nombres.value.length < 3) {
        nombres.classList.add("error");
    }
    if (!email.value.includes("@")) {
        email.classList.add("error");
    }
    if (password2.value != password1.value || password1.value == "") {
        password2.classList.add("error");
    }
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault()
            errorRegistro.innerHTML = "Error, revisa los campos en rojo!.";
            return;
        }
    })
})

