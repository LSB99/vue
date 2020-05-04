let a = [];   

for(let i=0;i<100;i++){
    a[i] = Math.floor(Math.random()*(100-1+1) + 1);  //1 이상 100 이하의 정수 난수를 100개 생성, 배열 채움
}

a.sort(function (n1,n2){   //배열을 내림차순으로 정렬
    return n2-n1; 
});

console.log(a);