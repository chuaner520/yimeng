// pages/myfb/myfb.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:'0',
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
    ds:[
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
    love:[
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  swiperTab:function( e ){
    var that=this;
    that.setData({
     currentTab:e.detail.current
    });
   },
   clickTab: function( e ) { 
  
    var that = this; 
    
    if( this.data.currentTab === e.target.dataset.current ) { 
     return false; 
    } else { 
     that.setData( { 
      currentTab: e.target.dataset.current 
     }) 
    } 
   } ,
  onLoad:function() {
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
    var that=this
    var help=wx.getStorageSync('helpm')
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