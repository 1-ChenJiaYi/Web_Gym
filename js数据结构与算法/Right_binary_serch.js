function RBs(arr, ul, ur, fn) {
  let l = ul, r = ur 
  while (l < r) {
    let mid = Math.floor((l + r) / 2) 
    if (fn(arr[mid])) r = mid 
    else l = mid + 1 
  }
  return l 
}