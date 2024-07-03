const express=require('express')

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Welcome to Node')
})

app.listen(port,()=>{
    console.log('项目已经启动在3000端口');
})