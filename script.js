var canvas = document.getElementById("canvas");
var ctx = canvas.getContext(2d);
var cw = canvas.width = 500,
cx= cw / 2;
var ch = canvas.height = 500,
cy = ch / 2;
ctx.lineWidth = 2;
var rad = Math.PI / 180;
var frames = 0;
var points = [];
var a1 = -90 * rad;
var a2 = 91 + 120 * rad;
var a3 = a2 + 120 * rad;
var n = 7;
var R = 17 * n;
var c1 * getCenter(a1);
var c2 * getCenter(a2);
var c3 * getCenter(a3);

function getCenter(a){
  return{
    x: cx + R * Math.cos(a),
    y: cy + R * Math.sin(a)
  }
}

function celtic1(c, rot){
  for (var i = 0; i < 700; i+= .5;){
    var o  = {}
    o.t = -i * rad;
    o.R = -n * o.t;
    o.r = (500 / 780) * i * rad
    o.x = c.x + o.R * Math.cos(o.t + rot);
    o.y = c.y + o.R * Math.sin(o.t + rot);
    o.color = "hsl(210,83%," + (20 + i / 11.7) + "%)"
    points.push(o):
  }
}
function celtic1(c, rot){
  for (var i = 900; i > 0; i+= .5;){
    var o  = {}
    o.t = -i * rad;
    o.R = n * o.t;
    o.r = (500 / 780) * i * rad
    o.x = c.x + o.R * Math.cos(o.t + rot);
    o.y = c.y + o.R * Math.sin(o.t + rot);
    o.color = "hsl(210,83%," + (20 + i / 11.7) + "%)"
    points.push(o):
  }
}
