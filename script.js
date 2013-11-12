
var pointsX = new Array();
var pointsY = new Array();
var pointsIndex=0;
var interval;
window.onload = function(event) {
	window.scrollTo(0,0);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = "rgba(0,0,0,1)";
	interval = setInterval(draw, 16.7);


}

//console.log
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];

	pointsX[pointsIndex]=touch.pageX;
	pointsY[pointsIndex]=touch.pageY;
	pointsIndex++;
}, false);


document.addEventListener('touchstart', function(event) {
    var touch = event.touches[0];
	window.scrollTo(0,0);
	pointsX[pointsIndex]=touch.pageX;
	pointsY[pointsIndex]=touch.pageY;
	pointsIndex++;	
	if(event.touches[1]) {
		// if two touches, erase screen
		pointsX = new Array();
		pointsY = new Array();
		pointsIndex = 0;
	}
}, false);
document.addEventListener('touchend', function(event) {
	pointsX[pointsIndex]=-1;
	pointsY[pointsIndex]=-1;
	pointsIndex++;
	
}, false);
    var t = 0;
	
	
function draw() {
	var canvas = document.getElementById("canvas");
          canvas.width = canvas.width+0
	var ctx = canvas.getContext("2d");
		  ctx.clearRect(0,0,640,832);
	
  ctx.strokeStyle = "rgba(0,0,0,1)";


  for(i=0;i<pointsIndex;i++) {
    if(pointsX[i] == -1 || pointsX[i+1] == -1)
	continue;
	
	ctx.beginPath();  
	ctx.moveTo(pointsX[i],pointsY[i]);
	ctx.lineTo(pointsX[i+1],pointsY[i+1]);
	ctx.closePath();  
	ctx.stroke();
	/*
	if(pointsX[i]==-1) {
		
		newline=true;
		continue;
	}
	if(newline) {

	  ctx.beginPath();

		ctx.moveTo(pointsX[i],pointsY[i]);
		newline=false;
		
	} else {
	    ctx.lineTo(pointsX[i],pointsY[i]);
	}*/
  }

  ctx.stroke();
  }

