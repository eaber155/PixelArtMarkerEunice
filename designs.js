// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
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

//var inputHeight = ('#inputHeight').val();
//var inputWeight = ('#inputWeight').val();

$('#sizePicker').submit(function(event){
	event.preventDefault();
	const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
	makeGrid(height, width);
});


function makeGrid(x, y) {
	var gridMarkup = "";

	for (var i = 0; i < x; i++) {
		gridMarkup += "<tr>";
		for (k = 0; k <y; k++) {
			gridMarkup += "<td>&nbsp;</td>";
		}
		gridMarkup += "</tr>";	
	}

	$("#pixelCanvas").html(gridMarkup)
}

/**var height, width, color;

$('#pixelCanvas').empty();
   event.preventDefault();
   const height = $('#inputHeight').val();
   const width = $('#inputWidth').val();
   makeGrid(height, width);
})

function makeGrid(x, y) {

 // Your code goes here!
 for (var i = 1; i <= x; i++) {
     $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
     for (var j = 1; j <=y; j++) {
         $('#table' + i).append('<td></td>');
       }
   }
   // add colors to the cells
   $('td').click(function addColor(){
       color = $('#colorPicker').val();

       if ($(this).attr('style')) {
           $(this).removeAttr('style')
       } else {
           $(this).attr('style', 'background-color:' + color);
       }
   })

}*/

//document.body.style.backgroundImage = 'url("background_one.jpg")';