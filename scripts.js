let audio = new Audio("./mediafiles/heh.mp3");
let curtain = document.getElementById("curtain");

document.addEventListener("mousemove", (e) => {
  //distance between mouse and the dot (Pythagoras)
  let a =
    Math.sqrt(Math.pow(e.clientY - 302, 2) + Math.pow(e.clientX - 302, 2)) *
    0.0035; //*0.0035 fo fading in-out
  curtain.style.background = `rgb(0,0,0,${a})`;
});

document.addEventListener("click", (e) => {
  if ((e.target.id = "dot")) audio.play();
});
