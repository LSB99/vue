let persons1 = [];  //비어있는 persons1 배열을 생성한다.

for(let i=0;i<3;i++){    //for 문에서 객체를 생성하여 persons1 배열의 원소에 대입

    persons1[i] = {name : "홍길동", age : 16+i};
}

let persons2 = persons1;   //persons1 배열을 얕은 복사하여 persons2 배열을 생성한다

persons1[0].age = 20;

console.log(persons1);
console.log(persons2);