// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appColor: getApp().globalData.appColor,
    rankingType: 0,
    shops: [
      {
        image: '../../icons/shop/food1.png',
        name: '香麦鲜蛋糕连锁（宝安店）',
        starScore: 9,
        kinds: [
          '蛋糕',
          '小龙虾'
        ],
        distance: '150m',
        tip: '心心相印87元，巧克力水果蛋糕优惠价8折'
      },
      {
        image: '../../icons/shop/food2.jpg',
        name: '虾食尚小龙虾',
        starScore: 6,
        kinds: [
          '大闸蟹',
          '蛋糕',
          '小龙虾'
        ],
        distance: '250m',
        tip: '98元小龙虾精品套餐，168元小龙虾经典套餐'
      },
      {
        image: '../../icons/shop/food3.jpg',
        name: '龙巢宇泰龙虾（宝安店）',
        starScore: 7,
        kinds: [
          '蛋糕',
          '小龙虾'
        ],
        distance: '45m',
        tip: '98元小龙虾精品套餐，168元小龙虾经典套餐'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  // 按钮点击
  joinClick: function(e) {
    wx.navigateTo({
      url: 'join/join',
    })
  },

  rankingClick: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == 'ranking') {
      this.setData({ rankingType: 0 });
    } else {
      this.setData({ rankingType: 1 });
    }
  },
})