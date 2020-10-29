let img = document.querySelector('#lampada');

// https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true (acesa)
// https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true (apagada)

img.addEventListener('mouseover', () => {
  img.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true'
})

img.addEventListener('mouseout', () => {
  img.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true'
})