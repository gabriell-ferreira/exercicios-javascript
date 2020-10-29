let btn = document.querySelector('#impar_par');

btn.addEventListener('click', () => {
  let num = Number(document.querySelector('#num').value);

  impar_par(num);
})

function impar_par(num){
  let res = document.querySelector('#res');

  if (num % 2 === 0){
    return res.innerHTML = 'par'
  } else {
    return res.innerHTML = 'ímpar'
  }
}