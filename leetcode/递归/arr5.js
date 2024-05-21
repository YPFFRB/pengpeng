// let arr=[1,2,3,4,5,6,7]
// let res=arr.some((item)=>{
//     return item >5;
// })
// console.log(res);
const arr=[1,2,[3,4,[5]]]//[1,2,'abc',[3,4,[5]]]

function flatten(arr){
   while (arr.some(item=>Array.isArray(item))){
       arr=[].concat(...arr)
   }
   return arr
}
console.log(flatten(arr));