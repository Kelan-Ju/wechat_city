//logs.js
// const util = require('../../utils/util.js')

// Page({
//   data: {
//     //页面显示的图片
//     image: ["http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"],
//     auto:{}, //页面图片对应的自适应高度
//     array: [1,2,3,4,5]
//   },

//   onShareAppMessage: function () {
//     return {
//       title: '转发标题',
//       path: '/page/user?id=123'
//     }
//   },

//   autoImage: function (e) {
//     var imageWidth = e.detail.width,
//       imageHeight = e.detail.height,
//       imageScale = imageHeight / imageWidth;

//     var autoWidth = "",   //自适应的宽高
//       autoHeight = "";

//     //获取图片的宽高
//     wx.getSystemInfo({
//       success: function (res) {
//         autoWidth = res.windowWidth;
//         autoHeight = autoWidth * imageScale;
//       },
//     });

//     //将图片的data-index作为image对象的key，然后存储图片自适应的宽高值
//     var image = this.data.auto;
//     image[e.target.dataset.index] = {
//       width: autoWidth,
//       height: autoHeight
//     };

//     //更新页面的显示
//     this.setData({
//       auto: image
//     })
//   }
// })
// Page({
//   data: {
//     staffA: { firstName: 'Hulk', lastName: 'Hu' },
//     staffB: { firstName: 'Shang', lastName: 'You' },
//     staffC: { firstName: 'Gideon', lastName: 'Lin' }
//   }
// })
// Page({
//   data: {
//     objectArray: [
//       { id: 5, unique: 'unique_5' },
//       { id: 4, unique: 'unique_4' },
//       { id: 3, unique: 'unique_3' },
//       { id: 2, unique: 'unique_2' },
//       { id: 1, unique: 'unique_1' },
//       { id: 0, unique: 'unique_0' },
//     ],
//     numberArray: [1, 2, 3, 4]
//   },
//   switch: function (e) {
//     const length = this.data.objectArray.length
//     for (let i = 0; i < length; ++i) {
//       const x = Math.floor(Math.random() * length)
//       const y = Math.floor(Math.random() * length)
//       const temp = this.data.objectArray[x]
//       this.data.objectArray[x] = this.data.objectArray[y]
//       this.data.objectArray[y] = temp
//     }
//     this.setData({
//       objectArray: this.data.objectArray
//     })
//   },
//   addToFront: function (e) {
//     const length = this.data.objectArray.length
//     this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
//     this.setData({
//       objectArray: this.data.objectArray
//     })
//   }, addNumberToFront: function (e) {
//     this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
//     this.setData({
//       numberArray: this.data.numberArray
//     })
//   }
// })
// Page({
//   data: {
//     item: {
//       index: 0,
//       msg: 'this is a template',
//       time: '2016-09-15'
//     }
//   }
// })
Page({
  data:{
    array:[1,2,3,4,5,6]
  }
})
