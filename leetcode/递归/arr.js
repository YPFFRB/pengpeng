const arr=[1,2,[3,4,[5]]]

//const newArr=arr.flat(2)
//const newArr=arr.flat(Infinity)//无穷大降维,
function flatten(arr){
    let res=[]//[1,2][3,4] [5]
    for (let i=0;i<arr.length;i++){
        if (Array.isArray(arr[i])){//[3,4,[5]]
           //res=res.concat(flatten(arr[i]))
            res=[...res,]

        }else {
            res.push(arr[i])
        }
    }
    return res
}
const newArr=flatten(arr)
console.log(newArr);