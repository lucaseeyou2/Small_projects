// Defining the two major elements used here
let run = document.getElementById("run");
let editor = document.getElementById("editor");

// Default HTML to load in the textarea, 
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

// Onclick of the button, load a blank page, with an iframe containing the code in the editor. 
run.onclick = () => {
  var testwindow = window.open("", "_blank", `width = 10000, height = 10000`);
  var a = testwindow.document.createElement('iframe'); 

  // Make sure that the iframe doesn't appear anywhere
  testwindow.document.body.style.margin = '0';
  
  // Make that the iframe occupies the enterity of the screen
  a.style.width = window.innerWidth; 
  a.style.height = window.innerHeight; 
  a.style.border = "none";

  // Set the editor code as a srcdoc
  a.setAttribute("srcdoc", editor.value);

  // Add the tag to the opened window's body tag. 
  testwindow.document.body.appendChild(a);
};
