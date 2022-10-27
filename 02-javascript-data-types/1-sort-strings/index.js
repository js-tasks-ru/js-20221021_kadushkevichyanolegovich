/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    sortASC(arr);
  } else if (param === 'desc') {
    sortASC(arr).reverse();
  }
}

function sortASC(array) {
  // новый массив (копия arr)
  let newArr = array.slice();
  // сортитруем новый массив в правильном порядке
  newArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  return newArr;
}

