class Person{
    constructor() {
        this.name='Tom'
    }

    static  getInstance(){
        let instance=null
        return function (){
            if (!instance){
                instance=new Person()
            }
            return instance
        }

        // if (!Person.instance){
        //     Person.instance=new Person()
        // }
        // return Person.instance
    }
}


const simple =Person.getInstance()
let p1=simple()
let p2=simple()
// let p1=Person.getInstance()
// let p2=Person.getInstance()
console.log(p1===p2);