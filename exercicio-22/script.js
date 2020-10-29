let frases = ['repetição']
let div = document.querySelector('#resultado');

frases.forEach((frase, i) => {
  for(i = 1; i <= 5; i++){
    div.innerHTML += i + ' - ' + frase + '<br>'
  }
})