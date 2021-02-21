// Declare elements that are often repeated. 
let doc = document;
let ma = Math;

setInterval(() => {
  
  // Get the values of color from the two color inputs color_1 and color_2 
  let a = doc.getElementById("color_1").value;
  let b = doc.getElementById("color_2").value;
  
  // Get the view, rotation angle value and span.
  let c = doc.getElementById("view");
  let d = doc.getElementById("rotation").value;
  let e = doc.getElementById("rot_v");
  
  // To precise the degrees, innerHTML the value in the span
  e.innerHTML = d;

  // Create the gradient from the two color input's values
  c.style.background = `linear-gradient(${d}deg, ${a},${b})`;
}, 16);

  // Get the button that creates the random color
let a = document.getElementById("random");

  // Log to the console the title of the precised colors 
console.log("If you need to see what you have generated :");


  // Onclick, add the random color 
a.onclick = () => {

  // Getting the same color inputs
  let b = doc.getElementById("color_1");
  let c = doc.getElementById("color_2");
  // Get the rotation 
  let r = doc.getElementById("rotation");

  // Create 12 arrays containing the possible Hex caracters to use to represent a color
  let d = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let e = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let f = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let g = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let h = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let i = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let j = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let k = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let l = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let m = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let n = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  let o = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
  
  // Color 1, for the 1st element of the gradient 
  let c_1 =
    "#" +
    (d[ma.floor(ma.random() * d.length)] +
      e[ma.floor(ma.random() * e.length)] +
      f[ma.floor(ma.random() * f.length)] +
      g[ma.floor(ma.random() * g.length)] +
      h[ma.floor(ma.random() * h.length)] +
      i[ma.floor(ma.random() * i.length)]);
  // Color 2, for the 2nd element of the gradient
  let c_2 =
    "#" +
    (j[ma.floor(ma.random() * j.length)] +
      k[ma.floor(ma.random() * k.length)] +
      l[ma.floor(ma.random() * l.length)] +
      m[ma.floor(ma.random() * m.length)] +
      n[ma.floor(ma.random() * n.length)] +
      o[ma.floor(ma.random() * o.length)]);
  
  // Push the color values to be the current ones
  b.value = c_1;
  c.value = c_2;

  // Get a random rotation value ranging from 1 to 360, a minimum of 1 possible
  r.value = Math.random() * (360 - 1) + 1;

  // Log the current gradient and to see when reconsulting the document
  console.log(`Random : ${c_1},${c_2} | rotation : ${r.value}°`);
};
