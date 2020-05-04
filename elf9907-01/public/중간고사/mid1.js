let a = [];  //배열을 만든다.
let sum = 0;

for(let i=0;i<100;i++){
    a[i] = Math.floor(Math.random()*(100-1+1) + 1);
    sum+=a[i];
}

let average = sum/100;

console.log(average.toFixed(1));  //평균을 소수점 아래 한 자리까지 출력
