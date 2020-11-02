// Timer for like button.
// 1000 = 1 second
// 5000 = 5 second etc.
var timer = 1000;


sendIt = setInterval(function(){
  var begen = document.querySelectorAll("[aria-label='Beğen']");
  begen[0].click()
}, timer)
