let btn = document.querySelector("#btn");
let res = document.querySelector("#res");

btn.addEventListener('click', () => {
  let ano = Number(document.querySelector('#ano').value);

  if (2020 - ano < 18){
    return res.value = 'menor de idade'
  } else {
    return res.value = 'maior de idade'
  }
})