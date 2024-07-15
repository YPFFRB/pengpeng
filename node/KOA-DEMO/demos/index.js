const Koa=require('koa');

const app=new Koa()

const main=(ctx)=>{
  //  console.log(ctx.url);// console.log(ctx.request.url)
//ctx.response.body='hello'
    ctx.body

}
app.use(main)
app.listen(3000,()=>{
    console.log('listening on port 3000')
})