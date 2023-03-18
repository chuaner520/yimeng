// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login(){
    wx.getUserProfile({
      desc: '必须授权才能继续使用',
      success:res=>{
        wx.setStorageSync('user',res.userInfo)
        var userdemo=wx.getStorageSync('user')
        if(userdemo!=""){
          wx.navigateBack({
            delta:1
          })
        }
        var userInfo = res.userInfo
        var username=res.userInfo.nickName
        var avatarUrl=res.userInfo.avatarUrl
        var gender=res.userInfo.gender
        // wx.login({
        //   success: (res) => {
        //     var cod=res.code
        //     var time=new Date()
        //     wx.request({
        //       url: '后端登陆接口',
        //       data:{
        //         code:cod,
        //         userInfo:userInfo,
        //         username:username,
        //         gender:gender,
        //         avatarUrl:avatarUrl,
        //         time:time
        //       },
        //       method:"POST",
        //       header: { "Content-Type": "application/x-www-form-urlencoded" },  
        //       success(res){
        //         console.log(res.data.messages)
        //         if(res.data.resultCode==200){
        //           wx.setStorageSync('sessionkey', res.data.data[0].session_key)
        //           wx.setStorageSync('openid', res.data.data[0].openid)
        //           wx.setStorageSync('user', userInfo)
        //           wx.setStorageSync('time', res.data.data[1].time)
        //           wx.navigateBack({
        //             datail:1
        //           })
        //         }
        //         else if(res.data.resultCodes==200){
        //           wx.showModal({
        //             title: '忆梦欢迎您注册使用',
        //             content: '',
        //             showCancel:false,
        //             complete: (res) => {
        //               if (res.cancel) {
                        
        //               }
                  
        //               if (res.confirm) {
        //                 wx.navigateBack({
        //                   datail:1
        //                 })
        //               }
        //             }
        //           })
        //         }
        //       }
        //     })
        //   },
        // })
      }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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