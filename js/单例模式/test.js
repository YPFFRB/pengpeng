function foo(){
    let a=1

    function bar(){
        console.log(a);
    }
    return bar
}

foo()