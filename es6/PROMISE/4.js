function xq() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('相亲');
            resolve('相亲成功');
        }, 2000)
    })

}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚');
            resolve('结婚成功');
        }, 1000)
    })
}

function baby() {
    console.log('baby出生');
}


xq()
    .then((res) => {
        console.log(res);
        return marry()

    })

    .then((res2) => {
        console.log(res2);
        return baby()

    })




