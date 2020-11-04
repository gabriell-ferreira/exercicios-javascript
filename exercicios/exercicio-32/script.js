let comidas = ['pao', 'chocolate', 'lasanha'];

function useFor() {
  document.write('----- FOR ----- <br>');

  for(let i = 0; i < 3; i++){
    document.write(comidas[i] + '<br>');
  }

  document.write('<br>')
}

function useForEach() {
  document.write('----- FOR EACH ----- <br>');

  comidas.forEach(comida => {
    document.write(comida + '<br>')
  })

  document.write('<br>')
}

function useWhile(){
  document.write('----- WHILE ----- <br>');

  let i = 0;

  while(i < 3){
    document.write(comidas[i] + '<br>')
    i++
  }

  document.write('<br>')
}

function useDoWhile(){
  document.write('----- DO WHILE ----- <br>');
  let i = 0;
  do {
    document.write(comidas[i] + '<br>');
    i++;

  } while(i < 3); 

  document.write('<br>')
}

useFor();
useForEach();
useWhile();
useDoWhile();