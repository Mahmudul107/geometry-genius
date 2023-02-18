// First card: Getting data from html file
document.getElementById('btn-triangle').addEventListener('click', function(){
    const hFieldString = document.getElementById('h-field').value;
    const hField = parseFloat(hFieldString);
    
    const bFieldString = document.getElementById('b-field').value;
    const bField = parseFloat(bFieldString);

    // hField = '';
    // bField = '';
    const totalArea = (0.05 * hField * bField).toFixed(2);
    // const triangleAreaField = document.getElementById('area-triangle').innerText;
    // triangleAreaField = totalArea;
    


// Create Table row
    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>Triangle</td>
    <td>${totalArea} cm&sup2;</td>
    <td> <button>Convert to m&sup2;</button></td>
   
    `
    tableContainer.appendChild(tr);
})