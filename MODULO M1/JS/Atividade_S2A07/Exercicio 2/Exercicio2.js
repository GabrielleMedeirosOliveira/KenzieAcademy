// Hora de incrementar um pouco!
// Declare, uma variável chamada 'primeiroNome'
// E também uma variável chamada 'ultimoNome'
// Atribua o seu primeiro e último nome às respectivas variáveis
// Descomente a linha 10

let primeiroNome = "Gabrielle";
let ultimoNome = "Oliveira";

alert('Meu nome completo é: ' + primeiroNome + ' ' + ultimoNome);


if (primeiroNome !== undefined && ultimoNome !== undefined) {
  const mensagemTag = document.getElementById('mensagem');
  const mensagem = "Muito bem, " + primeiroNome + " " + ultimoNome + "! Você acertou!";
  mensagemTag.innerText = mensagem;
  mensagemTag.classList.remove('hidden');
}