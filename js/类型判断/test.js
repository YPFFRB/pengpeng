function  add(a,b){
    if (typeof (a)==='number'&&typeof b==='number'){
        return a+b;
    }
    console.log('参数类型不对');
}
console.log(add(1,2));

function  isObject(o){
    if (typeof (o)==='object'&& o!==null){
        return true
    }
    return false
}

let  res=isObject({a:1})