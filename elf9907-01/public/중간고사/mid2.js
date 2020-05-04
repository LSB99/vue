let a = [];

for(let i=0;i<100;i++){
    a[i] = Math.floor(Math.random()*(100-1+1) + 1);
}

a.sort(function (n1,n2){ 
    return n2-n1; 
});
console.log(a);