// pages/help/help.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0, 
    titleBottom: 0, 
    error: false,
    help:[
      {
        id:'1',
        ddh:'11-4-2224',
        address:'C栋357'
      },
      {
        id:'1',
        ddh:'11-4-2224',
        address:'C栋357'
      },
      {
        id:'1',
        ddh:'11-4-2224',
        address:'C栋357'
      },
    ],
    adtop:false,
    file:false
  },
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
    var that=this
    if(e.scrollTop>10){
      that.setData({
        adtop:true,
        file:true
      })
    }
    else{
      that.setData({
        adtop:false,
        file:false
      })
    }
  },
  prev(event){
    let src=event.currentTarget.dataset.src;
    let url=event.currentTarget.dataset.list;
    var imgList = []; 
    for (let i = 0; i < url.length; i++) {
      imgList.push(url[i].pic);
    }
    wx.previewImage({
      current:src,
      urls: imgList,
    })
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
  getinde(){
    wx.switchTab({
      url: '/pages/index/index',
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