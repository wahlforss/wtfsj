$(document).ready(function() {
	$('#wrapper').css("visibility", "visible");
	randomizeBackground()
	randomizeData()
	$('#wrapper').css("visibility", "visible");
	
	
});

//picking a random picture as background
function randomizeBackground() {
	var trainRandom = Math.floor(Math.random() * 5)
	var trainImage = 'url(https://gentle-sea-98329.herokuapp.com/green/train/train' + trainRandom + '.jpg)'
	$('#train').css("background-image", trainImage)
	var airplaneRandom = Math.floor(Math.random() * 5)
	var airplaneImage = 'url(https://gentle-sea-98329.herokuapp.com/green/airplane/airplane' + trainRandom + '.jpg)'
	$('#plane').css("background-image", airplaneImage)

}

function randomizeData() {
	$.getJSON("train.json", function(json) {
		var randomSelect = Math.floor(Math.random() * Object.keys(json).length);
    	var trainObject = json[randomSelect];
    	$("#trainDest").text(trainObject.Destination)
    	$("#trainCarbon").text(trainObject.Carbon)
    	$("#trainCost").text(trainObject.Cost)
    	console.log(trainObject.Destination);
});
	$.getJSON("airplane.json", function(json) {
		var randomSelectA = Math.floor(Math.random() * Object.keys(json).length);
		var planeObject = json[randomSelectA];
    	$("#planeDest").text(planeObject.Destination)
    	$("#planeCarbon").text(planeObject.Carbon)
    	$("#planeCost").text(planeObject.Cost)
    	console.log(planeObject);
	});

}