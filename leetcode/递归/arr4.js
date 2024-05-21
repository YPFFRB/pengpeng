const arr=[1,2,[3,4[5]]]//[1,2,'abc',[3,4,[5]]]

function flatten(arr){
    return arr.reduce((pre,item)=>{
       return pre.concat(Array.isArray(item)? flatten(item):item)//[1,2] [3,4]
    },[])
}
console.log(flatten(arr));