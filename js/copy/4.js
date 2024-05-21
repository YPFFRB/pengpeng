const user={
    name:{
        firstName:'牛',
        lastName:'蜗',
    },
    age:18
}
const newUser=structuredClone(user)
user.name.firstName='牛牛'

console.log(newUser);