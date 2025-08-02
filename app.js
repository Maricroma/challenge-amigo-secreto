let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const amigo = input.value.trim();
    if (amigo) {
        amigos.push(amigo);
        input.value = "";
        input.focus();
        actualizarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    amigos = [];
    actualizarAmigos();
}