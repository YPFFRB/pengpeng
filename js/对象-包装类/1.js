var mrXu =
{
    name: 'xuyu',
    age: 18,
    sex: 'box',
    run: function () {
        console.log('I am running')
        this.health++
    },
    drink: function () {
        console.log('I am drinking cool ');
        this.health--
    },
    health: 100

}
// mrXu.[a] = 'b'  
// 把a当作属性,b当作属性值。不加引号，a就相当于一个变量，b相当于key

//增
// mrXu.girlFriend='lilei'

// 删除
// delete mrXu.sex
// mrXu.drink()
// mrXu.drink()
// mrXu.drink()
// mrXu.run()
console.log(mrXu.boyFriend)//访问一个对象里面未定义的属性,undefined

