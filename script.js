const form = document.querySelector(".contactoConteiner");
const mensaje = document.querySelector(".mensajeEnviado");
const btn = document.querySelector(".buttonSubmit")
const input = document.querySelector("html")

btn.addEventListener('click', function enviarForm(evento){
    evento.preventDefault()
    form.style.display = 'none';
    mensaje.style.display = 'flex';  
})

function dark_mode(){
    input.classList.toggle('darkMode')
}

