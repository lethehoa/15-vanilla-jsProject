document.querySelector('button').addEventListener('click', changeColor);
function changeColor(e) {
   var changeObject = document.querySelector('main');
   var text = document.querySelector("span");
   // var color1 = Math.floor(Math.random() * 256);
   // var color2 = Math.floor(Math.random() * 256);
   // var color3 = Math.floor(Math.random() * 256);
   // changeObject.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
   var color = ["red", "green", "yellow", "#FF0000", "#990000", "#FFFF66", "#99FF66"];
   var colorPicker = Math.floor(Math.random() * 7);
   changeObject.style.backgroundColor = color[colorPicker];
   console.log(colorPicker);
   text.textContent = color[colorPicker];
}