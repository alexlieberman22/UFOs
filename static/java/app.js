const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data){
    // clear existing table data
    tbody.html("");

    // loop through each object
    data.forEach(dataRow => {
        // append a row to the table
        let row = tbody.append("tr");

        // loop though each field 
        Object.values(dataRow).forEach((val) => {
            // append each value as a table cell
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

