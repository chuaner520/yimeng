// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_pic:'../../images/user.jpg',
    user_name:'川儿',
    array: ['男', '女'],
    user_js:'今天比昨天更加美好你说呢',
    user_photo:[
      {
        pic:'../../images/user.jpg'
      },
      {
        pic:'../../images/hzjm.png'
      },
      {
        pic:'../../images/hzjm.png'
      },
      {
        pic:'../../images/hzjm.png'
      },
      {
        pic:'../../images/hzjm.png'
      },
      {
        pic:'../../images/hzjm.png'
      },
    ],
    imgArr:[],
    lis:[]
  },
  upload () {
    var that = this;
    if (that.data.imgArr&&that.data.imgArr.length < 6) {
      wx.chooseImage({
        count: 1 - that.data.imgArr.length, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          that.setData({
            imgArr: that.data.imgArr.concat(res.tempFilePaths)
          })
        }
      })
    } else {
      wx.showToast({
        title: '最多上传1张图片',
        icon: 'none',
        duration: 3000
      });
    }
  },
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgArr // 需要预览的图片http链接列表
    })
  },
  deleteImg (e) {
    var that=this;
    var index = e.currentTarget.dataset.index;
    const pictureArr = that.data.imgArr[index].split('/')
    that.data.imgArr.splice(index, 1)
    that.setData({
       imgArr: that.data.imgArr || []
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindPickerChange: function(e) {
    // this.setData({
    //   index: e.detail.value
    // })
    wx.showModal({
      title: '禁止修改性别',
      content: '',
      showCancel: false,
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
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
    let that=this;
    wx.getStorage({
      key:"user",
      success: function(res) {
        that.setData({
          lis:res.data
        })
      }
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