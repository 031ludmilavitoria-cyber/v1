function login() {

    const tipo = document.querySelector(
        'input[name="tipo"]:checked'
    ).value;

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // LOGIN BIOMÉDICO
    if (
        tipo === "biomedico" &&
        email === "bio@teste.com" &&
        senha === "1234"
        
    ) {

        alert("Login de Biomédico realizado!");
        window.location.href = "../html/telaconfigbio.html";
    }

    // LOGIN PACIENTE
    else if (
        tipo === "paciente" &&
        email === "paciente@teste.com" &&
        senha === "1234"
    ) {

        alert("Login de Paciente realizado!");
        window.location.href = "painel-paciente.html";
    }

    else {
        alert("Tipo de usuário ou senha incorretos!");
    }
}