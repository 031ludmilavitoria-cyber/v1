// Pega usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

// Verifica se existe
if (usuarioLogado.admin === true) {
    if (usuarioLogado.masculino === true) {
        document.getElementById('nome-logado').innerText = "Dr. " + usuarioLogado.nome;
        document.getElementById('welcome').innerText = `Bem-vindo, Dr. ${usuarioLogado.nome}!`;
    }
    else {
        document.getElementById('nome-logado').innerText = "Dra. " + usuarioLogado.nome;
        document.getElementById('welcome').innerText = `Bem-vinda, Dra. ${usuarioLogado.nome}!`;
    }
} else {
    if (usuarioLogado.masculino === true) {
        document.getElementById('nome-logado').innerText = usuarioLogado.nome;
        document.getElementById('welcome').innerText = `Bem-vindo, ${usuarioLogado.nome}!`;
    }
    else {
        document.getElementById('nome-logado').innerText = usuarioLogado.nome;
        document.getElementById('welcome').innerText = `Bem-vinda, ${usuarioLogado.nome}!`;
    }
}
