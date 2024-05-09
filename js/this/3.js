console.log(this)  //全局的this代指的是window，全局
var obj={
    a:1,
    foo:function(){
        console.log(this.a)  //obj
    }
}
var a=2
obj.foo()










var obj = {
    a: 1,
    foo: function () {
        console.log(this.a)  //obj
    }
}
var a = 2
obj.foo()





