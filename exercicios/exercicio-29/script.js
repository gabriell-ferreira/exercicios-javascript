let btn = document.querySelector('#btn');
let contador = document.querySelector('#contador');
let acertos = 0;
let erros = 0;

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * 5 + 1);
  let text = Number(document.querySelector('#text').value);

  verificar(random, text);
})

function verificar(num, text){ 
  if(text === num){
    acertos += 1
    contador.innerHTML = `acertos: ${acertos} <br> erros: ${erros}`
  } else {
    erros += 1
    contador.innerHTML = `acertos: ${acertos} <br> erros: ${erros}`
  }
}