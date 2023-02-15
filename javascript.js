//Variables
const width = 16;
const grid_container = document.querySelector('.grid');
var grid_dimensions = 50;

function cssBoxText(size){
    return (           
        'min-width:'+size+'px;'+
        'min-height:'+size+'px;'+
        'max-width:'+size+'px;'+
        'max-height:'+size+'px;');
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
            'justify-content: flex-start;'+
            'align-items: center;'+
            +//'border: 1px solid black;'+
            'background-color: red;'+
            'margin: 0px;'+
            'padding: 0px;'; 
        grid_container.appendChild(row);

        //Columns
        for (let j = 0; j < size; j++) {
            var column = document.createElement('button');
            column.setAttribute('class', 'btn');
            column.setAttribute('id', 'c'+i);
            column.innerHTML = 'c';
            column.style.cssText =             
                'display: flex;'+
                'justify-content: center;'+
                'align-items: center;'+
                'border: 1px solid black;'+
                cssBoxText(grid_dimensions) +
                'background-color: white; color: black;'+
                'margin: 0px;'+
                'padding: 0px;'+
                'color: white;';   
            row.appendChild(column);

            column.addEventListener('mouseover', function(e){
                this.style.cssText = 'color: black; background-color: black;'+cssBoxText(grid_dimensions);
            })
        }  
    }
}

