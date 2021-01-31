function init() {
	setInterval(updateCanvas, 1000);
	updateCanvas();
}

function updateCanvas() {
	var	width = window.innerWidth;
	var height = 100;
	var	myCanvas = document.getElementById("myCanvas");
	myCanvas.width = width;
	myCanvas.height = height;
	
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, width, height);
	context.fillStyle = "#FCEABB";
	context.fillRect(0, 0, width, height);
	
	var circleSize = 10;
	var	gaps = circleSize + 10;
	var widthCount = parseInt(width / gaps);
	var heightCount = parseInt(height / gaps);
	var aColors = ["#43A9D1", "#EFA63B", "#EF7625", "#5E4130"];
	var aColorsLength = aColors.length;

	for (var x = 0; x < widthCount; x++) {
		for (var y = 0; y < heightCount; y++) {
			context.fillStyle = aColors[parseInt
				(Math.random() * aColorsLength)];
			context.beginPath();
			context.arc(circleSize + gaps * x, circleSize + gaps * y,
				circleSize, 0, Math.PI * 2, true);
			context.closePath();
			context.fill();
		}
	}

	var	cnvPalau = document.getElementById("cnvPalau");
	//var wid = cnvPalau.width;
	var wid = window.innerWidth
	//var hei = cnvPalau.height;
	var hei = 100;
	cnvPalau.width = wid;
	cnvPalau.height = hei;

	var	contextPalau = cnvPalau.getContext("2d");
	contextPalau.fillStyle = "#4AADD6";
	contextPalau.fillRect(0, 0, wid, hei);

	contextPalau.fillStyle = "#FFDE00";
	contextPalau.arc(wid / 2, hei / 2, 40, 0, Math.PI * 2, false);
	contextPalau.fill();

	var	cnvGreece = document.getElementById("cnvGreece");
	//var wid = cnvGreece.width;
	var wid = window.innerWidth
	//var hei = cnvGreece.height;
	var hei = 100;
	cnvGreece.width = wid;
	cnvGreece.height = hei;

	var contextGreece = cnvGreece.getContext("2d");
	contextGreece.fillStyle = "#000080";
	contextGreece.fillRect(0,0, wid, hei);

	var lineHeight = hei /9;
	contextGreece.lineWidth = lineHeight;
	contextGreece.strokeStyle = "#ffffff";
	
	var offset = lineHeight / 2; 
	for (var i = 1; i < 8; i+= 2) {
		contextGreece.moveTo(0, i * lineHeight + offset);
		contextGreece.lineTo(wid, i * lineHeight + offset); 
	}
	contextGreece.stroke();

	contextGreece.fillRect(0, 0, lineHeight * 5, lineHeight * 5);
	contextGreece.beginPath();
	contextGreece.moveTo(0, lineHeight * 2.5);
	contextGreece.lineTo(lineHeight * 5, lineHeight * 2.5);
	contextGreece.moveTo(lineHeight * 2.5, 0);
	contextGreece.lineTo(lineHeight * 2.5, lineHeight * 5);
	contextGreece.stroke();

	var cnvGuyana = document.getElementById("cnvGuyana");
	var wid = window.innerWidth;
	var hei = 100;
	cnvGuyana.width = wid;
	cnvGuyana.height = hei;

	var contextGuyana = cnvGuyana.getContext("2d");
	contextGuyana.fillStyle = "#009F49";
	contextGuyana.fillRect(0, 0, wid, hei);
	fillTriangle(contextGuyana, 0, 0, wid, hei / 2, 0, hei, "#FFFFFF");
	fillTriangle(contextGuyana, 0, 10, wid - 100, hei / 2, 0, hei - 10, "#FCD116");
	fillTriangle(contextGuyana, 0, 0, wid / 2, hei / 2, 0, hei, "#000000");
	fillTriangle(contextGuyana, 0, 10, wid / 2 - 50, hei / 2, 0, hei - 10, "#CE1126");

	var cnvBahrain = document.getElementById("cnvBahrain");
	var wid = window.innerWidth;
	var hei = 100;
	cnvBahrain.width = wid;
	cnvBahrain.height = hei;

	var contextBahrain = cnvBahrain.getContext("2d");
	contextBahrain.fillStyle = "#CE1126";
	contextBahrain.fillRect(0, 0, wid, hei);

	var baseX = wid * .25;
	contextBahrain.fillStyle = "#FFFFFF";
	contextBahrain.beginPath();
	contextBahrain.lineTo(0, 0);
	contextBahrain.lineTo(baseX, 0);
	var zagHeight = hei / 5;
	for (var i = 0; i < 5; i++) {
		contextBahrain.lineTo(baseX + 100, (i + .5) * zagHeight);
		contextBahrain.lineTo(baseX, (i + 1) * zagHeight);
	}
	contextBahrain.lineTo(0, hei);
	contextBahrain.lineTo(0, 0);
	contextBahrain.closePath();
	contextBahrain.fill();

	addBoarder(contextBahrain, wid, hei);






	function fillTriangle(context, x1, y1, x2, y2, x3, y3, color) {
		context.fillStyle = color;
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.lineTo(x3, y3);
		context.lineTo(x1, y1);
		context.closePath();
		context.fill();
	}
}