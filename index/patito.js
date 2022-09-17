


const h1 =document.querySelector('h1');
const p =document.querySelector('p');
const parrafito =document.querySelector('parrafito');
const pid =document.querySelector('pid');
const placeholder =document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    placeholder,
    
});
h1.innerHTML='patito <br> feo'; //cambai el tittulo desde js
//h1.innerText= 'Patito <br> feo';//pone un texto
console.log(h1.getAttribute('class')); //cambio en la classe
h1.setAttribute('class', 'rojo'); //cambia la clases de h1 si tiene


//agregar clases
//h1.classList.add('rojo');
//quita la clase
//h1.classList.remove('verder');

//input.value='456';
//crear un elemento
const img= document.createElement('img');//para que se vea
img.setAttribute('src', 'https://image.shutterstock.com/image-illustration/colorful-aura-meditation-concept-illustration-260nw-1926486164.jpg');
console.log(img);


//pid.innerHTML="";//borra el texto
pid.append(img);