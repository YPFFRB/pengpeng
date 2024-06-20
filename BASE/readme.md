#Vue
单页应用框架,整个项目只有一个html文件,就算你看到了多个页面,那也不过是个代码片段,在这一个html里面生效

#指令
v-text
v-html
v-on(可以缩写成@) 给一个dom绑定事件
v-bind 给一个dom 绑定属性
v-if 直接移除dom结构
v-show 通过css的display:none 将dom隐藏

#watch
watch(xx,(newVal,oldVal)=>{

})
监听一个属性值,当该属性值变更时,会自动触发回调

#计算属性