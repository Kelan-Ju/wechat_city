// pages/shop/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appColor: getApp().globalData.appColor,
    hasRead: false,
    installations: [
      {
        id: '0',
        name: '刷卡支付'
      },
      {
        id: '1',
        name: '免费WiFi'
      },
      {
        id: '2',
        name: '免费停车'
      },
      {
        id: '3',
        name: '禁止吸烟'
      },
      {
        id: '4',
        name: '提供包间'
      },
      {
        id: '5',
        name: '沙发休闲'
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

  // 用户点击“入驻须知”
  protocolClick: function(e) {
    var value = e.detail.value;
    var selected = value[0];
    console.log('状态：', selected, e.detail.value);
    // this.setData({
    //   hasRead: !selected
    // })
  }
})