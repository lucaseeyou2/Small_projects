let run = document.getElementById("run");
let editor = document.getElementById("editor");
editor.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
</head>
<body>
    <h1>Hello World !</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa atque voluptates vitae necessitatibus fugiat tempore asperiores
    tenetur nobis explicabo ea, corrupti expedita vel fuga quia? Id provident vel blanditiis expedita!</p>
</body>
</html>
`;

run.onclick = () => {
  var testwindow = window.open("", "_blank", `width = 10000, height = 10000`);
  var a = testwindow.document.createElement('iframe'); 
  testwindow.document.body.style.margin = '0';
  a.style.width = window.innerWidth; 
  a.style.height = window.innerHeight; 
  a.style.border = "none";

  a.setAttribute("srcdoc", editor.value);

  testwindow.document.body.appendChild(a);
};
