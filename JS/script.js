var searchButton = document.querySelector('.search-btn');
var bookingPopup = document.querySelector('.booking-form-block');
var dateInField = document.querySelector('.dateIn');
var plusButton1 = document.querySelector('.adults-plus');
var minusButton1 = document.querySelector('.adults-minus');
var plusButton2 = document.querySelector('.kids-plus');
var minusButton2 = document.querySelector('.kids-minus');


searchButton.addEventListener('click', function (evt) {
   evt.preventDefault();
   bookingPopup.classList.toggle('modal-show');
   dateInField.focus();
});

window.addEventListener('keydown', function(evt) {
   if (evt.keyCode === 27) {
      evt.preventDefault();
      if (bookingPopup.classList.contains('modal-show')) {
         bookingPopup.classList.remove('modal-show');
      } 
   }
});


plusButton1.addEventListener('click', function (evt) {
   evt.preventDefault();
   var adults = document.getElementById("adults").value;
   document.getElementById('adults').value = parseInt(adults) + 1;   
});

minusButton1.addEventListener('click', function (evt) {
   evt.preventDefault();
   var adults = document.getElementById("adults").value;
   if (parseInt(adults) >= 1) {
   	document.getElementById('adults').value = parseInt(adults) - 1;
   }
});

plusButton2.addEventListener('click', function (evt) {
   evt.preventDefault();
   var kids = document.getElementById("kids").value;
   document.getElementById('kids').value = parseInt(kids) + 1;
});
minusButton2.addEventListener('click', function (evt) {
   evt.preventDefault();
   var kids = document.getElementById("kids").value;
   if (parseInt(kids) >= 1) {
   	document.getElementById('kids').value = parseInt(kids) - 1;
   }
});