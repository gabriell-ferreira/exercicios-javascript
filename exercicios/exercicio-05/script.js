let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let nome = document.querySelector('#nome').value;

  let numLetras = nome.length;
  
  alert(`seu nome possui ${numLetras} letras`);
})

