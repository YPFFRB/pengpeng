#异步
js是单线程执行的,一次只能干一件事

遇到需要耗时的代码,那就先挂起,先执行不耗时的代码,等到不耗时的代码执行完了,v8腾出

#同行
#promise
1.then((res)=>{}) res是promise 中resolve(xx)出来的值
2.catch((err)=>{}) err是promise 中reject(xx)出来的值