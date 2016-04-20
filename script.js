function createTable(numCols, numRows){
    
    var begin = '<table>';
    var middle = '';
    var end = '<table>';
    for (var r = 0; r < numRows; r++){
        
        middle += '<tr>';
    for (var c = 0; c < numCols; c++){
        
        middle += '<td>AAY</td>';
        document.onkeydown = function() {
  var randomCell = Math.floor(Math.random() * 375);
  document.getElementsByTagName('td')[randomCell].className += ' red';
}
          
    }
        middle += '</tr>';
    }
     return (begin + middle + end);
    
    
    
    
}

document.body.innerHTML = createTable(30, 20);
//document.getElementByTagName('td');
//document.onkeydown = function(){
//    var randomCell = Math.floor
//}



