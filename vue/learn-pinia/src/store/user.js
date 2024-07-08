import { defineStore} from  'pinia'

 export  const useUserStore=defineStore({
    id:'user',
    state:()=>{
       return{
           userInfo:{
               name:'牛哥',
               age:18,
               sex:'girl'
           }
       }
        //数据源
    },
     actions:{//专门用来修改state
        changeUserName(name){
            this.userInfo.name=name
        },
        changeUserSex(sex){
            this.useInfo.sex=sex
        }
     },
     getters:{
        afterAge(state){
            return state.userInfo.age+10
        }
     },
     persist:{//开启数据持久化
        enabled:true,
         strategies:[
             {
                 paths:['userInfo'],
                 storage:localStorage
             }
         ]

     }
})
