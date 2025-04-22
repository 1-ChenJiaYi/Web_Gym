/*
  归并排序 

*/ 
function merge_sort(Arr, le, ri) { 
  const tmp = Array(Arr.length).fill(0) 
  mSort(Arr, le, ri) 
  function mSort(q, l, r) {
    if (l >= r) return 

    let mid = Math.floor((l + r) / 2) 
    mSort(q, l, mid) 
    mSort(q, mid + 1, r) 
    
    let k = 0, i = l, j = mid + 1

    while (i <= mid && j <= r) 
      if (q[i] <= q[j]) tmp[k ++ ] = q[i ++ ]  
      else tmp[k ++ ] = q[j ++ ] 
    
    while (i <= mid) tmp[k ++ ] = q[i ++ ] 
    while (j <= r) tmp[k ++ ] = q[j ++ ] 

    for (i = l, j = 0; i <= r; i += 1, j += 1 ) q[i] = tmp[j]  
  }

}