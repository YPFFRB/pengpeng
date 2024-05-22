#拷贝
通常只针对引用类型

#浅拷贝
基于原对象,拷贝得到一个新的对象,原对象中内容的修改会影响到新对象

-常见的浅拷贝
1.Object.create(x)
2.Object.assign({},a)//只要有一个那就为浅拷贝
3.[].concat(arr)
4.数组解构
5.arr.slice(0)
6.arr.toReversed().reverse()
-实现原理:
1.借助for in 遍历原对象,将原对象的属性值增加在新对象中
2.因为for in 会遍历到对象隐式具有的属性，通常要使用obj.hasOwnProperty(key)来判断要拷贝的属性
是不是对象显示具有的

#深拷贝
基于原对象,拷贝得到一个新的对象,原对象中内容的修改不会影响新的对象

-JSON.parse(JSON.stringify(obj))
1.不能识别BigInt 类型
2.不能拷贝 undefined Symbol function 类型的值
3.不能处理循环引用

-structuredClone();


#深拷贝
实现原理
1.借助for in遍历原对象，将原对象的属性增加在新对象中
2.因为for in 会遍历到对象隐式具有的属性，通常要使用O
