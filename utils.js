/**
 * Converts the nodes to the Zero base notation
 * @param nodes - the nodes to be converted
 * @param startIndex - the minimum node value
 */
export const normalizeNodes = (nodes, startIndex = 1) => {
  const normalizedNodes = [];
  nodes.forEach((row, index) => {
    normalizedNodes[index] = [
      row[0] - startIndex,
      row[1] - startIndex,
      row[2]
    ]
  });

  return normalizedNodes;
};

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
 * Gets a square matrix with empty values based on given rows and cols values
 */
export function getDefaultMatrix(rows, cols = rows) {
  const matrix = new Array(rows);
  for (let i = 0; i <= rows; i++) {
    matrix[i] = new Array(cols);
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


/**
 * Gets the lowest vertex from given nodes
 * @param nodes
 * @returns {number}
 */
export function getMinNode(nodes) {
  let min = nodes[0][0];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i][0] < min) min = nodes[i][0];
    if (nodes[i][1] < min) min = nodes[i][1];
  }
  return min;
}


/**
 * Gets the highest destination vertex from given nodes
 * @param nodes
 * @returns {number}
 */
export function getMaxDestinationNode(nodes) {
  let max = nodes[0][0];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i][1] > max) max = nodes[i][1];
  }
  return max;
}

export function copyFilteredArray(array, filter) {
  return JSON.parse(JSON.stringify(array.filter(filter)));
}

export function getPaths(routes, separator) {
  const paths = [];
  for (let i = 0; i < routes.length; i++) {
    let path = routes[i][0];
    for (let j = 1; j < routes[i].length; j++) {
      path += ` ${separator} ${routes[i][j]}`;
    }
    paths.push(path);
  }
  return paths;
}


/**
 * Finds the smallest sum result between current (v) and incremental(i) rows
 * @param matrix
 * @param v current matrix row to be summed
 * @param i incremental matrix row to be summed
 * @param count the amount nodes
 * @returns {number} the smallest sum found
 */
export function findTheSmallestSum(matrix, v, i, count) {
  let temp = [];
  // Extract sum between V row and i in a tempArray
  for (let j = 0; j < count; j++) {
    temp.push(matrix[v][j] + matrix[i][j]);
  }
  // Find min in sums
  let min = temp[0];
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] < min) min = temp[j];
  }
  return min;
}

/**
 * Gets a node that matches Base and Target indexes
 * @returns node {number[]}
 */
export function getNode(nodes, base, target) {
  for (let iterator = 0; iterator < nodes.length; iterator++) {
    if (nodes[iterator][0] === base && nodes[iterator][1] === target) {
      return nodes[iterator];
    }
  }
}
