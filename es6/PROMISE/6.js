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
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            console.log('b is ok');
            reject('b')
            // resolve('a')
        },500)
    })
}
function c(){
    console.log('c is ok');
}
// Promise.race([a(),b()]).then(()=>{
//     c()
// })

Promise.all([a(),b()]).then(()=>{
    c()
})

// function foo(){
//     b()
// }
// a().then((res)=>{
//     b()
// })
// a().then((res)=>{
//     b()
// })
//     .catch((err)=>{
//         console.log(err);
//     })