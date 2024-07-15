//封装一个函数来连接数据库

const mysql = require('mysql2/promise');//引入mysql2模块

const config = require('../config/index.js');//引入配置文件

//线程池
const pool = mysql.createPool({//创建连接池
     host:config.detaBase.HOST,
     user:config.detaBase.USERNAME,
     password:config.detaBase.PASSWORD,
     database:config.detaBase.DATABASE,
     port:config.detaBase.PORT
});


const allServices={//封装一个对象
   async query(sql,values){//对象中的函数可以这样写
   try{
     //通过线程池连接mysql
     const conn=await pool.getConnection();
     //对连接执行某些操作
     const [rows,fields]=await conn.query(sql,values);

     //关闭连接
     pool.releaseConnection(conn);

     return Promise.resolve(rows);
   }catch(err){
    return Promise.reject(err);
    }
}
}

//登入函数
const userLogin=(username,password)=>{
     let _sql=`select * from users where username="${username}" and password="${password}"`;
     return allServices.query(_sql)//执行sql语句
}

//查找账号
const userFind=(username)=>{
     let _sql=`select * from users where username="${username}"`;
     return allServices.query(_sql)//执行sql语句
}

//注册函数
const userRegister=(values)=>{
     let _sql=`insert into users(username,password,nickname) values("${values.username}","${values.password}",'${values.nickname}')`;
     return allServices.query(_sql);
}

module.exports = {
    userLogin
    ,userFind
    ,userRegister
}