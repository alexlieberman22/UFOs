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

function handleClick(){
    // grab a datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // filter data by keeping the datetime values that match "date" if "date" exists
    if(date){
        filteredData = filteredData.filter(row => row.datetime === date)
    };

    // re-build new filtered data table 
    buildTable(filteredData);  
}

// event to listen for button click 
d3.selectAll('#filter-btn').on("click", handleClick);

// build the full table
buildTable(tableData);