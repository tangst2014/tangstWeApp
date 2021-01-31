// index.js
// 获取应用实例
const app = getApp().globalData
let listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Page({
  data: {
    currentIndex:"0",
    tabs: ["基础用法", "升级用法", "天猫动画", "京东下拉", "弹射火箭", "端午安康"],
    active: 0,
    left: "",
    list: [], // 基础用法
    diyList: [], // 升级用法
    tmList: [], // 天猫动画
    jdList: [], // 京东下拉
    huojianList: [], // 弹射火箭
    dwList: [], // 端午安康
    tqList: [], // 日期天气
    scroll: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'default',
        style: 'black',
        background: "#000"
      },
      loadmore: {
        type: 'default',
        icon: 'http://upload-images.jianshu.io/upload_images/5726812-95bd7570a25bd4ee.gif',
        background: '#f2f2f2',
        // backgroundImage: 'http://coolui.coolwl.cn/assets/bg.jpg',
        title: {
          show: true,
          text: '加载中',
          color: "#999",
          shadow: 5
        }
      }
    },
    scrollDiy: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'diy',
        diyLevel: 1,
        refreshthreshold: 70,
        background: '#000', // bug
        backgroundImage: 'http://coolui.coolwl.cn/assets/bg.jpg',
        title: {
          show: true,
          text: '下拉刷新',
          color: "#000000",
          shadow: 5
        }
      },
      loadmore: {
        type: 'diy'
      }
    },
    scrollTm: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'diy',
        diyLevel: 1,
        refreshthreshold: 90,
        backgroundImage: 'http://coolui.coolwl.cn/assets/tm_mui_bike.gif',
        title: {
          show: false
        }
      },
      loadmore: {
        type: 'default',
        icon: 'http://upload-images.jianshu.io/upload_images/5726812-95bd7570a25bd4ee.gif',
        title: {
          show: true,
          text: '加载中',
          color: "#999",
          shadow: 5
        }
      }
    },
    scrollJd: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'diy',
        diyLevel: 2,
        refreshthreshold: 60,
        p: 0
      },
      loadmore: {
        type: 'default',
        icon: "http://upload-images.jianshu.io/upload_images/5726812-95bd7570a25bd4ee.gif",
        title: {
          show: true,
          text: '上拉加载',
          color: "#000000",
          shadow: 5
        }
      }
    },
    scrollHuojian: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'diy',
        diyLevel: 2,
        refreshthreshold: 100,
        background: '#FFF', // bug
        p: 0
      },
      loadmore: {
        type: 'diy'
      }
    },
    scrollDuanwu: {
      pagination: {
        page: 1,
        totalPage: 10,
        limit: 10,
        length: 100
      },
      empty: {
        img: 'http://coolui.coolwl.cn/assets/mescroll-empty.png'
      },
      refresh: {
        type: 'diy',
        diyLevel: 1,
        refreshthreshold: 90,
        backgroundImage: 'http://coolui.coolwl.cn/assets/duanwu.gif',
        title: {
          show: false
        }
      },
      loadmore: {
        type: 'default',
        icon: 'http://upload-images.jianshu.io/upload_images/5726812-95bd7570a25bd4ee.gif',
        title: {
          show: true,
          text: '加载中',
          color: "#999",
          shadow: 5
        }
      }
    }
  },
  onLoad() {
    this.getData('refresh')
    this.getDiyData('refresh')
    this.getTmData('refresh')
    this.getJdData('refresh')
    this.getHuoJianData('refresh')
    this.getDuanwuData('refresh')


  },
  change: function (e) {
    this.setData({
      active: e.currentTarget.dataset.index,
      currentIndex: e.currentTarget.dataset.index
    })
   
  },
 
  getData: function (type) {
    let that = this
    let list = that.data.list;
    if (type == 'refresh') {
      let scroll = that.data.scroll
      scroll.pagination.page = 1
      setTimeout(() => {
        that.setData({
          list: listData,
          scroll: scroll
        });
      }, 300);
    } else {
      let scroll = that.data.scroll
      scroll.pagination.page = scroll.pagination.page + 1
      if (scroll.pagination.page <= that.data.scroll.pagination.totalPage) {
        that.setData({
          list: list.concat(listData),
          scroll: scroll
        });
      }

      // that.setData({
      //   isLoading: utils.loadEnd()
      // });

      that.selectComponent(".demo1").loadEnd()
    }
  },
  refresh: function () {
    this.getData('refresh')
  },
  loadMore: function () {
    this.getData('loadMore')
  },
  getDiyData: function (type) {
    let that = this
    let diyList = that.data.diyList;
    if (type == 'refresh') {
      let scrollDiy = that.data.scrollDiy
      scrollDiy.pagination.page = 1
      setTimeout(() => {
        that.setData({
          diyList: listData,
          scrollDiy: scrollDiy
        });
      }, 300);
    } else {
      let scrollDiy = that.data.scrollDiy
      scrollDiy.pagination.page = scrollDiy.pagination.page + 1
      if (scrollDiy.pagination.page <= that.data.scrollDiy.pagination.totalPage) {
        that.setData({
          diyList: diyList.concat(listData),
          scrollDiy: scrollDiy
        });
      }
      that.selectComponent(".demo1").loadEnd()
    }
  },
  refreshDiy: function () {
    this.getDiyData('refresh')
  },
  loadMoreDiy: function () {
    this.getDiyData('loadMore')
  },
  getTmData: function (type) {
    let that = this
    let tmList = that.data.tmList;

    if (type == 'refresh') {
      let tmListData = []
      for (let i = 0; i < 10; i++) {
        tmListData.push(i);
      }
      let scrollTm = that.data.scrollTm
      scrollTm.pagination.page = 1
      setTimeout(() => {
        that.setData({
          tmList: tmListData,
          scrollTm: scrollTm
        });
      }, 300);
    } else {
      let tmListData = []
      for (let i = 0; i < 10; i++) {
        tmListData.push(i);
      }
      let scrollTm = that.data.scrollTm
      scrollTm.pagination.page = scrollTm.pagination.page + 1
      if (scrollTm.pagination.page <= that.data.scrollTm.pagination.totalPage) {
        that.setData({
          tmList: tmList.concat(tmListData),
          scrollTm: scrollTm
        });
      }
      that.selectComponent(".demo1").loadEnd()
    }
  },
  refreshTm: function () {
    this.getTmData('refresh')
  },
  loadMoreTm: function () {
    this.getTmData('loadMore')
  },
  refreshPulling: function (e) {
    let scrollJd = this.data.scrollJd
    scrollJd.refresh.p = e.detail.p
    this.setData({
      scrollJd: scrollJd
    });
  },
  getJdData: function (type) {
    let that = this
    let jdList = that.data.jdList;

    if (type == 'refresh') {
      let scrollJd = that.data.scrollJd
      scrollJd.pagination.page = 1
      scrollJd.refresh.p = 0
      setTimeout(() => {
        that.setData({
          jdList: listData,
          scrollJd: scrollJd
        });
      }, 300);
    } else {
      let scrollJd = that.data.scrollJd
      scrollJd.pagination.page = scrollJd.pagination.page + 1
      if (scrollJd.pagination.page <= that.data.scrollJd.pagination.totalPage) {
        that.setData({
          jdList: jdList.concat(listData),
          scrollJd: scrollJd
        });
      }
      that.selectComponent(".demo1").loadEnd()
    }
  },
  refreshJd: function () {
    this.getJdData('refresh')
  },
  loadMoreJd: function () {
    this.getJdData('loadMore')
  },
  onPageScroll() { },
  getHuoJianData: function (type) {
    let that = this
    let huojianList = that.data.huojianList;

    if (type == 'refresh') {
      let scrollHuojian = that.data.scrollHuojian
      scrollHuojian.pagination.page = 1
      scrollHuojian.refresh.p = 0
      setTimeout(() => {
        that.setData({
          huojianList: listData,
          scrollHuojian: scrollHuojian
        });
      }, 300);
    } else {
      let scrollHuojian = that.data.scrollHuojian
      scrollHuojian.pagination.page = scrollHuojian.pagination.page + 1
      if (scrollHuojian.pagination.page < that.data.scrollHuojian.pagination.totalPage) {

        that.setData({
          huojianList: huojianList.concat(listData),
          scrollHuojian: scrollHuojian
        });
      }
      that.selectComponent(".demo1").loadEnd()
    }
  },
  loadMoreHuojian: function () {
    this.getHuoJianData('loadMore')
  },
  refreshHuojian: function () {
    this.getHuoJianData('refresh')
  },
  refreshHuojianPulling: function (e) {
    let scrollHuojian = this.data.scrollHuojian
    scrollHuojian.refresh.p = e.detail.p
    this.setData({
      scrollHuojian: scrollHuojian
    });
  },
  getDuanwuData: function (type) {
    let that = this
    let dwList = that.data.dwList;

    if (type == 'refresh') {
      let dwListData = []
      for (let i = 0; i < 10; i++) {
        dwListData.push(i);
      }
      let scrollDuanwu = that.data.scrollDuanwu
      scrollDuanwu.pagination.page = 1
      setTimeout(() => {
        that.setData({
          dwList: dwListData,
          scrollDuanwu: scrollDuanwu
        });
      }, 300);
    } else {
      let dwListData = []
      for (let i = 0; i < 10; i++) {
        dwListData.push(i);
      }
      let scrollDuanwu = that.data.scrollDuanwu
      scrollDuanwu.pagination.page = scrollDuanwu.pagination.page + 1
      if (scrollDuanwu.pagination.page <= that.data.scrollDuanwu.pagination.totalPage) {
        that.setData({
          dwList: dwList.concat(dwListData),
          scrollDuanwu: scrollDuanwu
        });
      }
      that.selectComponent(".demo1").loadEnd()
    }
  },
  refreshDuanwu: function () {
    this.getDuanwuData('refresh')
  },
  loadMoreDuanwu: function () {
    this.getDuanwuData('loadMore')
  }
})
