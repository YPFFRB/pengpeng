grandFather.prototype.say=function(){
    console.log('haha')
}


function grandFather(){
     this.age=60
     this.like='drink'
}


Father.prototype=new grandFather()
function Father(){
    this.age = 40
    this.fortune={
          card:'visa'
    }
}


Son.prototype=new Father()
function Son(){
   this.age=18
}



console.log(son.age)
console.log(son.age)
console.log(son.like)

