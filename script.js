
var square;
var up_key = 38;
var down_key = 40;
var left_key = 37;
var right_key = 39;
var square_left;
var square_top;

document.addEventListener('DOMContentLoaded',function(event){
    
    
    
    
    
    console.log('browser loaded');
    
    square = document.createElement('div');
    square.style.width = '20px';
    square.style.height = '20px';
    square.style.backgroundColor = 'indigo';
    square.style.borderRadius = '50%';
    square.style.boxShadow = '2px 2px 3px #4dffdb';
    square.style.position = 'relative';
    square.style.left = '0px';
    square.style.top = '0px';
        
    
    square_left = function(){
        return  parseInt(square.style.left);
    };
        
    
    square_top = function(){
        return  parseInt(square.style.top);   
    };
    
    document.body.appendChild(square);
    
    document.body.onkeydown = function(event){

        console.log(event.keyCode);
        
        if(event.keyCode == right_key){
            console.log('right key was pressed');
            
            square.style.left = ( square_left()+10 ).toString() + 'px';      
            
        };
        
        
        if(event.keyCode == left_key){
            
            console.log('left key was pressed');
            
            square.style.left = ( square_left()-10 ).toString() + 'px';
            
        }
        
        
        
        if(event.keyCode == down_key){
            square.style.top = ( square_top()+10 ).toString() + 'px';
        };
        
        if(event.keyCode == up_key){
            square.style.top = ( square_top()-10 ).toString() + 'px';
        }
        
        
        
        
        
    };

    
    
});






function createTable(numCols, numRows){
    
    var begin = '<table>';
    var middle = '';
    var end = '</table>';
    for (var r = 0; r < numRows; r++){
        
        middle += '<tr>';
    for (var c = 0; c < numCols; c++){
        
        middle += '<td>AY</td>';
        
          
    }
        middle += '</tr>';
    }
     return (begin + middle + end);
    
    
    
    
}

document.body.innerHTML = createTable(30, 11);
//document.getElementByTagName('td');
//document.onkeydown = function(){
//    var randomCell = Math.floor
//}



