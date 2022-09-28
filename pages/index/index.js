// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexCurrent:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var that = this;
        wx.request({
            url: 'http://baobab.kaiyanapp.com/api/v4/tabs/selected', //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {

                var result = res.data.itemList.filter(k => k.type == 'video')
                console.log(result)
                that.setData({
                    datas: result,
                })
            }
        })
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

    /****这里是自定义函数 */
    /**
     * 暂停或者播放视频
     */
    playvideo: function (e) {
        console.log(e);
        var that = this;
        var curIdx = e.currentTarget.id;
        console.log(that);

        // 之前有播放时，将其暂停
        if (that.data.indexCurrent != null) {
            let videoContextPrev = wx.createVideoContext(that.data.indexCurrent)
            if (that.data.indexCurrent != curIdx) {
                videoContextPrev.stop()
            }
            that.setData({
                indexCurrent: curIdx
            })
        } else {
            // 当前没有播放的播放视频
            that.setData({
                indexCurrent: curIdx
            })
        }
    }
})