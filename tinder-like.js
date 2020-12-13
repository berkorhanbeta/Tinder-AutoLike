// Timer for like button.
// 1000 = 1 second
// 5000 = 5 second etc.
// I recommend using a 2 second timer. If you set it for a shorter time (I don't recommend), Tinder can notice this and banned your account permanently.
var timer = 2000;


sendIt = setInterval(function(){
  var begen = document.getElementsByClassName("likebutton");
  begen[0].click()
}, timer)
