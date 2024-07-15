const router = require('koa-router')();
const {userLogin, userFind, userRegister} = require('../controllers/index.js')
const jwt = require('../utils/jwt.js')//引入jwt

router.prefix('/user')//路由前缀

router.post('/login', async (ctx) => {
    //获取到前端传递的账号密码，去数据库中校验
    const {username, password} = ctx.request.body;//结构赋值
    try {
        const result = await userLogin(username, password)//去数据库检验
        console.log(result, 123);
        if (result.length) {
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username,
            }
            //生成token
            let token = jwt.sign({
                id: result[0].id,
                username: result[0].username,
                admin: true
            })
            console.log(token);


            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功',
                token: token
            }

        } else {
            ctx.body = {
                code: '8004',
                data: err,
                msg: '账号或密码错误'
            }
        }
    } catch (err) {
        ctx.body = {
            code: '8005',
            data: err,
            msg: '服务器错误'
        }
    }
})

//注册
router.post('/register', async (ctx) => {
    //获取到前端传递的账号密码，去数据库中校验
    const {username, password, nickname} = ctx.request.body;//结构赋值
    if (!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            data: msg,
            msg: '账号或密码或昵称不能为空'
        }
        return
    }
    try {
        //校验账号是否存在
        const findRes = await userFind(username)//异步函数,不加await永远先执行log
        console.log(findRes);
        if (findRes.length) {//账号已存在
            ctx.body = {
                code: '8003',
                data: msg,
                msg: '账号已存在'
            }
            return
        }

        //往数据库中添加数据
        const registerRes = await userRegister({username, password, nickname})
        console.log(registerRes);
        if (registerRes.affectedRows) {
            ctx.body = {
                code: '8000',
                data: 'sucess',
                msg: '注册成功'
            }

        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '注册失败'
            }
        }
    } catch (err) {
        ctx.body = {
            code: '8005',
            data: err,
            msg: '服务器错误'
        }
    }
})


router.post('/home', jwt.verify(), (ctx) => {
    ctx.body = {
        code:'8000',
        data: '首页数据'
    }
})


module.exports = router;