const x = 28;
const y = 0;
const z = 1;
let maior;

if(x>y){
    maior = x;
    if(x<z){
        maior = z;
    }
}else{
    maior = y;
    if(y<z){
        maior = z;
    }
}

console.log(maior);
