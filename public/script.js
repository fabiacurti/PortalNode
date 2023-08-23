//Máscaras 
function mCPF() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
}
function mCNPJ() {
    var cnpj = event.target.value;
    cnpj = cnpj.replace(/\D/g, '');
    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
    event.target.value = cnpj;
}

function mTel() { // máscara para telefone fixo
    var tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
}
function mCel() { // máscara para celular 
    var tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length == 13) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
}

function mCEP() {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
    event.target.value = cep;
}

//Validações 

function validaDocumento() {
    var inputElement = document.querySelector("#imgDoc");
    var arquivo = inputElement.files[0];
    var red = true;

    if (!arquivo) {
        inputElement.value = "";
        inputElement.style.border = "solid 2px red";
        red = false;
    }

    return red;

}

function validaContrato() {
    var inputElement = document.querySelector("#imgContrato");
    var arquivo = inputElement.files[0];
    var red = true;

    if (!arquivo) {
        inputElement.value = "";
        inputElement.style.border = "solid 2px red";
        red = false;
    }

    return red;

}

function validar() {
    //campos à serem validados
    var nome = document.querySelector("#nome");
    var email = document.querySelector("#email");
    var cnpj = document.querySelector("#cnpj")
    var mensagem = document.querySelector("#mensagem");
    var red = true;
    //validar nome
    if (nome.value.length < 8) {
        nome.value = "";
        nome.setAttribute('placeholder', 'Insira o nome do Agente!');
        nome.style.border = "solid 2px red";
        red = false;
    }
    //validar CNPJ
    if (!cnpj.value.length != null) {
        cnpj.value = "";
        cnpj.setAttribute('placeholder', "O CNPJ é um campo obrigatório");
        cnpj.style.border = "solid 2px red"
        red = false
    }
    //valida a mensagem
    if (!mensagem.value.length != null) {
        mensagem.value = "";
        mensagem.setAttribute('placwholder', 'Por gentileza, preencher falando um pouco sobre você!');
        mensagem.style.border = "solid 2px red";
        red = false
    }
    //validar email
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        email.value = "";
        email.setAttribute('placeholder', 'Insira um email correto!');
        email.style.border = "solid 2px red";
        red = false;
    }

    return red;
}

function validatePassword() {
    var password = document.getElementById("passaport"), confirm_password = document.getElementById("confirmPassaport");
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    }
    else {
        confirm_password.setCustomValidity('');
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
}

function passaword() {
    var password = document.getElementById("passaport"), confirm_password = document.getElementById("confirmPassaport");
    if (password.value != confirm_password.value) {
        confirm_password.setAttribute('placeholder', "Senhas diferentes!");
    }
    else {
        confirm_password.setAttribute('');
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
}

