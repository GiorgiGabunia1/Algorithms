function fib(n){
    let t=[0,1];
    for(let i = 2;i<=n;i++){
        t[i]= t[i-1]+t[i-2];
    }
    return t[n];
}
console.log(fib(10));