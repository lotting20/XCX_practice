Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  systemHandler(){
    // console.log('1、文件系统中用户目录路径：', wx.env)
    // console.log('2、判断小程序的API、回调、参数、组件是否在当前版本可用：', wx.canIUse('button.open-type.contact'))
    // console.log('3、base64字符串转成ArrayBuffer对象：', wx.base64ToArrayBuffer('CxYh'))
    // const arrayBuffer = new Uint8Array([11,22,33])
    // console.log('4、ArrayBuffer转成Base64字符串：', wx.arrayBufferToBase64(arrayBuffer))
    
    console.log('5、跳转系统蓝牙设置页,仅支持安卓，基础库2.20.1 开始支持')
    wx.openSystemBluetoothSetting({
      success(res){
        console.log(res)
      }
    })
    
  //  console.log('6、跳转系统微信授权页，基础库2.20.1 开始支持：')
  //   wx.openAppAuthorizeSetting({
  //     success (res) {
  //       console.log(res)
  //     }
  //   }),
  //   console.log('7、获取窗口信息，2.20.1支持使用')
  //   const windowInfo = wx.getWindowInfo()
  //   console.log(windowInfo.pixelRatio)

  //   console.log('8、获取设备设置信息，2.20.1支持使用')
  //   const systemSetting = wx.getSystemSetting()
  //   console.log(systemSetting.bluetoothEnabled)
    
    console.log('9、获取系统信息')
    try {
      const res = wx.getSystemInfoSync()
      console.log(res.model, ' ', res.pixelRatio, ' ', res.windowWidth, ' ', res.windowHeight, ' ', res.language, ' ', res.version, ' ', res.platform)
    } catch (e) {
      // Do something when catch error
      console.log('发生异常：', e)
    }
    console.log('10、获取系统信息，使用getSystemInfoSync')
    try {
      const res = wx.getSystemInfoSync()
      console.log(res.model, ' ', res.pixelRatio, ' ', res.windowWidth, ' ', res.windowHeight, ' ', res.language, ' ', res.version, ' ', res.platform)
    } catch (e) {
      // Do something when catch error
    }
    console.log('11、获取当前环境对Skyline渲染引擎的支持情况')
    // wx.getSkylineInfo({
    //   success(res){
    //     console.log(res)
    //   }
    // })
    console.log('12、获取webview小程序的userAgent:')
    // 异步方式，返回promise对象
    wx.getRendererUserAgent().then(userAgent => console.log(userAgent))

    console.log('13、获取设备基础信息：')
    const deviceInfo = wx.getDeviceInfo()
    console.log(deviceInfo.abi)
    console.log(deviceInfo.benchmarkLevel)
    console.log(deviceInfo.brand)
    console.log(deviceInfo.model)
    console.log(deviceInfo.platform)
    console.log(deviceInfo.system)

    console.log('14、获取微信app的基础信息：')
    const appBaseInfo = wx.getAppBaseInfo()
    console.log("🚀 ~ file: systemAPI.js:73 ~ systemHandler ~ appBaseInfo:", appBaseInfo)
    
    console.log(appBaseInfo.SDKVersion)
    console.log(appBaseInfo.enableDebug)
    console.log(appBaseInfo.host)
    console.log(appBaseInfo.language)
    console.log(appBaseInfo.version)
    console.log(appBaseInfo.theme)

    console.log('15、获取微信APP授权设置：')
    const appAuthorizeSetting = wx.getAppAuthorizeSetting()
    console.log("🚀 ~ file: systemAPI.js:82 ~ systemHandler ~ appAuthorizeSetting:", appAuthorizeSetting)
    // console.log(appAuthorizeSetting.albumAuthorized)
    // console.log(appAuthorizeSetting.bluetoothAuthorized)
    // console.log(appAuthorizeSetting.cameraAuthorized)
    // console.log(appAuthorizeSetting.locationAuthorized)
    // console.log(appAuthorizeSetting.locationReducedAccuracy)
    // console.log(appAuthorizeSetting.microphoneAuthorized)
    // console.log(appAuthorizeSetting.notificationAlertAuthorized)
    // console.log(appAuthorizeSetting.notificationAuthorized)
    // console.log(appAuthorizeSetting.notificationBadgeAuthorized)
    // console.log(appAuthorizeSetting.notificationSoundAuthorized)
    // console.log(appAuthorizeSetting.phoneCalendarAuthorized)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

})