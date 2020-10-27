 let btn = document.querySelector('#btn')

 btn.addEventListener('click', () => {
  const nome = document.querySelector('#nome').value;

  alert('o nome completo é: ' + nome)
})