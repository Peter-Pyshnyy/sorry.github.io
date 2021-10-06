let audio = new Audio("./mediafiles/heh.mp3");
let heher = document.getElementById("heher");
let dot = document.getElementById("dot");
let dist = document.getElementById("dist");
let pos = [200, 300];
dot.style.top = pos[0] + "px";
dot.style.left = pos[1] + "px";

document.addEventListener("mousemove", (e) => {
  //distance between mouse and the dot (Pythagoras)
  let a = Math.sqrt(
    Math.pow(e.clientY - pos[0], 2) + Math.pow(e.clientX - pos[1], 2)
  );
  heher.style.opacity = 1 - a * 0.006; //make it smooth
  dist.style.top = e.clientY - 20 + "px";
  dist.style.left = e.clientX + "px";
  dist.innerHTML = `${Math.round(a)} px`;
});

document.addEventListener("click", (e) => {
  if (e.target == dot) audio.play();
});
