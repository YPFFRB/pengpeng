var obj={}
var arr=[]
var data=new Data()
// Person.prototype   函数的原型  {} 
Person.prototype.lastName='zhu'
Person.prototype.say=function(){
      console.log('hello');
}
function Person()
{
    
     this.name='tao'
}
let p1=new Person()   //隐式具有lastName
