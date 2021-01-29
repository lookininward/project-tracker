import React from 'react';
import './DataTable.scss';
import { sortByField } from '../helpers/sortByField';
import { filterBySearch } from '../helpers/filterBySearch';
import ChevronCompact from './svg/ChevronCompact';

/**
 * Data Table
 * @component
 * @param {array} data - list of objects to display in table
 * @param {array} fields - fields from data objects to be used as header and columns
 * @param {boolean} enableSearch - enable the search and filter input
 * @param {boolean} enableSort - enable two-way, per field sort
 */

interface Props {
  data: Array<Object>,
  fields: Array<string>,
  enableSort: boolean,
  enableSearch: boolean,
}

function DataTable(this: any, props: Props) {
  const { data = [], fields = [], enableSort = false, enableSearch = false } = props;

  interface Item {
    id: any,
    index: string,
    [key: string]: number | string,
  }
  const [sortField, setSortField] = React.useState<any>(fields[0]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Item[]>([]);
  const [isDescending, setSortOrder] = React.useState(false);
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  }

  React.useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = sortByField(filterBySearch(data, fields, term), sortField, isDescending);
    setSearchResults(results);
  }, [searchTerm, data, fields, sortField, isDescending]);

  /**
   * Sort Data
   * @function
   * @param {string} field - field to sort data by
   */
  function sortData(field: string) {
    if (!enableSort) {
      return;
    }
    const shouldDescend = sortField !== field ? false : !isDescending;
    const results = sortByField(searchResults, field, shouldDescend);
    setSortField(field);
    setSortOrder(shouldDescend);
    setSearchResults(results);
  }

  return (
    <div>
      {
        enableSearch &&
        <div
          data-testid="search-bar"
          className="mb-3"
        >
          <input
            className="form-control form-control-lg"
            type="search"
            placeholder="Search Personnel"
            value={searchTerm}
            onChange={handleChange}
          ></input>
        </div>
      }
      <table className="table table-hover">
        <thead className="user-select-none">
          <tr>
            {fields.map((field, idx) =>
              <td
                className={`table-light ${sortField === field ? 'table-active' : 'table-light'}`}
                data-testid="table-header"
                key={`field-${idx}`}
                onClick={sortData.bind(this, field)}
              >
                {field}
                {
                  enableSort && field === sortField &&
                  <ChevronCompact
                    classNames='sort-direction'
                    direction={isDescending ? 'down' : 'up'}
                  />
                }
              </td>)}
          </tr>
        </thead>
        <tbody>
          {
            searchResults.map((item: Item) =>
              <tr data-testid="table-row" key={item.id}>
                {fields.map((field: string, idx) => <td data-testid="table-cell" key={`td-${item.id}-${idx}`}>{item[field]}</td>)}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;