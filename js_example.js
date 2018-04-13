var onButtonClick = function(){
	console.log('#wasclicked was clicked')
	location.reload();
}

var onMouseEnter = function(){
	console.log("The mouse entered the element")
}

var onMouseLeaves = function(){
	console.log("The mouse has left")
}

var mainProgram = function(){
	$('#clickable').click(onButtonClick);
	$('#enterable').mouseenter(onMouseEnter)
	$('#leaveable').mouseleave(onMouseLeaves)
}

$(mainProgram);

//alert("#wasclicked");