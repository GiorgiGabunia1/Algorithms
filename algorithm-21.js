function isPrime(x) {
    let y = true;
    for(let i = 2; i <= x / 2; i++){
        if(x==2){break;};
        if(x % i != 0) {
            y= false;
            break;
        }
    }
    return y;
}
const t = isPrime(2);
console.log(t);