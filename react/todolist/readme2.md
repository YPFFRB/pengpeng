#Todos App
-划分组件树  组件思路
     -开发、交流、互动、汇报的基本单位
     -DOM 树太微观了,
     -组件树很好表达页面的构成和功能
     -根组件接管一切 react/vue
     -父子组件 
     -容器组件
       循环列表请加两个组件
-性能优化
   -页面的加载速度
     -生成DOM树
     -渲染CSSOM树
     -script 放到底部去
     -DOM+CSSOM=渲染树
     -布局树 (+盒子模型+bfc+zIndex) 
     -GPU去绘制页面了 像素 静态页面
-css 选择器
   * ,标签下,从右到左匹配的
-数据流设计
   -父子组件通信(TodoList TodoForm两兄弟状态的共享)
   * App管理Todos addTodo,removeTodo,toggleTodo
   * 数据流向由父-》子 子通过调用父props传过来的方法 通知数据修改
   * props,state组件的数据
   * 应用开发=Component UI +数据管理
   * -数据驱动界面
-响应式开发
-es6 大型企业级项目开发 支持传统面向对象
  -类型组件  class App extends Component
<App/>
  -render()盖住 Component 抽象的render 方法提供JSX
-vue 与react 区别
  -vue 有各种指令
  -react 不支持双向绑定
   -表单受控组件 this.state.inputText 控制
   -单向的数据绑定 value={}
   -onChange 事件