var i = 0;
var FPS = 60;
var time = new Date();
var timer = null;

onload = function() {
  //setInterval(update, 33);
  update();
};

function update() {
  var startTime = +new Date();
  var elapsed = startTime - time;
  time = startTime;
  var fps = 1000 / elapsed;
  //i += elapsed / 200;

  $('#fps').text('FPS:' + ~~fps);

  draw(elapsed);

  if(timer){
    clearTimeout(timer);
  }
  var endTime = +new Date();
  var waitTime = (1000 / FPS) - (endTime - startTime)
  timer = setTimeout(update, waitTime);
}

function draw(elapsed) {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('canvassample');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }

  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.clearRect(0,0,100,100);

  drawUnclearBox(ctx, 20 + i, 20, 120, 20, 120, 120, 20, 120);
}

function drawUnclearBox(ctx, x1, y1, x2, y2, x3, y3, x4, y4) {
  ctx.beginPath();
  //ctx.moveTo(20 + i, 20);
  //var r = Math.floor( Math.random() * 100 ) / 50;
  var rs = 2;
  ctx.moveTo(unclearValue(x1, rs), unclearValue(y1, rs));
  ctx.lineTo(unclearValue(x2, rs), unclearValue(y2, rs));
  ctx.lineTo(unclearValue(x3, rs), unclearValue(y3, rs));
  ctx.lineTo(unclearValue(x4, rs), unclearValue(y4, rs));
  ctx.closePath();
  ctx.stroke();
}

function unclearValue(value, unclearSize) {
  var r = Math.random() * (unclearSize * 2) - unclearSize;
  //console.log(value + r);
  return value + r;
}
