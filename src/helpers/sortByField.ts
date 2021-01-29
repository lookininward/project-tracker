/**
 * Sort Data By Field
 * @function
 * @param {array} data - array of data
 * @param {string} field - field to sort data by
 * @param {boolean} shouldDescend - sort order
 */
export function sortByField(data: any[], field: string, shouldDescend: boolean) {
  return data.sort((a, b) => {
    if (a[field].toString() === b[field].toString()) {
      const aIdx = data.indexOf(a);
      const bIdx = data.indexOf(b);
      return aIdx < bIdx ? -1 : aIdx > bIdx ? 1 : 0;
    }
    return (a[field].toString() < b[field].toString() ? -1 : 1) * (!shouldDescend ? 1 : -1)
  });
}