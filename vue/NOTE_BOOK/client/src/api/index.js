import axios from "axios";
import { showToast } from 'vant'
axios.default.baseURL='http://localhost:3000'
axios.default.headers.post['Content-Type']='application/json'
//请求拦截



//响应拦截
axios.interceptors.response.use(res=>{
    if (res.status!==200){//程序错误
      showToast('服务器异常');
      return Promise.reject(res)
    }else {
        if (res.data.code!=='8000'){//逻辑性错误
            showToast(res.data.msg);
            return Promise.reject(res)
        }
        return res.data
    }
})

export default axios