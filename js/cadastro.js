<<<<<<< HEAD
function cadastrar() {

    // Inputs
    const nome = document.getElementById("txt-nome").value;
    const email = document.getElementById("txt-email").value;
    const data = document.getElementById("txt-data").value;
    const senha = document.getElementById("txt-senha").value;
    const confirmaSenha = document.getElementById("txt-confirma").value;

    // CheckBox
    const masculino = document.getElementById("check-masculino").checked;
    const feminino = document.getElementById("check-feminino").checked;
    const admin = document.getElementById("check-admin").checked;

    // Label erro
    const lblError = document.getElementById("lbl-error");

    // Verificação campos
    if (
        nome === "" ||
        email === "" ||
        data === "" ||
        senha === ""
    ) {
        lblError.innerText = "Preencha todos os campos";
        return;
    }

    // Busca usuários
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica email
    const usuarioExiste = usuarios.find(usuario =>
        usuario.email === email
    );

    if (usuarioExiste) {

        lblError.innerText = "Email já cadastrado";
        return;
    }

    // Verifica senha
    if (confirmaSenha != senha) {

        lblError.innerText = "As senhas não coincidem";
        return;
    }

    // VERIFICA ADMIN
    if (admin === true) {

        // pede senha admin
        const senhaAdmin = prompt("Digite a senha de administrador");

        // senha correta
        const senhaCorreta = "admin123";

        // verifica
        if (senhaAdmin !== senhaCorreta) {

            lblError.innerText = "Senha de administrador incorreta";

            return;
        }
    }

    // Limpa erro
    lblError.innerText = "";

    // Cria objeto
    const novoUsuario = {

        nome: nome,

        email: email,

        dataNascimento: data,

        senha: senha,

        masculino: masculino,

        feminino: feminino,

        admin: admin
    };

    // Adiciona
    usuarios.push(novoUsuario);

    // Salva
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    console.log(usuarios);

    alert("Cadastro realizado");

    // Vai para login
    window.location.href = "login.html";
=======
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
>>>>>>> bb4b2f2fb55fb8aa8e289dc92168f4d7c3bc3be4
}