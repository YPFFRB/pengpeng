// let a={
//     name:'毛毛'
// }
// let b=Object.create(a)//拷贝
// a.name='付哥'

//console.log(b.name);

// let a={
//     name:'毛毛',
//     like:{
//         n:'running'
//     }
// }
// let b={
//     age:18
// }
// let c=Object.assign({},a)
// a.name='徐总'
// a.like.n='swimming'
// console.log(c);

let arr=[1,2,3,{a:10}]
//let newArr=[].concat(arr)//将arr中的元素合并到[]中,并返回一个新数组
//let newArr=[...arr]
//let newArr=arr.slice(0)
let  newArr=arr.toReversed().reverse()
arr[3].a=100//arr.splice(1,1)
console.log(newArr);
let s=arr.slice(1,3)

console.log(s,arr);
