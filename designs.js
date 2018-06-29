// Select color input
const COLOUR = $("#colorPicker");

// Select size input
const HEIGHT_ELEMENT = $("#inputHeight");
const WIDTH_ELEMENT = $("#inputWeight");

// Select table element
const TABLE_ELEMENT = $("#pixelCanvas");

// Select form element
const SUBMIT = $("#sizePicker");

// Create variables to hold the values to pass to the function
var width, height;

// Add an event listener to form when size is submitted by the user, call makeGrid()
SUBMIT.on("submit", function(event){
							width = WIDTH_ELEMENT.val();
							height = HEIGHT_ELEMENT.val();
							event.preventDefault();
							makeGrid();
						});

function makeGrid(){
// Your code goes here!
// Make the grid
	let grid = "";
	let start = 0;
	while(start++ < height){
		grid += "<tr>";
		for(let count = 1; count <= width; count++){
			grid += "<td class='click'></td>";
		}
		grid += "</tr>";
	}

	TABLE_ELEMENT.html(grid);
	
// Add event listener to each <td> element and set the colour
	let tdElements = $(".click");
	tdElements.on("click", function(){$(this).css("background-color", COLOUR.val())});
}
