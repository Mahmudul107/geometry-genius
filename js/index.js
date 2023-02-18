// Common function for area calculation 
function areaCalculation(hField, bField, totalArea) {
    // console.log('called')
    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>Triangle</td>
    <td>${totalArea} cm&sup2;</td>
    <td> <button>Convert to m&sup2;</button></td>
   
    `
    tableContainer.appendChild(tr);
}

// First card: Getting data from html file
document.getElementById('btn-triangle').addEventListener('click', function () {
    const hFieldString = document.getElementById('h-field').value;
    const bFieldString = document.getElementById('b-field').value;

//Input values are valid numbers or not
    if (isNaN(hFieldString) || isNaN(bFieldString)) {
        alert('Please enter valid numbers.');
        return;
    }


    const bField = parseFloat(bFieldString);
    const hField = parseFloat(hFieldString);
    const totalArea = (0.05 * hField * bField).toFixed(2);

// clear input fields after calculation
     document.getElementById('h-field').value = '';
     document.getElementById('b-field').value = '';

    areaCalculation(hField, bField, totalArea);

    // Create Table row
})
