var obj={            
      a:1,
      foo:foo                 
}  //对象里面的key是一个字符串  ，当函数foo()被obj对象拥有（拥有）时，this指向引用它的对象

function foo(){
      console.log(this.a)
}
obj.foo()





var obj = {
    a: 1,
    foo: foo()
 } 
 
//  这个不叫  函数foo()被obj对象拥有（引用）时，this指向引用它的对象，
    // 这个叫    obj对象拥有foo()函数的执行结果

function foo() {
    console.log(this.a)
}
obj.foo()
  