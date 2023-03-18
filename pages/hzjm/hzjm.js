// pages/hzjm/hzjm.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0, 
    titleBottom: 0,
    items:[
      {
        value:'1',
        name:'男'
      },
      {
        value:'2',
        name:'女'
      }
    ]
  },
  radioChange:function(e){
    var that = this;
    that.setData({
      Processing:e.detail.value
    })
  },
  getut(){
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getHeights() {
    let that = this
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      navBarHeight: systemInfo.statusBarHeight + 44,
      titleBottom: systemInfo.statusBarHeight
    })
  },
  submit:function(e){
    var user=wx.getStorageSync('user')
    var username=user.nickName
    var userimg=user.avatarUrl
    if(e.detail.value.username==""){
      wx.showToast({
        title: '姓名不能为空',
        icon:'error'
      })
    }
    else if(e.detail.value.lx==""){
      wx.showToast({
        title: '联系方式不允许为空',
        icon:'error'
      })
    }
    else if(!(/^1[34578]\d{9}$/.test(e.detail.value.lx))){
      wx.showToast({
        title: '手机号格式错误',
        icon:'error'
      })
    }
    else if(e.detail.value.six==""){
      wx.showToast({
        title: '性别请选择',
        icon:'error'
      })
    }
    else if(e.detail.value.content==""){
      wx.showToast({
        title: '内容请填写',
        icon:'error'
      })
    }
    else{
      wx.request({
        url: "后端接口地址", // 仅为示例，并非真实的接口地址
        method: 'post',
        data: {
            Uname: username,
            userimg: userimg,
            username:e.detail.value.username,
            contact:e.detail.value.lx,
            six:e.detail.value.six,
            content:e.detail.value.content,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success(res) {
          wx.showModal({
            title: '投递成功请等待回复吧～',
            content: '',
            showCancel:false,
            complete: (res) => {
              if (res.cancel) {
                
              }
          
              if (res.confirm) {
                wx.navigateBack({
                  detail:1
                })
              }
            }
          })
        }
      })
    }
  },
  onLoad(options) {
    var time=wx.getStorage({
      key:'time',
      success:function (res){
        var timestamp = Date.parse(new Date());  
        timestamp = timestamp / 1000;  
        var so=timestamp<res.data
        if(so){

        } 
        else{
          wx.clearStorage()
        } 
      }
    })
    this.getHeights();
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