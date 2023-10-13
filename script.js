function verificarAcesso() {
    let nome = document.getElementById("nome").value;
    let cargo = document.getElementById("cargo").value;
    let senhaDeAcesso = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado");
  
    if (nome === 'Sheila' && cargo === 'Gerência' && senhaDeAcesso === 'Senha!123#') {
      resultado.textContent = 'Acesso para cadastro e visualização de produtos liberada!';
      resultado.style.color = 'green';
    } else if (nome === 'Jorge' && cargo === 'Vendas') {
      resultado.textContent = 'Acesso para a visualização de produtos liberada!';
      resultado.style.color = 'green';
    } else {
      resultado.textContent = 'Você não possui acesso!';
      resultado.style.color = 'red';
    }
  }
  