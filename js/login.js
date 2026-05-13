function login() {

    // Pegando valores do HTML
    const email = document.getElementById("txt-email").value;
    const senha = document.getElementById("txt-senha").value;

    // Busca usuários salvos
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura usuário
    const usuario = usuarios.find(usuario =>
        usuario.email === email &&
        usuario.senha === senha
    );

    // Verifica login
    if (usuario) {

        // Salva sessão
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

        // Verifica se é admin
        if (usuario.admin === true) {

            // página admin
            window.location.href = "telainicialbio.html";
            alert("Login Dr");

        } else {

            // página comum
            window.location.href = "telainicialcliente.html";
            
            alert("Login Cliente");
        }

    } else {
        alert("Email ou senha incorretos");
    }
}