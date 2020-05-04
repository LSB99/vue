let sum = function(array){    //sum 함수의 파라미터는 배열이다. sum 함수는 배열의 원소의 합을 리턴한다.
    let total = 0;

    for(let i=0;i<array.length;i++){
        total+=array[i];
    }
    return total;
}

function test_sum(f){

    let a1 = [];   

    for(let i=0;i<5;i++){   //랜덤 값이 5개 들어있는 배열을 생성하고, 
        a1[i] = Math.floor(Math.random()*(10-0+1) + 0);
    }
    console.log(a1);  //그 배열을 출력하고,

    let result = f(a1);   //콜백 함수를 호출하면서 그 배열을 파라미터로 전달하고,
    console.log(result);  //콜백 함수의 리턴값을 출력한다
}


for(let i=0;i<5;i++){   //test_sum 함수를 5회 반복 호출하라.
    test_sum(sum);
    console.log("\n");
}