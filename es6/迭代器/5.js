var [a,b]=[1,2]
Object.prototype[Symbol.iterator]=function (){
    return
}
var [a,b]={a:1,b:2}//new object()
var {name, age}={name:'John',age:18}