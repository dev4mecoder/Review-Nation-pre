var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".pagebanner").style.top = "0";
  } else {
    document.querySelector(".pagebanner").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}