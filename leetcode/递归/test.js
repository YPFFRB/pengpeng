//let arr=[1,2]
//let arr2 =[3,4]
//let  arr3=[5,6]
//let allArr=arr.concat(arr2)//[1,2,3,4]
//let [a,b]=arr
//let allArr=[...arr,...arr2]
//let  allArr=arr.concat(arr2,arr3)//
//console.log(allArr)

//let arr3=[1,2,3,4,5,6,7,8,9]
//let [a,b,...c]=arr3;//数组的解构
//console.log(...arr3)
//console.log(a,b);

//console.log(allArr,arr);

let arr=[1,2,3,4,5,6,7]
let sum=arr.reduce(function (pre,item,index,arr){
   // return pre+item
    console.log(pre,item,index)
},0)
//console.log(sum);