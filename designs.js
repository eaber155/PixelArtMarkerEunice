// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, colorSelected;

document.body.style.backgroundImage = 'url("images/background_one.jpg")';

window.onload = function(){
	function changeBackgroundImage(){
		var image = ["images/background_two.jpg", "images/background_three.jpg", "images/background_four.png", "images/background_five.jpg", 
		"images/background_six.jpg"];
		var i = Math.floor(Math.random()*5);
		document.body.style.backgroundImage = 'url("' + image[i] + '")';
	}
	window.setInterval(changeBackgroundImage, 5000);
}

$('#sizePicker').submit(function(event){
	event.preventDefault();
	const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
	makeGrid(height, width);
});


$('#removeGrid').on('click', function(event){
	event.preventDefault();
	$('#pixelCanvas').html(""); 	
});

function makeGrid(x, y) {
	var gridMarkup = "";

	for (var i = 0; i < x; i++) {
		gridMarkup += "<tr>";
		for (k = 0; k <y; k++) {
			gridMarkup += "<td></td>";
		}
		gridMarkup += "</tr>";	
	}

	$("#pixelCanvas").html(gridMarkup)

	$('td').click(function addColor(){		
	colorSelected = $('#colorPicker').val();
	if($(this).attr('style')){
		$(this).removeAttr('style');
	}else{
		$(this).attr('style', 'background-color:'+colorSelected);
	}
});
}

$('#clearColor').on('click', function(event){
	event.preventDefault();
	$('td').removeAttr('style');
});