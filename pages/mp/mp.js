// pages/mp/mp.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0, 
    titleBottom: 0,
    user:[
      {
      }
    ],
    mp:[

    ] 
  },
  getinde(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  onShareAppMessage() {
    return {
        title: "ok", 
        imageUrl: "https://cclove.club/xcx/user.jpg",
        path: "/pages/index/index" 
    }
  },
  height() {
    let that = this
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      navBarHeight: systemInfo.statusBarHeight + 44,
      titleBottom: systemInfo.statusBarHeight
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.height()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})