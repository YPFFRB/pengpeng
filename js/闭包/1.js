function bar(){
     console.log(myName)
}
function foo(){
     var myName='Tom'
     bar()
}
var myName='Jerry'
foo()
// 每一个栈都有一个outer,outer指向谁取决于   词法作用域,   声明  在哪里,outer就指向哪里
// 先找词法环境，再找变量环境，然后再去找outer