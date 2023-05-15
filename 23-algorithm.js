const instructions = ['E>K','K>L','L>A','T>E'];
let tring ="";

//gadagvyavs ert did stringshi

function newString(array){
    array.forEach(element => {
        tring = tring + element[0] + element[2];
        
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

for(let i = 0;i<=tring.length;i++){
    //tu pirvel 
    if(newArray[0]===tring[i]){
        newArray.unshift(tring[i-1])
        tring=sliceing(tring , i);
        tring=sliceing(tring , i-1);
        i=0;
    }
    if(newArray[newArray.length-1]===tring[i]){
        newArray.push(tring[i+1]);
        tring=sliceing(tring , i);
        tring=sliceing(tring , i);
        i=0;
    }
}

tring=newArray.join('');

console.log(tring);
