// pages/shequ/shequ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ]
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