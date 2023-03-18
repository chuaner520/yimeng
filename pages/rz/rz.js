// pages/rz/rz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    file:true,
    imgArr:[],
    sc_img:[]
  },
  upload () {
    var that = this;
    if (that.data.imgArr&&that.data.imgArr.length < 1) {
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
  uploads(){
    var that=this;
    if (that.data.sc_img&&that.data.sc_img.length < 1) {
      wx.chooseImage({
        count: 1 - that.data.sc_img.length, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          that.setData({
            sc_img: that.data.sc_img.concat(res.tempFilePaths)
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
   // 预览图片，放大预览
  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgArr // 需要预览的图片http链接列表
    })
  },
  previews(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.sc_img // 需要预览的图片http链接列表
    })
  },
  // 删除图片
  deleteImg (e) {
    var that=this;
    var index = e.currentTarget.dataset.index;
    const pictureArr = that.data.imgArr[index].split('/')
    that.data.imgArr.splice(index, 1)
    that.setData({
       imgArr: that.data.imgArr || []
    })
  },
  deleteImgs (e) {
    var that=this;
    var index = e.currentTarget.dataset.index;
    const pictureArr = that.data.sc_img[index].split('/')
    that.data.imgArr.splice(index, 1)
    that.setData({
       sc_img: that.data.sc_img || []
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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