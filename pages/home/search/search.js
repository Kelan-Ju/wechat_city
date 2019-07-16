// pages/home/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appColor: getApp().globalData.appColor,
    search_historys: [
      {
        id: 0,
        content: '好吃的',
      },
      {
        id: 1,
        content: '周末去哪儿',
      },
      {
        id: 2,
        content: '去漂流',
      },
      {
        id: 3,
        content: '哪里逛街好',
      },
      {
        id: 4,
        content: '待在家',
      },
      {
        id: 5,
        content: '网吧',
      },
      {
        id: 6,
        content: '图书馆',
      },
      {
        id: 7,
        content: '骑行路线',
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
  
  }
})