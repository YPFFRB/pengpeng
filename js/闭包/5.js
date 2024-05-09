function add()
{
    let count =0
    function fn()
    {
         count++
         return count
    }
    return fn    //返回fn函数
}
add()    
add()
add()