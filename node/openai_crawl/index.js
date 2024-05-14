//机智将一部分适合ai做的任务交给LLM
//工作更高效，50%不用做
//npm i 安装到本地
//将本地openai 引入到项目中
const OpenAI=require('openai')
//实例化
const client=new OpenAI({
    apiKey:'sk-9NHKQSrmqI5FOnZyq6kciKc57iPq5fvUY7ccestlJw7D8d5z',
    baseURL:'https://api.chatanywhere.tech/v1'
})
 async function main(){
    const chartCompletion=await  client.chat.completions.create(
        {
            messages:[{roles:'user',content:'你是谁'}],
            model:'gpt-3.5-turbo'
        }
    )
     console.log(chartCompletion.choices[0])
 }

 main()

