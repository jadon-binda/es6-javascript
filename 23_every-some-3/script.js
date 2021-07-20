// Exemplo prático do uso de EVERY

// funcao Field, que funciona com uma especie de classe construtora
// ela recebe como argumento o valor de uma variavel e atribui a ela atraves do comando this
// no nosso caso, a variavel recebida sera um campo de formulario
function Field(value) {
    this.value = value;
}

// funcao para verificar se o valor da variavel não esta em branco
// no nosso caso, valida se o campo digitado pelo usuario nao esta em branco
Field.prototype.validate = function() {
    return this.value.length > 0;
}

// criacao de novas variaveis utilizando a funcao Field para atribuir os valores, atraves do comando new
// no nosso caso, esta parte simula a entrada de dados pelo usuário
var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('21/05/1986');

/* SOLUÇÃO 1 */
// usando a funcao validate para verificar se as novas variaveis (ou os novos campos) não estao em branco, possuem conteudo
// o resultado, que é um valor booleano (true/false) eh atribuido a variavel validateForField
var validateForField = username.validate() && password.validate() && birthdate.validate();
console.log(validateForField);

// criacao de um array para armazenar as variaveis (os campos do formulario)
var fields = [username, password, birthdate];

/* SOLUÇÃO 2 */
// usando o helper EVERY para verificar se as novas variaveis (ou os novos campos) não estao em branco, possuem conteudo
// o resultado, que é um valor booleano (true/false) eh atribuido a variavel formIsValid
var formIsValid = fields.every(function(field) {
    return field.validate();
});

/*  
criacao de uma logica usando o valor boooleno recebido pela variavel formIsValid para permitir o envio das
informacoes preenchidas pelo usuario ou nega-lo emitindo uma mensagem de erro
 */
if(formIsValid) {
    console.log('Allow user to submit!');
} else {
    console.log('Deny user and show an error message.');
}