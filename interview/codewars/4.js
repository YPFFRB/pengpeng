function likes (names){
    /\w/
    var templates=[
        'no one like this',
        '{name} like this',
        '{name} and {name} like this',
        '{name},{name} and {name} like this',
        '{name},{name} and {n} like this'
    ]
    var idx=Math.min(names.length,4);
    return templates[idx].replace(/{name}|{n}/g,function (val){
           console.log(val,'-------------')
        return val==='{name}'?names.shift():names.length
          // return names.shift()
    })
}

console.log(likes(['牛哥','发哥','涛哥','吉他手','牛哥']))