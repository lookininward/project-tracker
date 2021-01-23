import React from 'react';

/*
  Arguments:
  data: array
    - list of objects to display in table
  fields: array
    - fields from data objects to be used as header and columns
  enableSearch: boolean
    - enable the search and filter input
  enableSort: boolean
    - enable two-way and per field sort
 */

function DataTable(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  React.useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = props.data.filter(user => {
      const { id, name, email, role } = user;
      return id.toString().toLowerCase().includes(term) ||
        name.toLowerCase().includes(term) ||
        email.toLowerCase().includes(term) ||
        role.toLowerCase().includes(term);
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <div
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

      <table>
        <thead>
          <tr>
            {props.fields.map((field, idx) => <th key={idx}>{field}</th>)}
          </tr>
        </thead>

        <tbody>
          {
            searchResults.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;