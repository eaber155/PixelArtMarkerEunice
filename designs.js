// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height, width, colorSelected;

//creating a background on loading a page
document.body.style.backgroundImage = 'url("images/background_one.jpg")';

//Changing the background at intervals of 5 seconds
window.onload = function(){
	function changeBackgroundImage(){
		var image = ["images/background_two.jpg", "images/background_three.jpg", "images/background_four.png", "images/background_five.jpg", 
		"images/background_six.jpg"];
		var i = Math.floor(Math.random()*5);
		document.body.style.backgroundImage = 'url("' + image[i] + '")';
	}
	window.setInterval(changeBackgroundImage, 5000);
}

//An event listener to call the function makeGrid on submitting row height and column information
$('#sizePicker').submit(function(event){
	event.preventDefault();
	const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
	makeGrid(height, width);
});

//An event listener to remove the grid onClicking the removeGrid button
$('#removeGrid').on('click', function(event){
	event.preventDefault();
	$('#pixelCanvas').html(""); 	
});

//The makeGrif function used to create a grid when a user submits grid height and width values
function makeGrid(x, y) {
	var gridMarkup = "";
	
	//A for loop to add columns and rows to the grid
	for (var i = 0; i < x; i++) {
		gridMarkup += "<tr>";
		for (k = 0; k <y; k++) {
			gridMarkup += "<td></td>";
		}
		gridMarkup += "</tr>";	
	}
	
	//Painting the grid on the pixel canvas
	$("#pixelCanvas").html(gridMarkup)

	//Adding and removing color when a cell is clicked in the grid
	$('td').click(function addColor(){		
	colorSelected = $('#colorPicker').val();
	if($(this).attr('style')){
		$(this).removeAttr('style');
	}else{
		$(this).attr('style', 'background-color:'+colorSelected);
	}
});
}

//Clear all the color from the grid when clearColor button is clicked
$('#clearColor').on('click', function(event){
	event.preventDefault();
	$('td').removeAttr('style');
});
