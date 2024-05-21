const arr=[1,2,[3,4,[5]]]//[1,2,'abc',[3,4,[5]]]

let str=arr.toString()//'1,2,3,4,5'

const newArr=str.split(',').map((item)=>{
    return Number(item)
})
console.log(newArr);