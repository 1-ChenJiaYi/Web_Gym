
function LBs(arr, ul, ur, fn) {
  let l = ul, r = ur 
  while (l < r) {
    let mid = Math.floor((l + r + 1) / 2) 
    if (fn(arr[mid])) l = mid 
    else r = mid - 1 
  }
  return l 
} 
