function init(){
	var h = new Date().getHours(),
			tq= [],
			isStarted = false;

	if(h<6 || h>15){
		$('<link rel="stylesheet" href="css/night.css">').appendTo("head");
	}

	$('body').hide(0).delay(400).fadeIn(2000);
	$('.article').hide(0).delay(1200).fadeIn(2000);
	$('#canvasWrapper').hide(0).delay(1800).fadeIn(2000);
	setTimeout(function(){
		queText(".article h1");
		queText("#talk span");
	},4300);

	setTimeout(initCanvas,6000);


	function queText(txt){
		txt = $(txt);
		if(isStarted){
			tq.push({txt:txt,value:txt.text()});
			txt.text("");

		}else{
			isStarted = true;
			textInTitle(txt,"",txt.text(),onTextComplete);


		}

	}

	function onTextComplete(){
		var obj = tq.shift(),
				txt;

		if(obj){
			txt = obj.txt;
			textInTitle(txt,"",obj.value,onTextComplete);
		}

	}

}



function textInTitle(txt, current,leftovers,callback){
	current += leftovers.slice(0,1);
	leftovers = leftovers.slice(1);

	txt.text(current);

	if(leftovers.length){
		setTimeout(textInTitle,120,txt,current,leftovers,callback);
	}else{
		callback();
	}


}

function initCanvas(){
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



