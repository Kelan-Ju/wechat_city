// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appColor: getApp().globalData.appColor,
    types:[
      {
        name:'吃饭',
        index: 0,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'住店',
        index: 1,
        categories: [
          {
            categoryName: '民宿',
            id: 0
          },
          {
            categoryName: '酒店',
            id: 1
          }
        ]
      },
      {
        name:'电影',
        index: 2,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '按星级',
            id: 2
          }
        ]
      },
      {
        name:'租房',
        index: 3,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'求职',
        index: 4,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'招聘',
        index: 5,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'二手',
        index: 6,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'宠物',
        index: 7,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      },
      {
        name:'家政',
        index: 8,
        categories: [
          {
            categoryName: '全部',
            id: 0
          },
          {
            categoryName: '附近',
            id: 1
          },
          {
            categoryName: '智能排序',
            id: 2
          },
          {
            categoryName: '筛选',
            id: 3
          }
        ]
      }
    ],
    swiper_height: 0,
    btnIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_swiper_height()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  get_swiper_height: function () {
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        // console.log('屏幕宽高 =', res.windowWidth ,res.windowHeight);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
          swiper_height: res.windowHeight - 40
        })
      }
    })
  },

  swiperScroll: function(e) {
    // console.log('swiper滑动：',e);
    this.setData({
      btnIndex:e.detail.current
    })
  },

  typeSelected: function(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      btnIndex: index
    })
  }
})

