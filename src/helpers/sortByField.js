/**
 * Sort Data By Field
 * @function
 * @param {array} data - array of data
 * @param {string} field - field to sort data by
 * @param {boolean} shouldDescend - sort order
 */
export function sortByField(data, field, shouldDescend) {
  return data.sort((a, b) =>
    (a[field] < b[field] ? -1 : 1) * (!shouldDescend ? 1 : -1)
  );
}