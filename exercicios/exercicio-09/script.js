function somar() {
  let num1 = Number(document.getElementById('soma1').value);
  let num2 = Number(document.getElementById('soma2').value)
  let resul = document.querySelector('#resultado-soma');

  if (num1 === NaN || num2 === NaN){
    let soma = num1 + num2;

    resul.value = soma
  } else {
    alert('insira um numero')
  }
}