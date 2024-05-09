Car.prototype.name = 'su7'
Car.prototype.lang = 5000
Car.prototype.height = 1400

function Car(color,owner){
  
    this.color=color
    this.owner=owner

}
let x=new Car('black','x')
let y= new Car('red', 'y')
console.log(x,y)
