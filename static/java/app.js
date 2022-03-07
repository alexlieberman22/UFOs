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

// variable to keep track of all the filters as an object.
filters = {};
console.log(filters)

// function to update the filters. 
function updateFilters() {

    // element that was changed as a variable.
    let filterType = d3.select(this);

    // value that was changed as a variable.
    let filterValue = filterType.property("value");

    // id of the filter that was changed as a variable.
    let filterId = filterType.attr("id");

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (filterValue) {
      filters[filterId] = filterValue;
    }
    else{
      delete filters[filterId];
    }
    
    console.log(filters);
    // Call function filterTable
    filterTable();
  
  }
  
  // function to filter the table when data is entered.
  function filterTable() {
  
    // Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    for (f in filters){
      console.log(filters[f]);
      if (filters[f]){
        filteredData = filteredData.filter(row => 
          row.datetime === filters[f] ||
          row.city === filters[f] ||
          row.state === filters[f] ||
          row.country === filters[f] ||
          row.shape === filters[f]
          )
      }
    }
    // rebuild the table using the filtered data
    buildTable(filteredData);  
  }
  
  // event to listen for change to any filter
  d3.selectAll("input").on("change", updateFilters)
  
  // build the full table
  buildTable(tableData);
