function init(){
	var canvas = document.getElementById("myCanvas"),
			context;

	canvas.width = 900;
	canvas.height = 250;

	if(canvas.getContext){
		context = canvas.getContext('2d');
		updateCanvas(context,canvas.width,canvas.height);
		setInterval(updateCanvas,500,context,canvas.width,canvas.height)
	}else{
		//alt
	}

}

function updateCanvas(context, w, h){
	context.fillRect(0,0,w,h);
	context.fillStyle = "#FCEAB8";
	context.fillRect(0,0,w,h);

	var rad = 10,
			gaps = rad*2,
			wc = parseInt(w/gaps) +1,
			hc = parseInt(h/gaps)+1,
			aColors = ["#43A9D1","#EFA63B","#EF7625","#5E4130"],
			acLength = aColors.length;

	for(var x=0; x<wc;x++){
		for(var y=0; y<hc;y++){
			context.fillStyle = aColors[parseInt(Math.random()*acLength)];
			context.beginPath();
			context.arc(rad+gaps*x,rad+gaps*y,rad,0,Math.PI*2,true);
			context.closePath();

			context.stroke();
			context.fill();
		}
	}

}



