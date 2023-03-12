Page({
  data: {
    typeVal: null,
    selectedImage: "" // 存储被选中的图片
  },

  // 点击选择图片按钮
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择1张图片
      sizeType: ['original', 'compressed'], // 可以指定原图或压缩后的图片
      sourceType: ['album', 'camera'], // 可以指定来源相册或相机
      success: function (res) {
        // 将选择的图片临时文件路径存储起来
        that.setData({
          selectedImage: res.tempFilePaths[0]
        })
      }
    })
  },

  uploadImage: function () {
    // 判断是否已选择图片
    if (!this.data.selectedImage) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      })
      return;
    }
    // 上传图片到服务器
    wx.uploadFile({
      url: 'https://example.com/upload', // 示例服务器上传接口地址
      filePath: this.data.selectedImage, // 被上传的文件的路径
      name: 'image', // 指定上传文件的标识，后端可以通过这个标识获取文件
      success: function (res) {
        // 处理上传成功的响应
        if (res.statusCode == 200) {
          wx.showToast({
            title: '上传成功'
          })
        } else {
          wx.showToast({
            title: '上传失败',
            icon: 'none'
          })
        }
      },
      fail: function () {
        // 处理上传失败的响应
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      typeVal: options.typeData
    })
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
});