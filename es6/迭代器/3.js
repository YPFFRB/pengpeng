function createIterator(items){
    var i=0;
    return{
        next:function (){
            var done=i>=items.length;
            var value=!done? items[i++] : undefined
            return {
                done:done,
                value:value
            }
        }
    }
}
// var iterator=createIterator([1,2,3])
//
// for (let value of iterator) {
//  console.log(value)
// }
const obj={
    value:1
}
obj[Symbol.iterator]=function (){
    return createIterator([1,2,3])
}
for (let value of  obj){
    console.log(value);
}

const colors=['red','green','blue']
const [a,b,c]=colors
//
colors[Symbol.iterator]=function (){
    return createIterator(colors)
}
for (let color of colors){
    console.log(color);
}