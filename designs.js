// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.body.style.backgroundImage = 'url("background_one.jpg")';

window.onload = function(){
	function changeBackgroundImage(){
		var image = ["background_two.jpg", "background_three.jpg", "background_four.png", "background_five.jpg", "background_six.jpg"];
		var i = Math.floor(Math.random()*5);
		document.body.style.backgroundImage = 'url("' + image[i] + '")';
	}
	window.setInterval(changeBackgroundImage, 5000);
}

//var inputHeight = ('#inputHeight').val();
//var inputWeight = ('#inputWeight').val();

$('#sizePicker').submit(function(event){
	event.preventDefault();
	var inputHeight = ('#inputHeight').val();
	var inputWeight = ('#inputWeight').val();
	makeGrid(inputHeight, inputWeight);
});


/**$('#removeGrid').on('click', function(event){
	event.preventDefault();

	$('<button>Love</button>').isAfter($("removeGrid"));
});**/


function makeGrid(inputHeight, inputWeight) {
	var inputHeight, inputWeight, submit;

	//inputHeight = ('#inputHeight');
	//inputWeight = ('#inputWeight');

	var gridMarkUp = "";

	for(x=0; x<inputHeight;x++){
		gridMarkUp += "<tr>";
		for(y=0; y<inputWeight; y++){
			gridMarkUp += "<td>&nbsp;</td>";
		}
		gridMarkUp += "</tr>";
	}

	$("#pixelCanvas").html(gridMarkUp);
}

//document.body.style.backgroundImage = 'url("background_one.jpg")';