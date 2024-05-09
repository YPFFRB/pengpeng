//包装类
var num =123
num.abc = 'hello'
//包装类   ---这个隐式的过程
// new Number(123).abc='hello'
// delete new Number(123).abc


//原始类型是不能拥有属性和方法的，属性和方法是对象独有的
var num=new Number(123)    //人为创建一个对象
num.abc='hello'



var str='abcd'    //执行成这个样子：str=new String ('abcd')
console.log()





