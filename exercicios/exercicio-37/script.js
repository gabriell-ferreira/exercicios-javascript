let btn = document.querySelector('#btn');
let text = document.querySelector('#texto')
let ul = document.querySelector('#lista');
let array = [];

btn.addEventListener('click', () => {
  array.push(text.value);

  ul.innerHTML += `<li>${text.value}</li>`
  
  console.log(array)
})

