let div = document.querySelector('#num');
let num = 5

let intervalo = setInterval(contador, 1000);

function contador() {
  div.innerHTML = num -= 1

  if (num === 0){
    clearInterval(intervalo)
  }
}
