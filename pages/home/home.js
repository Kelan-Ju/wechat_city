//index.js

Page({
  data: {
    appColor: getApp().globalData.appColor,
    locationName: '',
    publicationType: 0,
    imgUrls: [
      'https://imgsa.baidu.com/news/q%3D100/sign=772b3024047b02080ac93be152d8f25f/242dd42a2834349b1a167604c7ea15ce36d3be1a.jpg',
      'https://imgsa.baidu.com/news/q%3D100/sign=da19c2d38b35e5dd962ca1df46c7a7f5/241f95cad1c8a7865ccc688f6909c93d71cf5048.jpg',
      'https://imgsa.baidu.com/news/q%3D100/sign=77343f6ea7ec8a13121a53e0c7029157/37d3d539b6003af31a9fc7e13b2ac65c1038b60d.jpg'
    ],

    //公告
    announcementData: [
      {
        title:'深圳地区 六月演出节目一览',
        date:'05-20',
        content: '很多企业和商家，都希望小程序中能够直接打开url外部链接，因为他们以前花了很多成本和时间，制作网站，'
      },
      {
        title: '王阳明：心怀天下者，才能为天下人所容！',
        date: '06-01',
        content: '现在一个好消息是，这个月初微信小程序团队，推出一个新组件web-view，可以在这个组件中打开你的html5网页，而且可以在web-view里面打开网页的a标签，也就是说可以实现链接跳转'
      }
    ],

    counts: [
      {
        icon: '../../icons/tabBar/tabbar_mine.png',
        title: '会员：14855',
        color: '#FF00FF'
      },
      {
        icon: '../../icons/tabBar/tabbar_mine.png',
        title: '商家：488',
        color: '#00FF00'
      },
      {
        icon: '../../icons/tabBar/tabbar_mine.png',
        title: '浏览：96814',
        color: '#007FFF'
      }
    ],

    //按钮swiper
    serviceButtons01: [
      {
        icon: '../../icons/home/service.png',
        title: '同城旅游'
      },
      {
        icon: '../../icons/home/service.png',
        title: '房产楼盘'
      },
      {
        icon: '../../icons/home/service.png',
        title: '酒店宾馆'
      },
      {
        icon: '../../icons/home/service.png',
        title: '汽车交易'
      },
      {
        icon: '../../icons/home/service.png',
        title: '商场购物'
      },
      {
        icon: '../../icons/home/service.png',
        title: '母婴亲子'
      },
      {
        icon: '../../icons/home/service.png',
        title: '餐饮美食'
      },
      {
        icon: '../../icons/home/service.png',
        title: '都市养生'
      },
      {
        icon: '../../icons/home/service.png',
        title: '家具建材'
      },
      {
        icon: '../../icons/home/service.png',
        title: '休闲娱乐'
      }
    ],
    serviceButtons02: [
      {
        icon: '../../icons/home/service.png',
        title: '服装鞋帽'
      },
      {
        icon: '../../icons/home/service.png',
        title: '生活服务'
      },
      {
        icon: '../../icons/home/service.png',
        title: '金融服务'
      },
      {
        icon: '../../icons/home/service.png',
        title: '水果生鲜'
      },
      {
        icon: '../../icons/home/service.png',
        title: '微商店铺'
      },
      {
        icon: '../../icons/home/service.png',
        title: '本地茶商'
      }
    ],

    publicationArray: [
      {
        portrait: 'http://pic.zealot.cc/15013735821/image/jpeg/1468894481247/326865/1468894426763.jpeg',
        nickname: '舌尖中国',
        time: '昨天14:31',
        type: '招聘',
        content: '2018发展在即，特别招聘：前台文员、校区教务老师个2名；（底薪2000起、提成加各类奖金）。拉丁舞、名族舞、街舞、瑜伽、流行舞老师个5名；储备老师（助教）5名；待遇优惠，可以一起共同发展。印象舞蹈自成立以来，本着踏实教学，认真负责的教育态度，培养了一大批国内外优秀人才',
        sharingPhotos: [
          'http://pic.zealot.cc/dynamic/33656502/106475/1476954279937',
          'http://pic.zealot.cc/alliance_portrait/36867729/17645/1517580279054',
          'http://pic.zealot.cc/alliance_portrait/36867764/383714/1500367739673'
        ],
        address: '乌海市五洲大酒店（乌海市海勃湾区狮城西街5号）',
        browse: 206,
        comment: 9,
        praise: 10,
        is_praised: true
      },
      {
        portrait: 'http://pic.zealot.cc/dynamic/33656502/114791/1478830251963',
        nickname: '张印&印象拉丁舞',
        time: '昨天14:31',
        type: '广告',
        content: '印象舞蹈暑假预报名价值360元课程仅需198，名额有限，预购从速！！地址：市五完小向西50米，电话：13848306262',
        sharingPhotos: [
          'http://pic.zealot.cc/dynamic/33656502/10159/1495855318559',
          'http://pic.zealot.cc/dynamic/33656502/106475/1476954279937',
          'http://pic.zealot.cc/dynamic/33656502/108766/1476754009397'
        ],
        address: '内蒙古自治区乌海市乌达区解放南路12号',
        browse: 206,
        comment: 9,
        praise: 10,
        is_praised: false
      },
      {
        portrait: 'http://pic.zealot.cc/UploadFiles/image/2018-06-01/170417800699617.jpg',
        nickname: '农民刘亦兵',
        time: '昨天14:31',
        type: '新闻',
        content: '46岁的刘亦兵是银川市贺兰县一处飞行营地的动力悬挂滑翔飞行教练。17岁初中毕业在家务农的刘亦兵偶然看到一本飞行杂志，萌发了自制飞机的念头。',
        sharingPhotos: [
          'http://pic.zealot.cc/61461/image/jpeg/1470738308557/271996/1470738295974.jpeg',
          'http://pic.zealot.cc/alliance_background/61476/80482/1473156408513',
          'http://pic.zealot.cc/alliance_background/61461/368461/1472709559221'
        ],
        address: '银川市贺兰县一处飞行营地',
        browse: 206,
        comment: 9,
        praise: 10,
        is_praised: true
      }
    ],

    //tableView
    shopArray: [
      {
        icon: '../../icons/home/building.png',
        name: '灵创互动（福建）文化科技有限公司',
        distance: '435.7km',
        star: 5,
        advantage: [
          'VR全景',
          '影视',
          '专注品质',
          '3D',
          '无人机'
        ]
      },
      {
        icon: '../../icons/home/building.png',
        name: '活力女孩',
        distance: '435.7km',
        star: 3,
        advantage: [
          '干净卫生',
          '环境优雅',
          '专注品质'
        ]
      },
      {
        icon: '../../icons/home/building.png',
        name: '北欧旋律家具',
        distance: '435.7km',
        star: 5,
        advantage: [
          'VR全景',
          '影视',
          '专注品质'
        ]
      },
      {
        icon: '../../icons/home/building.png',
        name: '车仆汽车美容漳州店',
        distance: '435.7km',
        star: 2,
        advantage: [
          '服务周到',
          '企宣',
          '北欧风格'
        ]
      }
    ]
  },

  onLoad:function(options) {
    this.getLocationName();
  },

  getLocationName: function() {
    var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
    var qqmapsdk;

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'BB7BZ-LI5C6-WPXSB-ENB7C-FUGYE-VYFZD'
    });

    var that = this;
    // 调用接口
    //1、获取当前位置坐标
    wx.getLocation({
      //type: 'wgs84',
      type: 'gcj02',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            that.setData({
              locationName: address
            })
          }
        })
      }
    })
  },

  //事件处理
  addressChoose: function(e) {
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          locationName: res.name
        })
      },
    })
  },

  // 搜索框点击
  gotoSearch: function(e) {
    wx.navigateTo({
      url: 'search/search',
    })
  },

  announcementTap: function(e) {
    var data = e.currentTarget.dataset.item;
    // console.log('当前页：',data.title,data.url);
    wx.navigateTo({
      url: 'announcement/announcement?title=' + data.title +'&content='+data.content
    })
  },

  announcementClose: function(e) {
    this.setData({
      announcementData:[]
    })
  },

  publicationClick: function(e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'new') {
      this.setData({ publicationType: 0 });
    } else {
      this.setData({ publicationType: 1 });
    }
  },

  //联系Ta
  contact: function(e) {
    wx.makePhoneCall({
      phoneNumber: '13100706118',
    })
  },

  // 图片查看
  previewImage: function(e) {
    var currentUrl = e.currentTarget.dataset.currentUrl;
    var urls = e.currentTarget.dataset.urls;
    wx.previewImage({
      current: currentUrl,
      urls: urls
    })
  },

  // 点赞
  praiseClick: function(e) { 
    var index = e.currentTarget.dataset.index;
    var isSelected = e.currentTarget.dataset.isSelected;
    var currentPraiseCount = e.currentTarget.dataset.praiseCount;

    var toCount = isSelected ? currentPraiseCount-1 : currentPraiseCount+1;

    var praise = 'publicationArray[' + index + '].is_praised';
    var count = 'publicationArray[' + index + '].praise';
    // console.log('点赞:', index)
    this.setData({
      [praise]: !isSelected,
      [count]: toCount
    })
  },

  // 分享
  shareClick: function(e) {
    this.onShareAppMessage(e);
  },
  // 分享接口
  onShareAppMessage: function (res) {
    console.log('分享接口:',res);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})