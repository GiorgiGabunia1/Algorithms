function isPalindrome(string){
    let k=0;
    let lean = true;
    for(let i = string.length-1; i > 0; i--){
        if(string[k]!=string[i]){
            lean = false;
            break;
        }
        k++;
    }
    return lean;
}
console.log(isPalindrome("ana"));
