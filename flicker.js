var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-25;
canvas.height = window.innerHeight-25;
var circles = [];
render();
for(i=0;i<40;i++)
	addCircles();
function addCircles()
{
	var sq = {};
	sq.posX = Math.floor(canvas.width*Math.random());
	sq.posY = Math.floor(canvas.height*Math.random());
	sq.frc = Math.floor(256*Math.random());
	sq.fgc = Math.floor(256*Math.random());
	sq.fbc = Math.floor(256*Math.random());
	sq.rc=0;
	sq.gc=0;
	sq.bc=0;
	sq.frames = 0;
	sq.remove=false;
	circles.push(sq);
}
function render()
{
	animate();
	window.requestAnimationFrame(render);
}
function animate()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(i=0;i<circles.length;i++)
	{
		if(!circles[i].remove)
		{
			circles[i].frames++;
			circles[i].rc+=7;
			circles[i].gc+=7;
			circles[i].bc+=7;
			if(circles[i].rc>circles[i].frc)
				circles[i].rc=circles[i].frc;
			if(circles[i].gc>circles[i].fgc)
				circles[i].gc=circles[i].fgc;
			if(circles[i].bc>circles[i].fbc)
				circles[i].bc=circles[i].fbc;
		}
		else
		{
			circles[i].rc-=1;
			circles[i].gc-=1;
			circles[i].bc-=1;
			if(circles[i].rc<0)
				circles[i].rc=0;
			if(circles[i].gc<0)
				circles[i].gc=0;
			if(circles[i].bc<0)
				circles[i].bc=0;
		}
		ctx.beginPath();
		ctx.arc(circles[i].posX,circles[i].posY,20,0,2*Math.PI);
		ctx.fillStyle = "rgb("+circles[i].rc+','+circles[i].bc+','+circles[i].gc+')';
		ctx.fill();
		if(circles[i].frames>50)
		{
			circles[i].remove=true;
		}
		if(circles[i].rc==0&&circles[i].gc==0&&circles[i].bc==0)
		{
			circles.splice(i,1);
			addCircles();
		}
	}
}
