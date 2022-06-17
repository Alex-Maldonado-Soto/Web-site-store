const nombre = document.getElementById("name")
const textForm = document.getElementById("text")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido es muy corto <br>`
        entrar = true
    }

    console.log(regexEmail.test(email.value))

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(textForm.value.length < 3){
        warnings += `El texto es muy corto<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = `Enviado`
    }

})