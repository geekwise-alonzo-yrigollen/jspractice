function createTable(numCols, numRows){
    
    var begin = '<table>';
    var middle = '';
    var end = '<table>';
    for (var r = 0; r < numRows; r++){
        
        middle += '<tr>';
    for (var c = 0; c < numCols; c++){
        
        middle += '<td></td>';
          
    }
        middle += '</tr>';
    }
     return (begin + middle + end);
}

document.body.innerHTML = createTable(25, 20);
