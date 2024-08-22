
function enviarFormulario() {
    alert("Enviado")

    //Capturar os valores e criar variavel para o objeto JSON
    var cadastroCliente = new Object();

    cadastroCliente.primeiroNome = document.getElementById('primeiroNome').value;
    cadastroCliente.sobrenome = document.getElementById('sobrenome').value;
    cadastroCliente.email = document.getElementById('email').value;
    cadastroCliente.cpf = document.getElementById('cpf').value;
    cadastroCliente.numeroCartao = document.getElementById('cartao').value;
    cadastroCliente.dataDoCartao = document.getElementById('datacartao').value;
    cadastroCliente.cvv = document.getElementById('cvv').value;
    cadastroCliente.parcelas = document.getElementById('parcelas').value;

    //Converter para STRING JSON
    var myJSON = JSON.stringify(cadastroCliente)

    console.log(myJSON)
    console.log(cadastroCliente.valueOf())

}