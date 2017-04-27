$(document).ready(function() {
	$('#wrapper').css("visibility", "visible");
	randomizeBackground()
	randomizeData()
	$('#wrapper').css("visibility", "visible");
	
	
});

//picking a random picture as background
function randomizeBackground() {
	var trainRandom = Math.floor(Math.random() * 5)
	var trainImage = 'url(./green/train/train' + trainRandom + '.jpg)'
	$('#train').css("background-image", trainImage)
	var airplaneRandom = Math.floor(Math.random() * 5)
	var airplaneImage = 'url(./green/airplane/airplane' + trainRandom + '.jpg)'
	$('#plane').css("background-image", airplaneImage)

}

function randomizeData() {
	var randomSelect = Math.floor(Math.random() * 9);
	$.getJSON("train.json", function(json) {
    	var trainObject = json[randomSelect];
    	$("#trainDest").text(trainObject.Destination)
    	$("#trainCarbon").text(trainObject.Carbon)
    	$("#trainCost").text(trainObject.Cost)
    	console.log(trainObject.Destination);
});
	$.getJSON("airplane.json", function(json) {
		var planeObject = json[randomSelect	];
    	$("#planeDest").text(planeObject.Destination)
    	$("#planeCarbon").text(planeObject.Carbon)
    	$("#planeCost").text(planeObject.Cost)
    	console.log(planeObject);
	});

}