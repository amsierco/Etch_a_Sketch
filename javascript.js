//Variables
var width = 10;
var grid_container = document.querySelector('.grid');
//var grid_dimensions = ((width*10)*.25);
var color_style = 'black';

function cssBoxText(size_in){

		let size = ((400/size_in));
    return (           
        'min-width:'+size+'px;'+
        'min-height:'+size+'px;'+
        'max-width:'+size+'px;'+
        'max-height:'+size+'px;');   
}

function cssColorText(color){
  return (
        'border: 1px solid '+color+';'+
        'background-color: '+color+';'+
        'color: '+color+';');   
}

createGrid(width);
function createGrid(size){
    //Loop to create rows then fill with columns
    //Rows
    for (let i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.setAttribute('id', 'r'+i);
        row.style.cssText = 
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'background-color: lightsalmon;'+
            'margin: 0px;'+
            'padding: 0px;'; 
        grid_container.appendChild(row);

        //Columns
        for (let j = 0; j < size; j++) {
            var column = document.createElement('button');
            column.setAttribute('class', 'btn');
            column.setAttribute('id', 'c'+i);
            column.innerHTML = '';
            column.style.cssText =             
                'display: inline-block;'+
                'justify-content: center;'+
                'align-items: center;'+
                cssBoxText(width) +
                cssColorText('white') +
                'margin: 0px;'+
                'padding: 0px;';
            row.appendChild(column);

            column.addEventListener('mouseover', function(e){
                this.style.cssText =                 
                'display: inline-block;'+
                'justify-content: center;'+
                'align-items: center;'+
                cssBoxText(width) +
								cssColorText(color_style) +
                'margin: 0px;'+
                'padding: 0px;'; 
            })
        }  
    }
}

//Reset the grid
const reset_btn = document.querySelector('.reset');
reset_btn.addEventListener('click', function(e){
	resetGrid(width);
});

function resetGrid(new_width){
//Wipe grid and create a new one with updated width
	grid_container.replaceChildren();
  color_style = 'black';
  createGrid(new_width);

}

//Change grid size
const slider = document.querySelector('.slider');
slider.value = width;
slider.oninput = function(e) {
	width=this.value;
  if(width % 2 !=0){
  	width ++
  }
	resetGrid(width);
  let dimensions = document.querySelector('.dimensions');
  dimensions.textContent = ''+width+'x'+width+'';
}

//Color buttons
var color_btn = document.querySelectorAll('.color');
for(let i = 0; i<color_btn.length; i++){
		color_btn[i].addEventListener('click', function(e){
  	  color_style = this.getAttribute('id');
    });
		color_btn[i].style.cssText = 'background-color: '+color_btn[i].getAttribute('id')+'; font-size: 25px; border-radius: 100px; padding: 10%; border: 2px solid black;';
}
