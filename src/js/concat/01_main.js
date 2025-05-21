$(document).foundation();

function countUpNumber(el) {
   var targetValue = $(el).data("value");
   var numAnim = new CountUp(el, 0, targetValue);
   if (!numAnim.error) {
      numAnim.start();
   } else {
      console.error(numAnim.error);
   }
}

/* Detect Mobile Browser: */
function isMobile() {
   if (navigator.userAgent.match(/Android/i) ||
     navigator.userAgent.match(/webOS/i) ||
     navigator.userAgent.match(/iPhone/i) ||
     navigator.userAgent.match(/iPod/i) ||
     navigator.userAgent.match(/iPad/i) ||
     navigator.userAgent.match(/BlackBerry/i) ||
     navigator.userAgent.match(/Windows Phone/i)
   ) {
     return true;
   } else {
     return false;
   }
}
