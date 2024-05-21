const user={
  age:18;
}
function deep(obj){
    let newObj={}
    for (let key in obj){
        if (obj.hasOwnProperty(key)){//只拷贝显示具有的属性
            if (obj[key]instanceof Object){//typeof(obj[key]
                newObj[key]=deep(obj[key]);
            }else{
                newObj[key]=obj[key]
            }

        }
    }

    return newObj
}

console.log(deep(user));