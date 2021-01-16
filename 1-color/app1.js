document.querySelector('button').addEventListener('click', changeColor);
function changeColor(e) {
   var changeObject = document.querySelector('main');
   
   var colorPicker = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
   var text = document.querySelector("span");
   var color1 = '#';
   // console.log(colorPicker[Math.floor(Math.random() * colorPicker.length - 1)]);
   for(var i = 0; i < 6; i++){
      color1 += (colorPicker[Math.floor(Math.random() * colorPicker.length)]);
   }
   changeObject.style.backgroundColor = color1;
   text.textContent = color1;
}