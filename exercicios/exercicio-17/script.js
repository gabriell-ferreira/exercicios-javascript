let btn = document.querySelector('#valor');

btn.addEventListener('click', () => {
  let desconto = Number(document.querySelector('#desconto').value);

  verDesconto(desconto);
})

function verDesconto(desconto) {
  let res = document.querySelector('#res');

  return res.value = (5 / 100) * desconto + ' reais'
}