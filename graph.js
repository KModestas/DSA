class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  printGraph() {
    if (Object.keys(this.adjacencyList).length !== 0) {
      console.log('{')
      for (const [key, value] of Object.entries(this.adjacencyList)) {
        console.log(' ', `${key}: ${value}`)
      }
      console.log('}')
    } else {
      console.log('{}')
    }
  }

  addVertex(vertex) {
    // add vertex as a key of adjacencyList object (if it doesnt already exist):
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    // was not added:
    return false
  }

  // connect 2 vertices / nodes together (create an edge / connection between the 2):
  addEdge(vertex1, vertex2) {
    // if both vertices exist:
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // push each vertex to each of their arrays
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }

  // Remove the connection between 2 given vertices:
  removeEdge(vertex1, vertex2) {
    // if both vertices exist:
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // filter out each vertex from each vertex's array
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
      return true
    }
    return false
  }

  // Before removing a vertex, we need to remove all edges (connections) from all other nodes
  // NOTE: our edges are biredectional (the connection between 2 vertices goes both ways so both vertices will reference each other in their array)
  // ...this means we only need to look at the array of the vertex we want to remove to determine which other nodes its connected to
  // this is more efficient than unidirectional vertices where you would have to iteration through ever single vertices array to see if there is a connection
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    // loop over the array of the vertex we want to remove
    while (this.adjacencyList[vertex].length) {
      // remove the first vertex from the array
      let vertex2 = this.adjacencyList[vertex].pop()
      // remove the connection between both vertices
      this.removeEdge(vertex, vertex2)
    }
    // when all vertices have been processed and removed from the array, delete the vertex:
    delete this.adjacencyList[vertex]
    return this
  }
}

function test() {
  const myGraph = new Graph()

  myGraph.addVertex('A')
  myGraph.addVertex('B')
  myGraph.addVertex('C')
  myGraph.addVertex('D')

  myGraph.addEdge('A', 'B')
  myGraph.addEdge('A', 'C')
  myGraph.addEdge('A', 'D')
  myGraph.addEdge('B', 'D')
  myGraph.addEdge('C', 'D')

  myGraph.printGraph()
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    {
      A: B,C,D
      B: A,D
      C: A,D
      D: A,B,C
    }

*/
