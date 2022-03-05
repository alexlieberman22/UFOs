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

// 1. Create a variable to keep track of all the filters as an object.
filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let filterType = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let filterValue = filterType.val; //.property("values")
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = filterType.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // event to listen for change to any filter
  d3.selectAll("input").on("change", updateFilters)
  
  // build the full table
  buildTable(tableData);