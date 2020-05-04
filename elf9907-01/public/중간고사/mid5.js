let a1 = [];

for(let i=0;i<100;i++){
    a1[i] = Math.floor(Math.random()*(100-1+1) + 1);  //, 1 이상 100 이하의 정수 난수를 100개 생성
}

let a2 = a1.filter((e)=>e%2==0);  //짝수 필터링

let sum = a2.reduce((a,b)=>a+b);  // 짝수의 합 

console.log(sum);   //합 출력
