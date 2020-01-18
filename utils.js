/**
 * Displays the matrix in row and columns
 * @param matrix - {Array of Arrays}
 * @param columnCount - the number of columns to be parsed (for non square matrix),
 * by default a columnCount for square matrix will be taken row=column
 */
export function display(matrix, columnCount = matrix.length) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < columnCount; j++) {
      let value = matrix[i][j] === Infinity ? "-" : matrix[i][j];
      row += " " + value;
    }
    console.log(row);
    row = ""
  }
  console.log("")
}

/**
 * Gets the highest index from given nodes
 * @param nodes
 * @returns {number}
 */
export function getMax(nodes) {
  let max = 0;
  let allNodes = Object.values(nodes);
  for (let i = 0; i < allNodes.length; i++) {
    if (allNodes[i][0] > max) max = allNodes[i][0];
    if (allNodes[i][1] > max) max = allNodes[i][1];
  }
  return max;
}

/**
 * Gets a square matrix with empty values based on length
 */
export function getDefaultMatrix(length) {
  const matrix = new Array(length);
  for (let i = 0; i <= length; i++) {
    matrix[i] = new Array(length);
  }

  return matrix;
}

/**
 * Compares two arrays by values.
 * @returns {boolean} true if arr1 matches all values from arr2
 */
export function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
