// 小程序API，拿到app.js里的App对象
const app = getApp()

Page({
  data: {
    txt: '123',
    slides: null
  },
  // 生命周期 加载时
  onLoad() {
    // 调用Page上的 setData方法，设置slides
    setTimeout(() => {
        this.setData({
            slides: app.globalData.slides,
        })
    }, 1000)
    
  }
})
