
"use strict"
const button = document.getElementById("myButton");
button.addEventListener("click",changeImage)

function changeImage() {
    let image = document.getElementById("myImage");
    image.src = "./images/R.jpg" ;
  }