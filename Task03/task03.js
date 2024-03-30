function generateTable(nrRows, nrColumns) {
    if (!isNaN(nrRows) && !isNaN(nrColumns)) {
    let table = document.createElement("table");
    for (let i = 0; i < nrRows; i++) {
    let row = table.insertRow();
    for (let j = 0; j < nrColumns; j++) {
    let cell = row.insertCell();
    cell.textContent = "Brain" + "ster";
    }
    }
    document.getElementById("tableContainer").appendChild(table);}
    else{ document.getElementById("errorMessage").textContent = "Please enter numbers";
    document.getElementById("errorMessage").style.display = "block";}
    
   }
   let nrRows = +(prompt("Enter the number of rows:"));
   let nrColumns = +(prompt("Enter the number of columns:"));
   generateTable(nrRows, nrColumns);
   