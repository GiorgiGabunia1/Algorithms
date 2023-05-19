
function RomanToInt(romanNumber){
    const latinNumbers = [];
    for(let i=0; i<romanNumber.length; i++){
        if(romanNumber[i] == "I"){latinNumbers[i] = 1;}
        if(romanNumber[i] == "V"){latinNumbers[i] = 5;}
        if(romanNumber[i] == "X"){latinNumbers[i] = 10;}
        if(romanNumber[i] == "L"){latinNumbers[i] = 50;}
        if(romanNumber[i] == "C"){latinNumbers[i] = 100;}
        if(romanNumber[i] == "D"){latinNumbers[i] = 500;}
        if(romanNumber[i] == "M"){latinNumbers[i] = 1000;}
    }
    let number = 0;
    for (let t=0; t<latinNumbers.length; t++){
        if(latinNumbers[t] < latinNumbers[t+1]){ 
            number = number - latinNumbers[t];
        } else{
            number = number + latinNumbers[t];
        }
    }
    return number;
}
let x = RomanToInt("MMMMCDXLIV");
console.log(x);
