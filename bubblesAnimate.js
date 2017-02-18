var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
circles = [];
var count=0;
addRandomCircles();
render();
function addRandomCircles()
{
	for(i=0;i<10;i++)
	{
		circles[i]={};
		circles[i].posX = canvas.width/2;
		circles[i].posY = canvas.height/2;
		circles[i].radius = 30;
		circles[i].rc = Math.floor(256*Math.random());
		circles[i].gc = Math.floor(256*Math.random());
		circles[i].bc = Math.floor(256*Math.random());
		circles[i].speedX = Math.floor(10*Math.random())-5;
		circles[i].speedY = Math.floor(10*Math.random())-5;
	}
}
function addCircles(event)
{
		var circle={};
		circle.posX = event.pageX;
		circle.posY = event.pageY;
		circle.radius = 30;
		circle.rc = Math.floor(256*Math.random());
		circle.gc = Math.floor(256*Math.random());
		circle.bc = Math.floor(256*Math.random());
		circle.speedX = Math.floor(10*Math.random())-5;
		circle.speedY = Math.floor(10*Math.random())-5;
		circles.push(circle);
		ctx.beginPath();
		ctx.arc(circle.posX,circle.posY,circle.radius,0,2*Math.PI);
		ctx.fillStyle="white";
		ctx.fill();
		console.log("pushed");
}
function render()
{
	animate();
	window.requestAnimationFrame(render);
}
function animate()
{
	count++;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(i=0;i<circles.length;i++)
	{
		count++;
		if(count%50==0)
		{
		circles[i].speedX = Math.floor(10*Math.random())-5;
		circles[i].speedY = Math.floor(10*Math.random())-5;
		}
		circles[i].posX=circles[i].posX+circles[i].speedX;
		circles[i].posY=circles[i].posY+circles[i].speedY;
		circles[i].radius-=0.5;
		if(circles[i].radius<0)
		{
			circles.splice(i,1);
		}
		else
		{
			ctx.beginPath();
			ctx.arc(circles[i].posX,circles[i].posY,circles[i].radius,0,2*Math.PI);
			ctx.fillStyle = "rgb("+circles[i].rc+','+circles[i].bc+','+circles[i].gc+')';
			ctx.fill();
		}
	}
}