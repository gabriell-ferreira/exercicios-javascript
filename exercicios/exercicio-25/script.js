let res = document.querySelector('#resultado');

for(let i = 1; i <= 20; i++){
  if (i % 2 == 0){
    res.innerHTML += i + '<br>'
  }
}