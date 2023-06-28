Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  toCss(){
    wx.navigateTo({
      url: '../cssTest/index'
    })
  },
  toUpdate(){
    wx.navigateTo({
      url: '../updateAPI/updateAPI'
    })
  },
  toLifeCycle(){
    wx.navigateTo({
      url:'../lifecycleAPI/lifecycleAPI'
    })
  },
  toEventApp(){
    wx.navigateTo({
      url:'../appeventAPI/appeventAPI'
    })
  },
  toDebug(){
    wx.navigateTo({
      url:'../debugAPI/debugAPI'
    })
  },
  toRouter(){
    wx.navigateTo({
      url:'../routerAPI/routerAPI'
    })
  },
  toInterface(){
    wx.navigateTo({
      url:'../interface/interface'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

})