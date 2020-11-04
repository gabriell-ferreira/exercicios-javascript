let comidas = ['pao', 'chocolate', 'lasanha', 'pizza', 'arroz', 'feijão'];
let ul = document.querySelector('#comidas');

comidas.map(comida => {
  ul.innerHTML += `<li>${comida}</li>`
})