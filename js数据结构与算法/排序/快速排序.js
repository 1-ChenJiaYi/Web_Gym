/*
  @ writer: CJY 
  @ 每天实现一个js算法，2025/04/22 
  @ Arr: 数组，索引从0开始 
*/ 

function quickSort(Arr, le, ri) { 
  Qsort(Arr, le, ri)  
  function Qsort(q, l, r) {
    if (l >= r) return  
    let i = l - 1, j = r + 1, x = q[Math.floor((l + r) / 2)] 
    while (i < j) {
      i += 1 
      while (q[i] < x) {
        i += 1 
      }

      j -= 1 
      while (q[j] > x) {
        j -= 1 
      }

      if(i < j) {
        let t = q[i]
        q[i] = q[j] 
        q[j] = t 
        t = null 
      }
    }

    Qsort(q, l, j)
    Qsort(q, j + 1, r) 
  }
}
