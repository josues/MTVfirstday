var mtv;
function preload(){
mtv = loadJSON("mtv.json");
}


function setup(){

  var canvas = createCanvas(600,600);
  canvas.parent('sketch');

  // console.log(mtv);

  var videos = mtv.videos;
  var appearance = [];

  for(var i=0; i<mtv.videos.length; i++){
    appearance.push(mtv.videos[i].appearance);
  }

  // console.log(appearance);

  function foo(appearance) {
    var a = [], b = [], prev;

    appearance.sort();
    for ( var i = 0; i < appearance.length; i++ ) {
        if ( appearance[i] !== prev ) {
            a.push(appearance[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = appearance[i];
    }

    return [a, b];
  }

  var result = foo(appearance);

  // console.log(result);

  var r1 = result[1][0];
  var r2 = result[1][5];
  var r3 = result[1][9];
  var r4 = result[1][12];
  var r5 = result[1][14];
  var res = [r1, r2, r3, r4, r5];

  var y = 1;
  var x = 10;
  var h = 7;
  var rectwidth = 60;
  var prevpoint = null;

  s = "Frequency with which music videos were broadcasted on MTV's first day, 01/08/81, in absolute numbers.";
  text(s, x, r1*h + 60, rectwidth*5, 100);

  for(var j=0; j < res.length; j++){
    if(j == res.length >= 5){
      prevpoint = res[j - 1];
    } else if(j === 0){
      prevpoint = res[0];
    }
    var pointdiff = prevpoint*h - res[j]*h;
    rect(x, pointdiff+20, rectwidth, res[j]*h);
    text(res[j], x+5, pointdiff+15);
    text(y, x+5, r1*h + 40);
    text("x", x+15, r1*h + 40);
    x = x + rectwidth;
    y = y + 1;
  }
}


function draw(){
}
