// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// Person.prototype.say=function (){
//     console.log('hello');
// }
//
// let p=new Person('牛哥',18)
//
// console.log(p.say());
// Person.prototype.say=function (){
//     console.log('hello');
// }
// Person.eat=function (){
//     console.log('I like food');
// }
// Person.prototype.sex='girl';
// Person.prototype.addAge=function (){
//     this.age++
// }
// p.addAge()
// console.log(p.age);

class Person{
   #count=1
    constructor(name,age) {
        this.name=name
        this.age=age
       //this.count=1
    }

    run(){
        console.log('running',this.#count);
    }
    static eat(){//static 静态方法也称私有方法
        console.log('I like food');
    }
    get sex(){
        return 'girl'
    }
   set addAge(val){
        this.age=val
    }
}
let p=new Person('牛哥',18)
//console.log(typeof Person)
//p.addAge(20)
console.log(p.run())
//console.log(p.sex)
