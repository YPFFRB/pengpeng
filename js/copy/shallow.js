// let obj={
//     name:'骆总',
//     like:{
//         a:'food'
//     }
// }

let obj={
    a:1,
    b:2,
    c:3,
    like:{

    }
}

for (let key in obj){
    console.log(obj[key]);
}

function shallow(obj){
    let newObj={}
  for (let key in obj){
      if (obj.hasOwnProperty(key))
      {
          newObj[key]=obj[key]
      }

  }
    return newObj
}

let obj2=shallow(obj)
obj.like.
console.log(shallow(obj));//{xxx}
