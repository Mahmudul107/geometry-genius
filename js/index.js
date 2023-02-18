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


// Disabled button in one function:




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
    const triangle = (0.5 * hField * bField).toFixed(2);

    
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


// Third card:
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const bField = document.getElementById('bp-field').value = 10;
    const hField = document.getElementById('hp-field').value = 12;

    

    const parallelogram = bField*hField;
    if (isNaN(bField) || isNaN(hField)) {
        return parallelogram;
    }
    areaCalculation(parallelogram, 'Parallelogram');
})

// Forth card:
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const d1Field = document.getElementById('d1-field').value = 16;
    const d2Field = document.getElementById('d2-field').value = 8;

    

    const Rhombus = 0.5 * d1Field * d2Field;
    if (isNaN(d1Field) || isNaN(d2Field)) {
        return Rhombus;
    }
    areaCalculation(Rhombus, 'Rhombus');
})


// Fifth Card:
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const ppField = document.getElementById('pp-field').value = 10;
    const pentagonField = document.getElementById('pentagon-B-field').value = 12;
    

    const pentagon = 0.5* ppField * pentagonField;
    if (isNaN(ppField) || isNaN(pentagonField)) {
        return pentagon;
    }
    areaCalculation(pentagon, 'Pentagon');
})

// Sixth Card
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const aeField = document.getElementById('ae-field').value = 10;
    const beField = document.getElementById('be-field').value = 4;

    

    const ellipse = (3.1416 * aeField * beField).toFixed(2);
    if (isNaN(aeField) || isNaN(beField)) {
        return ellipse;
    }
    areaCalculation(ellipse, 'Ellipse');
})