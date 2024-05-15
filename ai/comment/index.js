//引入本地（node_mdoules）openai 依赖node-fetch 等
//package.json 项目描述文件dependencies
//前端+后端+AI
//类 require 关键字
const OpenAI=require('openai');
//实例化OpenAI
//option 配置项
//AI全栈开发
//prompt ->GPT-API-free-> openai
const client =new OpenAI({
    //收费:使用权限
    apiKey:'sk-9NHKQSrmqI5FOnZyq6kciKc57iPq5fvUY7ccestlJw7D8d5z',
    //proxy
    baseURL:'https://api.chatanywhere.tech/v1'
})