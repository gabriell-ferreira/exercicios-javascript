let comidas = ['pao', 'chocolate', 'lasanha'];

comidas.map(comida => {
  document.write(comida + '<br>')
})

comidas.push('arroz', 'feijão', 'pizza');
document.write('<br><br>');

comidas.map(comida => {
  document.write(comida + '<br>')
})