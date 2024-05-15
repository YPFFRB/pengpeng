//引入本地（node_mdoules）openai 依赖node-fetch 等
//package.json 项目描述文件dependencies
//前端+后端+AI
//类 require 关键字
//系统环境变量
//进程的环境变量
require('dotenv').config();
console.log(process.env);

const OpenAI=require('openai');
//实例化OpenAI
//option 配置项
//AI全栈开发
//prompt ->GPT-API-free-> openai
const client =new OpenAI({
    //收费:使用权限
    apiKey:process.env.OPENAI_API_KEY,
    //proxy
    baseURL:'https://api.chatanywhere.tech/v1'
})
async function main(){
    //做一些高下立判的事情, nlp任务,
   //     跟据用户发表的评论,正面/负面
    let  prompt = `
        判断一下用户的评论情感上是正面的还是负面的
       评论:买的银色版真的好看,一天就到了,晚上就开始拿起来玩系统很丝滑流畅,做工扎实,手感细腻,很精致哦华为一如既往的
       好品质
       情感:正面
       评论:随意降价,不予保价,服务态度差
       情感:负面
       `

    let  myPrompt =`
    ${prompt}
    评论:实话说,iphone越来越没有创新了,你买我不推荐,散了
    情感:
    `
    //client openai 实例
    //chat 是以聊天的方式
    //completions AIGC open 生成正面或者负面,Lim大模型来完成
    //AI自然语言处理 GC 生成内容
    const chatCompletion=await client.chat.completions.create({
        //聊天的上下文 多轮
        //role 角色 user 用户向openai 问问题 content
        messages:[{role:'user',content:myPrompt}],
        //模型
        model:'gpt-3.5-turbo',
        n:1
    })
    console.log(chatCompletion.choices[0]);
}

main();
