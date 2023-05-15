function Maths( a , b , c){
    let d = b*b-4*a*c;
    d=Math.sqrt(d);
    let x1; 
    let x2;
    if(d < 0){ x1="ar gamova egre saqme";}
     else {
        x1=(-b+d)/(2*a);
        x2=(-b-d)/(2*a);
     }
     let xd=[x1,x2]
     return xd;
     
}
console.log(Maths(10,1,-42));
