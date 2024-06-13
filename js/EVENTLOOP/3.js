let count=0
function a(){
    setTimeout(()=>{
        return 1
    },1000)
}
function b(){
    console.log(count)
}
a()
b()