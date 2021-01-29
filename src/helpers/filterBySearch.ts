/**
 * Filter Data by Search
 * @function
 * @param {array} data - array of data
 * @param {array} field - fields to sort data across
 * @param {string} searchTerm - string to search by
 */

export function filterBySearch(data: any[], fields: string[], searchTerm: string) {
  if (searchTerm.length === 0) {
    return data;
  }

  return data.filter(item =>
    fields.filter(field =>
      item[field].toString().toLowerCase().includes(searchTerm)
    ).length > 0 ? item : null
  );
}