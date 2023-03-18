// pages/shudong/shudong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0, 
    titleBottom: 0, 
    error: false,
    card:[
      {
        id:1,
        username:"文艺",
        qx:"管理员",
        userpic:"https://cclove.club/xcx/user.jpg",
        timer:"2023-3-17 01:26",
        content:'忆梦校园服务平台欢迎您的加入您的加入使我蓬荜生辉😮‍💨',
        card_pic:[
          {
            pic: "https://cclove.club/xcx/user.jpg"
          },
          {
            pic: "https://cclove.club/xcx/ok.jpg"
          }
        ],
        pl:[
          {
            id:1,
            content:'非常不错的平台',
            timer:'2023-3-17 13:00'
          },
          {
            id:2,
            content:'非常不错的平台',
            timer:'2023-3-17 13:00'
          },
        ],
        dz:5400,
      },
      {
        id:2,
        username:"忆梦",
        userpic:"https://cclove.club/xcx/ok.jpg",
        timer:"2023-3-17 01:26",
        content:'今天你努力了吗',
        card_pic:[
          {
            pic: "https://cclove.club/xcx/user.jpg"
          },
          {
            pic: "https://cclove.club/xcx/ok.jpg"
          },
          {
            pic: "https://cclove.club/xcx/wdl.png"
          },
          {
            pic: "https://cclove.club/xcx/icons/10.png"
          }
        ],
        pl:[
          {
            id:1,
            content:'非常不错的平台',
            timer:'2023-3-17 13:00'
          },
          {
            id:2,
            content:'非常不错的平台',
            timer:'2023-3-17 13:00'
          },
          {
            id:2,
            content:'非常不错的平台',
            timer:'2023-3-17 13:00'
          },
        ],
        dz:5400,
      },
    ],
    adtop:false,
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
  goTop: function (e) {  
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  onPageScroll: function (e) {
    if(e.scrollTop>55){
      this.setData({
        adtop:true
      })
    }
    else{
      this.setData({
        adtop:false,
      })
    }
  },
  onLoad(options) {
    this.height()
    
  },
  geturl(){
    wx.switchTab({
      url: '/pages/index/index',
    })
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