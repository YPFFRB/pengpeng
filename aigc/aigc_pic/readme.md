前后端数据交换格式是json
 post {title,desc} JSON.stringify()
backend @koa/bodyParser中间件 解析post 请求
headers Content-Type:application/json JSON.parse()
-ctx.request.body {title:''}

LLM
  安装openai npm i openai
   管理好key 密钥
   调用接口
   文本模型 gpt-3.5-turbo
   多模态模型 gpt-4 gpt -4(强大) gpt-4o(AGI模型) dalle-3
    文本,图片，视频，音频...
    client.images.generate
    client.images.edit
