# bellman-kalaba-graph-algorithm
Java Script implementation of Bellman-Kalaba graph algorithm with ZERO dependencies
The Belman-Kalaba algorithm calculates the shortest path from a certain vertex to the end vertex based on nodes weight

`TODO: attach step documentatio`

#### Application can be run using: `npm run start`  or `node index`

graph can be configured in `input.js` file

`TODO add unit-tests`

#### Example output
Graph: 
```
nodes = [
  [1, 2, 3],
  [1, 3, 7],
  [1, 5, 9],
  [2, 3, 3],
  [2, 4, 3],
  [3, 4, 2],
  [3, 5, 3],
  [3, 7, 5],
  [4, 5, 2],
  [4, 6, 5],
  [4, 8, 7],
  [5, 6, 2],
  [5, 7, 3],
  [5, 8, 5],
  [6, 8, 3],
  [7, 8, 3],
]
```

#### Result
```
The shortest path weight is: 13
Shortest paths are:
  1 -> 2 -> 4 -> 5 -> 6 -> 8
  1 -> 2 -> 4 -> 8
  1 -> 2 -> 4 -> 5 -> 8
```
