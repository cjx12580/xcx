//index.js
//获取应用实例
const app = getApp()
var postData = require("../../data/data.js");
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  onLoad: function () {
    this.setData({
      key: postData.postList
    });
  },
  onIndexTap:function (event) {
    var indexId = event.currentTarget.dataset.indexid;
    wx.navigateTo({
      url: "index-detail/index-detail?id=" + indexId
    })
  }
})
