import React from 'react';
import { sortByField } from '../helpers/sortByField';

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


  function filterByTerm(myData, myFields, myTerm) {
    if (myTerm.length === 0) {
      return myData;
    }

    return myData.filter(item =>
      myFields.filter(field =>
        item[field].toString().toLowerCase().includes(myTerm)
      ).length > 0 ? item : null
    );
  }

  React.useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = filterByTerm(data, fields, term);
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

  /**
   * Sort Data
   * @function
   * @param {string} field - field to sort data by
   */
  function sortData(field) {
    if (!enableSort) {
      return;
    }
    const shouldDescend = sortField !== field ? false : !isDescending;
    const results = sortByField(searchResults, field, shouldDescend);
    setSortField(field);
    setSortOrder(shouldDescend);
    setSearchResults(results);
  }

  /**
   * Column Status
   * @function
   * @param {string} field - field to determine if sorting by column; direction
   */
  function columnStatus(field) {
    if (enableSort && field === sortField) {
      return isDescending ? <span>&#8964;</span> : <span>&#8963;</span>
    }
  }

  return (
    <div>
      <h1>Data Table Component</h1>
      {searchBar()}

      <br />
      sortField: {sortField}<br />
      isDescending: {isDescending ? ('True') : ('False')}
      <br />

      <table>
        <thead>
          <tr>
            {fields.map((field, idx) =>
              <th
                onClick={sortData.bind(this, field)}
                data-testid="table-header" key={`field-${idx}`}>
                {field} {columnStatus(field)}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {
            searchResults.map(item =>
              <tr data-testid="table-row" key={item.id}>
                {fields.map((field, idx) => <td data-testid="table-cell" key={`td-${item.id}-${idx}`}>{item[field]} </td>)}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;