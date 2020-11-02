// Timer for like button.
// 1000 = 1 second
// 5000 = 5 second etc.
// I recommend using a 2 second timer. If you set it for a shorter time (I don't recommend), Tinder can notice this and banned your account permanently.
var timer = 2000;


sendIt = setInterval(function(){
  // If you are not using Tinder in English language, then change the 'Like' text in your local language.
  // Ex : In Turkish like button name is 'Beğen'. So you need to edit this code like this;
  // "[aria-label='Beğen']"
  var begen = document.querySelectorAll("[aria-label='Like']");
  begen[0].click()
}, timer)
