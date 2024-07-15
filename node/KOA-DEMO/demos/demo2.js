const Koa=require('koa');

const app=new Koa()

const main=(ctx)=>{

    if (ctx.request.header.accept==='xml'){
        ctx.body='<data>Hello World </data>'
    }else if (ctx.request.accepts('html')){
        ctx.body='<p>Hello World</p>'
    }
    //  console.log(ctx.url);// console.log(ctx.request.url)
//ctx.response.body='hello'
}
app.use(main)
app.listen(3000,()=>{
    console.log('listening on port 3000')
})

