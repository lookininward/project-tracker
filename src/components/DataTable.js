import React from 'react';

/**
 * Data Table
 * @component
 * @param {array} data - list of objects to display in table
 * @param {array} fields - fields from data objects to be used as header and columns
 * @param {boolean} enableSearch - enable the search and filter input
 * @param {boolean} enableSort - enable two-way, per field sort
 */
function DataTable(props) {
  const { data = [], fields = [], enableSort = false, enableSearch = false } = props;
  const [sortField, setSortField] = React.useState(fields[0]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isDescending, setSortOrder] = React.useState(false);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  React.useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = data.filter(user => {
      const { id, name, email, role } = user;
      return id.toString().toLowerCase().includes(term) ||
        name.toLowerCase().includes(term) ||
        email.toLowerCase().includes(term) ||
        role.toLowerCase().includes(term);
    });
    setSearchResults(results);
  }, [searchTerm]);

  const searchBar = () => {
    if (enableSearch) {
      return <div
        data-testid="search-bar"
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
        }}
      >
        <input
          style={{ width: "100%", padding: "20px", fontSize: "20px" }}
          type="search"
          placeholder="Search Personnel"
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </div>
    }
  }

  function sortByColumn(field) {
    const shouldDescend = sortField !== field ? false : !isDescending;
    
    const results = searchResults.sort((a, b) => 
      (a[field] < b[field] ? -1 : 1) * (!shouldDescend ? 1 : -1)
    );
    
    setSortField(field);
    setSortOrder(shouldDescend);
    setSearchResults(results);
  }

  function columnStatus(field) {
    if (field === sortField) {
      return isDescending ? <span>&#8964;</span> : <span>&#8963;</span>
    }
  }

  return (
    <div>
      <h1>Data Table Component</h1>
      {searchBar()}

      <br/>
      sortField: {sortField}<br/>
      isDescending: {isDescending ? ('True') : ('False')}
      <br/>

      <table>
        <thead>
          <tr>
            {fields.map((field, idx) =>
              <th
                onClick={sortByColumn.bind(this, field)}
                data-testid="table-header" key={`field-${idx}`}>
                  {field} { columnStatus(field) }
              </th>)}
          </tr>
        </thead>
        <tbody>
          {
            searchResults.map(item =>
              <tr data-testid="table-row" key={item.id}>
                  { fields.map((field, idx) => <td data-testid="table-cell" key={`td-${item.id}-${idx}`}>{ item[field] } </td>) }
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;