let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let text = document.querySelector('#text').value;

  verificarPalavra(text);
})

function verificarPalavra(text) {
  if (text.includes('dota')){
    alert(true)
  } else {
    alert(false)
  }
}
