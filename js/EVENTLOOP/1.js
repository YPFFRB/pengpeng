let a=1
console.log(a);
setTimeout(function (){
    let b=2
    console.log(b);
    a++
   // b++
    setTimeout(function (){
        b++
    },2000)
    console.log(b);
},1000)

console.log(a);//1

function bar(){
    console.log('bar');
}
bar()