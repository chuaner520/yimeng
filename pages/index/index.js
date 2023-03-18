// index.js
// 获取应用实例
const app = getApp()
Page({
  data:{
    navBarHeight: 0, 
    titleBottom: 0, 
    title:'忆梦',
    showDots:true,
    imgs:[
      'https://cclove.club/xcx/pc.png',
      'https://cclove.club/xcx/banner.png',
      'https://cclove.club/xcx/banners.png'
    ],
    current:0,
    menu:[
      {
        id:1,
        text:"社区动态",
        icon:"../../images/icon/shequ.png",
        bgcolor:"orange",
        navto:"../shequ/shequ",
        statac:true,
      },
      {
        id:2,
        text:"树洞投递",
        icon:"../../images/icon/tree.png",
        bgcolor:"rgb(35, 204, 102)",
        navto:"../shudong/shudong",
        statac:true,
      },
      {
        id:3,
        text:"表白墙",
        icon:"../../images/icon/glove.png",
        bgcolor:"rgb(243, 104, 127)",
        navto:"../glove/glove",
        statac:true,
      },
      {
        id:4,
        text:"失物招领",
        icon:"../../images/icon/lostandfound.png",
        bgcolor:"rgb(90, 183, 245)",
        navto:"../lost/lost",
        statac:true,
      },
      {
        id:5,
        text:"校园帮",
        icon:"../../images/icon/schoolhelp.png",
        bgcolor:"rgb(157, 90, 245)",
        navto:"../help/help",
        statac:true,
      },
    ],
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
    file:false
  },
  get_user(){
    wx.navigateTo({
      url: '../mp/mp',
    })
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
    if(e.scrollTop>100){
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
  geturl(e){
    var menu=this.data.menu
    var id=JSON.parse(e.currentTarget.dataset.id)-1
    var url=menu[id].navto
    wx.navigateTo({
      url: url,
    })
  },
  swiperCurrentchang(e){
    let {current} = e.detail
    this.setData({
      current
    })
  },
  onShareAppMessage() {
    return {
        title:  decodeURIComponent('我在忆梦平台等着你～'), 
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
  onLoad() {
    this.height()
  },
})
