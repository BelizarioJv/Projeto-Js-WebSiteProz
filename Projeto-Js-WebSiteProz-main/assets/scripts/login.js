// Seleciona os botões e a área onde o formulário será exibido
const getInStudent = document.getElementById("entrar");
const registerStudent = document.getElementById("registrar");
const rightSide = document.getElementById("right-side");

// FORMULÁRIO DE LOGIN

function getInUser() {
    getInStudent.addEventListener('click', () => {
        rightSide.innerHTML = "";

        const form = document.createElement("form");
        form.method = "POST";
        form.action = "cadastro.php";

        const labelEmail = document.createElement("label");
        labelEmail.textContent = "Email:";
        labelEmail.setAttribute("for", "email");

        const inputEmail = document.createElement("input");
        inputEmail.type = "email";
        inputEmail.name = "emailStudent";
        inputEmail.id = "email";
        inputEmail.placeholder = "Digite seu e-mail";

        const labelSenha = document.createElement("label");
        labelSenha.textContent = "Senha:";
        labelSenha.setAttribute("for", "password");

        const inputSenha = document.createElement("input");
        inputSenha.type = "password";
        inputSenha.name = "passwordStudent";
        inputSenha.id = "password";
        inputSenha.placeholder = "Digite sua senha";

        const btnSubmit = document.createElement("button");
        btnSubmit.type = "submit";
        btnSubmit.textContent = "Entrar";

        form.append(
            labelEmail, inputEmail, document.createElement("br"),
            labelSenha, inputSenha, document.createElement("br"),
            btnSubmit
        );

        rightSide.append(form);
    });
}


// FORMULÁRIO DE REGISTRO

function registerUser() {
    registerStudent.addEventListener('click', () => {
        rightSide.innerHTML = "";

        const form = document.createElement("form");
        form.method = "POST";
        form.action = "cadastro.php";

        const labelEmail = document.createElement("label");
        labelEmail.textContent = "Email:";
        labelEmail.setAttribute("for", "email");

        const inputEmail = document.createElement("input");
        inputEmail.type = "email";
        inputEmail.name = "emailStudent";
        inputEmail.id = "email";
        inputEmail.placeholder = "Digite seu e-mail";

        const labelSenha = document.createElement("label");
        labelSenha.textContent = "Senha:";
        labelSenha.setAttribute("for", "password");

        const inputSenha = document.createElement("input");
        inputSenha.type = "password";
        inputSenha.name = "passwordStudent";
        inputSenha.id = "password";
        inputSenha.placeholder = "Digite sua senha";

        const labelConfirm = document.createElement("label");
        labelConfirm.textContent = "Confirmar senha:";
        labelConfirm.setAttribute("for", "confirm");

        const inputConfirm = document.createElement("input");
        inputConfirm.type = "password";
        inputConfirm.name = "confirmPassword";
        inputConfirm.id = "confirm";
        inputConfirm.placeholder = "Confirme sua senha";

        const btnSubmit = document.createElement("button");
        btnSubmit.type = "submit";
        btnSubmit.textContent = "Registrar";

        form.append(
            labelEmail, inputEmail, document.createElement("br"),
            labelSenha, inputSenha, document.createElement("br"),
            labelConfirm, inputConfirm, document.createElement("br"),
            btnSubmit
        );

        rightSide.appendChild(form);
    });
}

// Inicializa os eventos
getInUser();
registerUser();
