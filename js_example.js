var onButtonClick = function(){
	console.log('#wasclicked was clicked')
		window.alert("#wasclicked");
}


var mainProgram = function(){
	$('#wasclicked').click(onButtonClick);
}

$(mainProgram);

