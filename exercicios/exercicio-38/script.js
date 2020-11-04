let btn = document.querySelector('#btn');
let text = document.querySelector('#texto')
let ul = document.querySelector('#lista');
let array = [];

btn.addEventListener('click', () => {
  array.push(text.value);

  if(text.value % 2 === 0){
    ul.innerHTML += `<li><b>${text.value} (par)</b></li>`
  } else {
    ul.innerHTML += `<li>${text.value}</li>`
  }
  
  console.log(array)
})

