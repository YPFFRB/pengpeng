#显示类型转换(原始值转原始值)
1.原始值转布尔  Boolean(xx)
2.原始值转数字   Number(xx)
3.原始值转字符串  String(xx)
4.原始值转对象   new Xxx()

#隐式类型转换(对象转原始值)

//所有对象转原始值都会调用调用toString//Object.prototype.toString()
1.{}.toString()得到由"[object和class和]"组成的字符串
2.[].toString()返回由数组内部元素以逗号拼接的字符串
3.xx.toString()返回字符串字面量

-valueOf()也可以将对象转化成原始类型
1.包装类对象

#ToPrimitive(obj,String)===>String(obj)
1.如果接收到的是原始值，直接返回原始值
2.否则调用toString方法，如果得到原始值，返回
3.否则调用valueOf方法，如果得到原始值，返回
4.报错
-对象转布尔，一定是true
#一元操作符
#ToPrimitive(obj,Number)===>String(obj)
1.如果接收到的是原始值，直接返回原始值
[//]: # (1.任何对象转布尔，都是true)

[//]: # (2.对象转字符串   ToPrimitive&#40;&#41;)

[//]: # (2.对象转数字    ToNumber ToPrimitive)

[//]: # ()
[//]: # (- ——元运算符 +)

[//]: # (- #ToPrimitive&#40;&#41;)

[//]: # (- 1.如果接收到的是原始值，直接返回值)

[//]: # (- 2.否则调用toString 方法，如果得到原始值，返回)

[//]: # (- 3. 否则，调用valueof 方法，如果得到原始值，返回)

[//]: # (3. 4.报错)
v1+v2