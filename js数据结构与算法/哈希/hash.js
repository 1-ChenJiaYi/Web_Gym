// 传入字符串，模数1，模数2 

class HashString {

  static e = (x, mod) => ((x % mod + mod) % mod)  

  constructor(S, P = 23131, Mod1 = 2000000007, Mod2=3000000007) {

    this.n = S.length 
    this.h1 = Array(n + 1).fill(BigInt(0))  
    this.p1 = Array(n + 1).fill(BigInt(0))  
    this.p1[0] = 1 
    this.h2 = Array(n + 1).fill(BigInt(0))
    this.p2 = Array(n + 1).fill(BigInt(0))
    this.p2[0] = BigInt(1) 
    this.Mod1 = Mod1 
    this.Mod2 = Mod2 
    for (let i = 0; i < n; ++ i ) {
      this.h2[i + 1] = e(this.h2[i] * P + BigInt(S[i]), Mod2)   
      this.p2[i + 1] = e(this.p2[i] * P + BigInt(S[i]), Mod2)   
      this.h1[i + 1] = e(this.h1[i] * P + BigInt(S[i]), Mod1)
      this.p1[i + 1] = e(this.p[i] * P, Mod1) 
    }


  }

  f(l, r) {
    const arr = [] 
    arr.push(e(this.h1[r] - this.h1[l - 1] * this.p1[r - l + 1]), Mod1)
    if (Mod2) {
      arr.push(e(this.h2[r] - this.h2[l - 1] * this.p2[r - l + 1]), Mod2)  
    }  
    return arr 
  }


} 