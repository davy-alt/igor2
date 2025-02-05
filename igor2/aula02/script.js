function Registrar(){
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const nome = document.querySelector ("#nome")
    const nick = document.querySelector ("#nick")

    const emailvalue = document.querySelector("#email").value
    const senhavalue = document.querySelector("#senha").value
    const nomevalue = document.querySelector ("#nome").value
    const nickvalue = document.querySelector ("#nick").value

    if(emailvalue === ""){
        email.classList.add("erro")
    }else{
        email.classList.remove("erro")
    }

    if(senhavalue === ""){
        senha.classList.add("erro")
    }else{
        senha.classList.remove("erro")
    }

    if(nomevalue === ""){
        nome.classList.add("erro")
    }else{
        nome.classList.remove("erro")
    }

    if(nickvalue === ""){
        nick.classList.add("erro")
    }else{
        nick.classList.remove("erro")
    }
}
