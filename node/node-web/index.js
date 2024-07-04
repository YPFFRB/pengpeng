const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const data = {
    id: 1,
    name: 'John Doe 好帅',
    age: 30,
    city: 'New York'
}

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    // console.log(reqUrl);
    if (reqUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Hello World</h2>\n');
    } else if (reqUrl.pathname === '/user') {
        res.writeHead(200, { 'Content-Type': 'application/json;' });
        res.end(JSON.stringify(data));
    } else if (req.method === 'POST' && reqUrl.pathname === '/login') {
        res.end('登录成功')
    }
    else {
        // res.end('404\n');
        const _url = path.resolve(__dirname, 'assets/404.html');
        const content =  fs.readFileSync(_url,{encoding:'utf-8'})
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    }
});
server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});