let doc = document;
let ma = Math;
setInterval(() => {
  let a = doc.getElementById("color_1").value;
  let b = doc.getElementById("color_2").value;
  let c = doc.getElementById("view");
  let d = doc.getElementById("rotation").value;
  let e = doc.getElementById("rot_v");
  e.innerHTML = d;
  c.style.background = `linear-gradient(${d}deg, ${a},${b})`;
}, 16);

let a = document.getElementById("random");
console.log("If you need to see what you have generated :");

a.onclick = () => {
  let b = doc.getElementById("color_1");
  let c = doc.getElementById("color_2");
  let r = doc.getElementById("rotation");
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
  let c_1 =
    "#" +
    (d[ma.floor(ma.random() * d.length)] +
      e[ma.floor(ma.random() * e.length)] +
      f[ma.floor(ma.random() * f.length)] +
      g[ma.floor(ma.random() * g.length)] +
      h[ma.floor(ma.random() * h.length)] +
      i[ma.floor(ma.random() * i.length)]);
  let c_2 =
    "#" +
    (j[ma.floor(ma.random() * j.length)] +
      k[ma.floor(ma.random() * k.length)] +
      l[ma.floor(ma.random() * l.length)] +
      m[ma.floor(ma.random() * m.length)] +
      n[ma.floor(ma.random() * n.length)] +
      o[ma.floor(ma.random() * o.length)]);
  b.value = c_1;
  c.value = c_2;
  r.value = Math.random() * (360 - 1) + 1;
  console.log(`Random : ${c_1},${c_2} | rotation : ${r.value}°`);
};
