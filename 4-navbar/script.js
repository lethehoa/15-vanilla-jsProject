document.querySelector('.hamburger').addEventListener('click', function(){
   // e.preventDefault();
   var isDisplay = document.querySelector('div.main-container');
   isDisplay.classList.toggle('show-links');
});