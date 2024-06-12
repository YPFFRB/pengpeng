#图片懒加载LazyLoad,前端性能优化
网站的图片有点多
img src
前端的使命  让我们的页面快速打开
视窗范围类的图片 加载
不在可视区域内的可以推迟加载
-HTTP请求数过载问题
-没有必要一次性加载那么多图片,而是应该在用户滚动到图片时才加载
浏览器http 请求数是有上限的,
  公路
##浏览器相关
-下载线程  图片的并发下载是影响页面打开速度的关键
-缓存
-打开非常的快 img*n+同一个地址的缓存 
##优化步奏
-将原有src交给data-src 数据属性保管 懒加载
-监听滚动事件(将应该显示的图片显示出来)
-scroll (滚动到哪里可视区域的切换)event
-首屏显示 1

事件
-scroll 滚动事件
DOMContentLoaded DOM加载完成(HTML+CSS)首屏的图片  最佳时机
load 图片 script .. 加载完成,晚一点
##思想的提升
-函数的抽象
图片懒加载是前端性能优化的核心
data-src 真的地址 src 是占位图片
scrollTop+clientHeight scrollTop对比
页面加载速度是前端的永恒追求
浏览器缓存
js/css/img...静态的 都会缓存
-loadash 缓存 提供了太多开发中的工具函数
_.throttle()
节流 scroll 触发太频繁了
代码逻辑敏感
所有图片加载完成后,不再listen scroll
不要重复造轮子 lodash vue router