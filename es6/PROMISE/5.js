function a(){

    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log('a is ok');
            reject('a')
           // resolve('a')
        },1000)
    })
}

function b(){
    console.log('b is ok')
}
function foo(){
    b()
}
// a().then((res)=>{
//     b()
// })
a().then((res)=>{
    b()
})
.catch((err)=>{
    console.log(err);
})