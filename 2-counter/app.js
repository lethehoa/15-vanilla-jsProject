// document.getElementById('increase').addEventListener('click', counter('increase'));

function counter(mode){
   var count = parseInt(document.getElementById('displayCount').textContent);
   var boxDisplay = document.getElementById('displayCount');
   
   if (mode == "increase"){
      count++;     
   }
   else if (mode == "decrease"){
      count--;
   }
   else if (mode == "reset"){
      count = 0;
   }
   boxDisplay.textContent = count;
   if(count < 0){
      boxDisplay.style.color = "red";
   } else if (count >= 0) {
      boxDisplay.style.color = "black";
   }

   // console.log('adsdf');
}