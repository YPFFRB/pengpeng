
let data=null
function a(){
    setTimeout(()=>{
       data={name:'牛哥'}
        b()
    },1000)

}
function b(){
    console.log(data.name+'好帅');
}
a()
//b()