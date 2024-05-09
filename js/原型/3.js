Car.prototype.product='xiaomi'

function Car(){
     this.name='su7'
}

let car=new Car()
car.name='保时捷'
car.product='huawei'
car.nickname='小红'


function Bus(){}


Car.prototype={
         constructor:Bus
}

function Car(){

}
let car=new Car()



// console.log(car.constructor)    constructor用来记录对象是由谁来创建的  




