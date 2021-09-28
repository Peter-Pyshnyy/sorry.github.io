let audio = new Audio("mediafiles/heh.mp3");
let curtain = document.getElementById("curtain");
document.addEventListener("mousemove", (e) => {
  let a =
    Math.sqrt(Math.pow(e.clientY - 302, 2) + Math.pow(e.clientX - 302, 2)) *
    0.003;
  curtain.style.background = `rgb(0,0,0,${a})`;
  if (a < 0.03) audio.play();
  console.log(a);
});
