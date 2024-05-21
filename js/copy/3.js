let obj={
    name:'萍萍',
    age:18,
    like:{
        n:'coding'
    },
    a:true,
    b:undefined,
    c:null,
    d:Symbol(1),
    e:123n,
    f:function (){

    }
}
let obj2=JSON.parse(JSON.stringify(obj))
obj.like.n='run'