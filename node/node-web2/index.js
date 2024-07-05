//打造一个接口让前端来访问这个接口,用到node里边的模块common.js
const  http=require('http');
const url=require('url');
const fs=require('fs');
const path=require('path');
//const path = require('path');
const data={
    id:1,
    name:'牛哥',
    age:18
}
const server=http.createServer((req,res)=>{
    const reqUrl=url.parse(req.url)
    console.log(reqUrl);
    if (reqUrl.pathname==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h2>hello world<h2>')
    }else if (reqUrl.pathname==='/user'){
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'})
        res.end(JSON.stringify(data))
    }else if (req.method==='POST'&& reqUrl.pathname==='login'){
        //拿到前端传递的参赛
        //去数据库里边校验该参数的合法性
       res.end('登录成功')
    } else {
        //console.log(__dirname);
        const _url=path.resolve(__dirname,'assets/404.html')
       // console.log(_url);
      const content= fs.readFileSync(_url,{encoding:'utf-8'})
        console.log(content);
        res.end(content)
    }

})
server.listen(3100,()=>{
    console.log('listening on port 3100');
})