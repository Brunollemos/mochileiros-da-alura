const form = document.getElementById("novoItem");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(evento);
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
});
