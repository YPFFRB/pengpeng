function identify(context){
     
     return context.name.toUpperCase()

}

function speak(context){
     var greeting='Hello I am' +identify.call(this)
     console.log(greeting)
}
var me={
        name:'xy'
}

speak.call(me)