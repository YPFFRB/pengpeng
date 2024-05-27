//const arr=[1,2,3,4,4,3,2,1]
//const arr2=new Array(5)


//const s=new Set([1,2,3,3])//具有iterable迭代器属性的结构
// s.add(1)
// s.add(2)
// s.add(2)
//s.delete(2)
//s.clear()
// console.log(s);
// console.log(s.values());
// console.log(s.has(1));
// const  arr=[1,2,3,4,4,3,2,1]
// const arr2=[...new Set(arr)]
// //new Set(arr)
// console.log(arr2);
// const str='abcabc'
// console.log([...new Set(str)].join(''));
// for (let i=0;i<s.size;i++){
//     console.log(s[i]);
// }
const s=new Set([1,2,3,7])
 console.log(s.keys());//1
console.log(s.values())//2
//console.log(s.entries())//3
// for (let item of s){//4
//     console.log(item);
// }
s.forEach((val,key)=>{
    console.log(val,key);
})