class Graph{
  constructor(v){
    this.vertices = v;
    this.edge = 0; 
    this.edgeTo = [];
    this.adj = [];
    this.marked = [];
    this.route=[];
    for(let i =0; i<this.vertices; i++){
      this.marked[i] = false; 
      this.adj[i] = [];
    }
  }

  addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    edge++;
  }

  dfs(v){
    this.marked[v] = true;
    this.route.push(v)
    this.adj[v].forEach(w=>{
      if(!this.marked[w]){
        this.dfs(w);
      }
    })
  }

  bfs(s){
    let q = [];
    this.marked[s] = true;
    q.push(s);
    while(q.length>0){
      let v =q.shift();
      this.route.push(v);
      this.adj[v].forEach(w=>{
        if(!this.marked[w]){
          this.edgeTo[w]=v;
          this.marked[w]=true;
          q.push(w)
        }
      })
    } 
  }




}


let graph = new Graph(9);
console.log(graph)