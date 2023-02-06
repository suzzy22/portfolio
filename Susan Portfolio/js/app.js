function myFunction(){
    var navbar=document.querySelector(".navigation");
    var sticky=navbar.offSetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}
myFunction()

document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text = "Lorem ipsum dolor sit consectetur.";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 50;
      setTimeout(typeText, speed);
    }
  }
  typeText();
});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

