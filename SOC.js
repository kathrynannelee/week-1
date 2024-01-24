const inputBox = document.createElement('input');
inputBox.type = 'text';
inputBox.id = 'inputBox';


const myCanvas = document.createElement('canvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

document.body.appendChild(myCanvas);