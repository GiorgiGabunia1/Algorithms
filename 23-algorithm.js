const instructions = ['E>S','A>R','A<S','R>I','I>O','B>E','O>N'];
let tring ="";

//gadagvyavs ert did stringshi

function newString(array){
    array.forEach(element => {if(element[1]==='<')
    {
        tring=tring + element[2] + element [0]
    }else{tring = tring + element[0] + element[2];}
        
    });
}
newString(instructions);
let newArray = [tring[0],tring[1]];
tring=sliceing(tring , 1);
tring=sliceing(tring , 0);

//vqmnit axal array sadac unshiftit dapushit davalagebt asoebs stringistvis ar vicodi da amitom arayshi gadamyavs :)

function sliceing(string , index){

    let k; if(index==0){k=string.slice(1,string.length)}
    else if(index==string.length-1){
        k=string.slice(0,index);
    }
    {k=string.slice(0 , index)+ string.slice(index+1,string.length);}
    return k;
}

//sliceing funqciit shegvidzlia string movacilot xolme zedmeti asoebi
for(let j = 0; j<=newArray.length; j++){
for(let i = 0;i<=tring.length;i++){
    //tu pirvel 
    if(newArray[0]===tring[i]){
        newArray.unshift(tring[i-1])
        tring=sliceing(tring , i);
        tring=sliceing(tring , i-1);
    }else if(newArray[newArray.length-1]===tring[i]){
        newArray.push(tring[i+1]);
        tring=sliceing(tring , i);
        tring=sliceing(tring , i);
        
    }
}
}
tring=newArray.join('');

console.log(tring);
