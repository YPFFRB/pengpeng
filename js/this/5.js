var obj={
       a:1
}
function foo(x,y){
      console.log(this.a,x+y);
}
foo.call(obj,2,3)  
foo.apply(obj,[1,2])
call和apply的区别
apply传的是一个数组

var bar=foo.bind(obj,3)
bar(2)
bind是零散接收


var bar = foo.bind(obj, 2,3) //就近原则，只传2和3
bar(4)

