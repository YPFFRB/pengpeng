#对象
访问对象上不存在的属性，得到的是undefined，而不是报错
#创建对象
1.创建字面
2.调用系统自带的构造函数  new Object
3.调用自定义的构造函数

#构造函数new的过程
1.new会在构造函数中创建一个this对象
2.执行函数种的逻辑代码  （）
3.让this._proto__=Foo.prototype  实例对象的隐式原型===创建它的构造函数的显示原型
4.return this对象