  global.gc()//垃圾回收
//console.log(process.memoryUsage());//2,6M
  let obj={name:'龙龙',age:new Array(5*1024*1024)}
  let ws=new WeakSet()
  ws.add(obj)
  obj=null // 来回收我 不写这句话的话不知道什么时候能够回收
  global.gc()
  console.log(process.memoryUsage())//4.4M   赋值为null后变为2.5M
