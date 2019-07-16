// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        id: 0,
        image: '',
        name: '寻人启事',
      },
      {
        id: 1,
        image: '',
        name: '爆料速递',
      },
      {
        id: 2,
        image: '',
        name: '便民服务',
      },
      {
        id: 3,
        image: '',
        name: '商家宣传',
      },
      {
        id: 4,
        image: '',
        name: '房屋出租',
      },
      {
        id: 5,
        image: '',
        name: '求职招聘',
      },
      {
        id: 6,
        image: '',
        name: '微商专区',
      },
      {
        id: 7,
        image: '',
        name: '打听求助',
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
    var context = wx.createCanvasContext("line");
    context.setStrokeStyle('#aaa')
    context.setLineWidth(0.5)
    context.rect(60,22.5,40,0.5)
    context.rect(275,22.5,40,0.5)
    context.stroke()
    context.draw()
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
  joinClick: function (e) {
    wx.navigateTo({
      url: '../shop/join/join',
    })
  },
})