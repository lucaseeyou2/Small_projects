// Declare elements that are often repeated. 
const dc = document;
let ma = Math;
let count = 0;
let cn = console;
// Set an interval of 1 ms for the color gradient to refresh
setInterval(() => {
  
  // Get the values of color from the two color inputs color_1 and color_2 
  let a = dc.getElementById("color_1").value;
  let b = dc.getElementById("color_2").value;
  
  // Get the view, rotation angle value and span.
  let c = dc.getElementById("view");
  let d = dc.getElementById("rotation").value;
  let e = dc.getElementById("rot_v");

  // To precise the degrees, innerHTML the value in the span
  e.innerHTML = d;

  // Create the gradient from the two color input's values
  c.style.background = `linear-gradient(${d}deg, ${a},${b})`;
}, 1);

  // Get the button that creates the random color
let a = dc.getElementById("random");

  // Log to the console the title of the precised colors 
cn.log("If you need to see what you have generated :");

  // Onclick, add the random color 
a.onclick = () => {

  // Getting the same color inputs
  let b = dc.getElementById("color_1");
  let c = dc.getElementById("color_2");
  // Get the rotation 
  let r = dc.getElementById("rotation");
  
  // Color 1, for the 1st element of the gradient 
  let c_1 = "#" + ma.floor(ma.random()*16777215).toString(16);
  // Color 2, for the 2nd element of the gradient
  let c_2 = "#" + ma.floor(ma.random()*16777215).toString(16);
  
  // Push the color values to be the current ones
  b.value = c_1;
  c.value = c_2;

  // Get a random rotation value ranging from 1 to 360, a minimum of 1 degree possible
  r.value = Math.random() * (360 - 1) + 1;
  // Log the current gradient to the console and to see when reconsulting the document
  // console.log(`Random : ${c_1},${c_2} | rotation : ${r.value}° `);
  cn.log(count +=1)
  cn.log(`%c${c_1}`, `color:${c_1}; font-size:20px;`)
  cn.log(`%c${c_2}`, `color:${c_2}; font-size:20px;`)
  cn.log(`%c${r.value}°`, `font-size:20px`);
};
// key-bindings for rapid generation 
window.addEventListener("keydown", e =>{
  if(e.code = "KeyR"){
    dc.getElementById("random").click();
  }
})
