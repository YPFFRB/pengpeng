const koa=require('koa');
const app=new Koa()

const main=()=>{
    ctx.body='Hello world'
}
app.use(main)
app.listen(3004,()=>{
    console.log('项目已经启动');
})