// Common function for area calculation 

let serial = 0;
function areaCalculation(geometry, name) {
    // console.log('called')
    const tableContainer = document.getElementById('table-container');

    serial+=1;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${geometry} cm&sup2;</td>
    <td> <button>Convert to m&sup2;</button></td>

    `
    tableContainer.appendChild(tr);
}





// First card:
document.getElementById('btn-triangle').addEventListener('click', function () {
    const hFieldString = document.getElementById('h-field').value;
    const bFieldString = document.getElementById('b-field').value;

    // clear input fields after calculation
    document.getElementById('h-field').value = '';
    document.getElementById('b-field').value = '';
    

//Input values are valid numbers or not
    if (isNaN(hFieldString) || isNaN(bFieldString)){
        serial+=1;
        alert('Please enter valid numbers.');
        return;
    }
    
    else if (hFieldString.trim() === '' || bFieldString.trim() === '') {
        alert('Please enter values for both fields.');
        return;
    }

   

    const bField = parseFloat(bFieldString);
    const hField = parseFloat(hFieldString);
    const triangle = (0.05 * hField * bField).toFixed(2);

    
    areaCalculation( triangle, 'Triangle');

})

// Second card:
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const wField = document.getElementById('w-field').value;
    const lField = document.getElementById('l-field').value;
    
    const rectangle = parseFloat(wField) * parseFloat(lField);
    
    
    // clear input fields after calculation
    document.getElementById('w-field').value = '';
    document.getElementById('l-field').value = '';

    //Input values are valid numbers or not
    if (isNaN(wField) || isNaN(lField)){
        serial+=1;
        alert('Please enter valid numbers.');
        return;
    }

    else if (wField.trim() === '' || lField.trim() === '') {
        alert('Please enter values for both fields.');
        return;
    }

    areaCalculation(rectangle, 'Rectangle');
})
