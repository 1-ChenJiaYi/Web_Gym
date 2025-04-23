
// 2025/04/23 

class Graph {
 /**
   * 构造函数
   * @param {number} n 
   * @param {number} m 
   * @param {Array<[number, number, number]>} arr
   * @param {boolean} [flag=false] 
   * @example
   * n - 顶点数量（顶点编号从 1 开始）
   * m - 边的数量（预分配空间用）
   * arr - 边的数组，格式为 [起点, 终点, 权重]
   * flag - 是否是有向图（默认为无向图）
   * new Graph(点数，边数，边数组，是否是无向图)
   * new Graph(3, 2, [[1, 2, 5], [2, 3, 3]]); // 有向图
   * new Graph(3, 2, [[1, 2, 10]], true);     // 无向图
   */ 
  constructor(n, m, arr, flag) {
    this.h = Array(n + 1).fill(-1)  
    this.e = Array(m * 2 + 1).fill(0) 
    this.ne = Array(m * 2 + 1).fill(0)
    this.idx = 0 
    this.w = Array(n + 1).fill(0)
    
    const add = (a, b, c) => {
      this.e[this.idx] = b, this.ne[this.idx] = a  
      if (c) this.w[this.idx] = c      
      this.h[a] = this.idx ++
    }

    for (const edg of arr) {
      let [a, b, c] = edg 
      add(a, b, c) 
      if (flag) add(b, a, c) 
    } 
  } 


}

module.exports = Graph 

