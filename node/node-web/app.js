const Koa=require('koa');

const app=new Koa()
const router=require('./router/user')
// const main=(ctx)=>{
//     ctx.body='Hello,world'
// }
// app.use(main)
app.use(router.routes())
app.listen(3001,()=>{
    console.log('项目已经启动');
})
