// pages/my/my.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: 0, 
    titleBottom: 0,
    ad:false,
    fun:[
      {
        id:'1',
        nameL:'我已发布',
        pic:'../../images/icon/myfb.png',
        address:"../myfb/myfb"
      },{
        id:'2',
        nameL:'合作交流',
        pic:'../../images/icon/dyzx.png',
        address:"../hzjm/hzjm"
      },{
        id:'3',
        nameL:'联系我们',
        pic:'../../images/icon/contact.png',
        address:"../contact/contact"
      },{
        id:'5',
        nameL:'退出登陆',
        pic:'../../images/icon/loginout.png',
      }
    ],
    ban_pic:'http://cclove.club/xcx/img.png',
    userInfo:[
    ],
    log:true
  },

  /**
   * 组件的方法列表
   */
  getuse(){
    wx.navigateTo({
      url: '../user/user',
    })
  },
  get_rz(){
    wx.navigateTo({
      url: '../rz/rz',
    })
  },
  tz:function(e){
    var that=this
    let url= e.currentTarget.dataset.indd;
    if(url+1<that.data.fun.length){
      wx.navigateTo({
        url: that.data.fun[url].address,
      })
    }
    else{

    }
    if(url==3){
      wx.removeStorage({
        key: 'user',
        success (res) {
            that.onShow()
        }
      })
      wx.removeStorage({
        key: 'openid',
        success (res) {
        }
      })
      wx.removeStorage({
        key: 'sessionkey',
        success (res) {
        }
      })
    }
  },
  getHeights() {
    let that = this
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      navBarHeight: systemInfo.statusBarHeight + 44,
      titleBottom: systemInfo.statusBarHeight
    })
  },
  geth(){
    wx.navigateTo({
      url: '../hzjm/hzjm',
    })
  },
  onLoad(){
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
    let user = wx.getStorageSync('user')
    if(user==""){
      wx.navigateTo({
        url: '../login/login',
      })
    }
    this.setData({
      userInfo: user
    })
  },
  onShow:function(){
    var that=this
    var data=[]//定义一个空数组
    that.setData({
      btnaswear: data,
      updatalist1: data
    })
    that.onLoad()
  }
})
