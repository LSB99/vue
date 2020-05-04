let a1 = [];

for(let i=0;i<100;i++){
    a1[i] = Math.floor(Math.random()*(100-1+1) + 1);
}

let a2 = a1.filter((e)=>e%2==0);

let sum = a2.reduce((a,b)=>a+b);

console.log(sum);