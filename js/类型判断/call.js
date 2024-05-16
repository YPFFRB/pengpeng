var obj={
    a:1
}

function foo(){
    console.log(this.a);
}
foo.mycall(obj)

Function.prototype.mycall=function (context){
    //调用我的那个哥们是不是函数体
    if (typeof this!='function'){
        return new TypeError(this+'is not a function')
    }
    //this 里面的this=>context
}

//this 里边的this=>context
const fn=Symbol('key')
context[fn]=this//让对象拥有该函数 context={Symbol('key)}