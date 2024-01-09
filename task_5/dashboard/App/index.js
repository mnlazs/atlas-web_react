import './style.css'; // Importa un archivo CSS si lo necesitas
import myImage from './image.png'; // Importa una imagen si la necesitas

function component() {
  const element = document.createElement('div');

  // Agrega algo de texto a nuestro elemento
  element.innerHTML = '¡Hola, webpack!';
  element.classList.add('hello');

  // Agrega la imagen a nuestro elemento
  const myIcon = new Image();
  myIcon.src = myImage;
  myIcon.classList.add('corner-image');
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
