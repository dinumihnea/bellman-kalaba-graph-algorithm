import * as utils from "./utils";
import { findTheSmallestSum, getNode, normalizeNodes } from "./utils";
import { nodes } from "./input";

const minNode = utils.getMinNode(nodes);
const allNodes = minNode === 0 ? nodes : normalizeNodes(nodes, minNode);

// By default algorithm calculates path from the lowest vertex
// to customize path startVertex should be used
const startVertex = minNode;
const endVertex = utils.getMaxDestinationNode(allNodes);

const size = utils.getMax(allNodes);
const matrix = utils.getDefaultMatrix(size)
const count = size + 1;

// Step 1
// Fill matrix with node details
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < count; j++) {
    // Pot ZERO as value for main diagonal
    if (i === j) {
      matrix[i][j] = 0;
      continue;
    }
    // Check node
    const node = getNode(allNodes, i, j);
    if (node) {
      // Fill matrix with node's amount
      matrix[i][j] = getNode(allNodes, i, j)[2];
    } else {
      // Put Infinity otherwise
      matrix[i][j] = Infinity;
    }
  }
}

console.log("After Step 1");
console.table(matrix);

// Step 2
// Duplicate last column as an additional row, for source of following operations
for (let i = 0; i < count; i++) {
  matrix[matrix.length - 1][i] = matrix[i][count - 1]
}
console.log("After Step 2");
console.table(matrix)

// Step 3
// Compare and find smallest sum between last matrix row and index row
for (let i = matrix.length - 1; i < matrix.length; i++) {
  let row = new Array(count);
  for (let j = 0; j < count; j++) {
    row[j] = findTheSmallestSum(matrix, i, j, count);
  }
  matrix.push(row);
  if (utils.compareArrays(row, matrix[i])) {
    break;
  }
}
console.log("After step 3")
console.table(matrix)
// Value from matrix[matrix.length - 1][0] represents the shortest path from first to last vertex
console.log("The shortest path weight is:", matrix[matrix.length - 1][0])


// TODO refactoring: extract in different functions
// Step 4
// Find Routes in the result matrix
const routes = [];
const routesWeights = matrix[matrix.length - 1];

for (let i = 0; i < routesWeights.length; i++) {
  const matrixRow = matrix[i];

  for (let j = 1; j <= endVertex; j++) {

    if (routesWeights[i] - matrix[i][j] === routesWeights[j] && matrixRow[j]) {
      const from = startVertex === 0 ? i : i + 1;
      const to = startVertex === 0 ? j : j + 1;

      if (from === startVertex) {
        routes.push([from, to]);
      } else {

        const previousRoute = routes.filter(value => value[value.length - 1] === from);
        // Add matched vertex
        if (previousRoute.length) {
          previousRoute.forEach(route =>
            routes[routes.indexOf(route)] = [...route, to]
          );
        } else {
          // Duplicate route if matches
          const lastRoutes = utils.copyFilteredArray(routes, value => value[value.length - 2] === from);
          if (lastRoutes.length) {
            lastRoutes.forEach(route => {
              route[route.indexOf(from) + 1] = to;
              routes.push(route)
            });
          }
        }
      }
    }

  }
}

// Display found routes
console.log("After step 4")
console.log("Shortest paths are:")
console.log(utils.getPaths(routes, "->"))
