window.onload = function () {
  var currentPos = [0, 0];

  var canvas = document.getElementById("exemploCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  canvas.addEventListener("mousemove", draw);

  function draw(e) {
    ctx = this.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    x = getPos(e)[0]; // - this.offsetLeft;
    y = getPos(e)[1]; // - this.offsetTop;
    currentPos = [x, y];

    ctx.beginPath();
    ctx.moveTo(currentPos[0], currentPos[1]);
    ctx.lineTo(295, 195);

    ctx.strokeStyle = "#ccc";
    ctx.stroke();
  }

  function getPos(e) {
    var x, y;

    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    return [x, y];
  }
};
