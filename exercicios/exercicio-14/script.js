const btn = document.querySelector("#btn-soma")

btn.addEventListener('click', () => {
  let num1 = Number(document.getElementById('soma1').value)
  let num2 = Number(document.getElementById('soma2').value)
  
  somar(num1, num2);
})

function somar(num1, num2) {
  let resul = document.querySelector('#resultado-soma');

  if (num1 == '' || num2 == ''){
    return resul.value = 0
  } 

  return resul.value = num1 + num2
}
