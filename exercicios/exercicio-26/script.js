let res = document.querySelector('#resultado');

let tabuada = '<table align=center>'

for(let i = 1; i <= 10; i++){
  tabuada +=  "<tr><td>"
  for(let c = 1; c <= 10; c++){
    tabuada += `${i} x ${c} = ${i * c} <br>`
  }
  tabuada += '<br>'
}

tabuada += '</table>'
res.innerHTML = tabuada
