// Import stylesheets
import './style.css';

// Drawing with Javascript is cool! 
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

background(148, 451, 255); // RGB

var eyeSize = 33; // var eyeSize; eyeSize = 20;

var x = 200;

noStroke();

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(255, 255, 0);
ellipse(x - 50, 208, 300);
ellipse(x + 100, 142, 40, 40);

//mouth 
fill(255, 255, 0);
ellipse(x + 50, 240, 120, 136);

// headband
strokeWeight(77);
Stroke(112,0,242);
line(80, 116, 271, 70);
