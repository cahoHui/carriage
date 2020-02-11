<template>
  <div class="carriageWrapper">
    <div class="carriage-head">
      <div class="carriage-head-user">
        <span class="user-headpic">
          <img width="100%" height="100%" src="./img/userHead.png" alt="头像" />
        </span>
        <span class="user-text">hi, admin</span>
      </div>
      <div class="carriage-head-text"></div>
      <div class="carriage-head-menu">
        <span id="carriageTime" class="carriage-head-time">{{nowTime}}</span>
        <span class="carriage-head-message">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <span class="head-msg-num">3</span>
        </span>
        <span class="carriage-head-notice">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <span class="head-notice-num">3</span>
        </span>
        <div class="carriage-head-setting">
          <span class="head-setting-icon">
            <i class="fa fa-cog" aria-hidden="true"></i>
          </span>
          <span>设置</span>
        </div>
        <span class="carriage-head-homepage">
          <span class="head-setting-icon">
            <i class="fa fa-home" aria-hidden="true"></i>
          </span>
          <span>首页</span>
        </span>
      </div>
    </div>
    <div class="carriage-box">
      <div class="carriage-side">
        <div class="carriage-search">
          <input class="carriage-search-input" type="text" placeholder="请输入要搜索的内容" />
          <span class="carrige-search-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <ul class="carriage-nav">
          <li class="carriage-nav-items" :class="pathName === item.url ? 'carriage-items-active' : null" v-for="item in navList" :key="item.url">
            <span class="navitems-icon" v-bind:class="item.iconClass"></span>
            <router-link v-bind:to="item.url">
              <span class="navitems-text">{{item.navName}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="carriage-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>>

<script>
import getData from "./util";

export default {
  name: "app",
  data() {
    return {
      navList: [
        { navName: "实时数据", url: "/realtime", iconClass: 'navitems-data' },
        { navName: "告警查询", url: "/warnsearch", iconClass: 'navitems-search' },
        { navName: "告警设置", url: "/warnset", iconClass: 'navitems-set' },
        { navName: "历史数据查询", url: "/datasearch", iconClass: 'navitems-datasearch' },
        { navName: "设备管理", url: "/device", iconClass: 'navitems-manage' },
        { navName: "系统管理", url: "/system", iconClass: 'navitems-sysmanage' }
      ],
      pathName: '',
      nowTime: 'YYYY-MM-DD hh:mm',
    };
  },
  created() {
    this.fetchData();
    this.pathName = this.$route.path
    this.getRealTime()
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
    getRealTime() {
      this.getNowTime()
      setTimeout(this.getRealTime, 1000)
    },
    getNowTime() {
      const today = new Date();
      const x = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + (today.getDate())).slice(-2);
      const hour = ('0' + (today.getHours())).slice(-2);
      const minutes = ('0' + (today.getMinutes())).slice(-2);
      const seconds = ('0' + (today.getSeconds())).slice(-2);
      const nowTime = year + '年' + month + '月' + day + '日';
      const nowMse = hour + ' : ' + minutes + ' : ' + seconds;
      const nowtoday = (x[today.getDay()]); // 星期几
      this.nowTime = nowTime + ' ' + nowMse
    }
  },
  watch: {
    $route: function(to, from) {
      this.pathName = to.path
    }
  }
};
</script>

<style lang="css" scoped>
.carriageWrapper {
  width: 100%;
  height: 100%;
  background: url(./img/content.png) center center no-repeat;
  background-size: cover;
}
.carriageWrapper .carriage-content-box {
  width: 100%;
  height: 100%;
  background: url(./img/map.png) center center no-repeat;
  background-size: 100% 100%;
}
.carriageWrapper .carriage-head {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  background: url(./img/headBg.png) center center no-repeat;
  background-size: 100% 100%;
}
.carriageWrapper .carriage-head-user {
  position: relative;
  width: 234px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(./img/lines.png) center 26px no-repeat;
  background-size: 100% 100%;
}
.carriageWrapper .user-headpic {
  width: 35px;
  height: 35px;
}
.carriageWrapper .user-text {
  padding-left: 20px;
  font-size: 18px;
  color: #97e5f9;
}
.carriageWrapper .carriage-head-text {
  width: 340px;
  height: 100%;
  background: url(./img/text.png) center center no-repeat;
  background-size: 100% 30px;
}
.carriageWrapper .carriage-head-menu {
  position: absolute;
  top: 0;
  right: 30px;
  height: 100%;
  display: flex;
  align-items: center;
}
.carriageWrapper .carriage-head-time {
  display: inline-block;
  width: 200px;
  margin-right: 15px;
  text-align: center;
  color: #8bdbf4;
}
.carriageWrapper .carriage-head-message,
.carriageWrapper .carriage-head-notice {
  position: relative;
  margin-right: 15px;
  font-size: 18px;
  color: #434b58;
}
.carriageWrapper .head-msg-num,
.carriageWrapper .head-notice-num {
  position: absolute;
  top: -3px;
  right: -5px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e04940;
  font-size: 12px;
  color: #fff;
}
.carriageWrapper .carriage-head-setting,
.carriageWrapper .carriage-head-homepage {
  margin-right: 15px;
  font-size: 14px;
  color: #dadadc;
}
.carriageWrapper .head-setting-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #434b58;
  border-radius: 50%;
  font-size: 15px;
  text-align: center;
  line-height: 20px;
  color: #dadadc;
}
.carriageWrapper .carriage-box {
  display: flex;
  width: 100%;
  height: calc(100% - 50px);
}
.carriageWrapper .carriage-side {
  width: 234px;
  height: 100%;
  background: url(./img/sideBg.png) center center no-repeat;
  background-size: 100% 100%;
}
.carriageWrapper .carriage-content {
  flex: 1;
  height: 100%;
}
.carriageWrapper .carriage-nav-items {
  position: relative;
  width: 100%;
  height: 50px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
}
.carriageWrapper a {
  text-decoration: none;
  color: #fff;
}
.carriageWrapper a.router-link-active {
  color: #05cee2;
}
.carriageWrapper .carriage-nav-items:hover {
  color: #05cee2;
}
.carriageWrapper .carriage-nav-items:hover a {
  color: #05cee2;
}
.carriageWrapper .navitems-icon {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.carriageWrapper .navitems-data {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -45px;
}
.carriageWrapper .navitems-search {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -105px;
}
.carriageWrapper .navitems-set {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -165px;
}
.carriageWrapper .navitems-datasearch {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -225px;
}
.carriageWrapper .navitems-manage {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -285px;
}
.carriageWrapper .navitems-sysmanage {
  background: url(./img/spriticon.png) no-repeat;
  background-position: -130px -345px;
}
.carriageWrapper .carriage-nav-items:nth-child(1):hover .navitems-data {
  background-position: -58px -45px;
}
.carriageWrapper .carriage-nav-items:nth-child(2):hover .navitems-search {
  background-position: -58px -105px;
}
.carriageWrapper .carriage-nav-items:nth-child(3):hover .navitems-set {
  background-position: -59px -165px;
}
.carriageWrapper .carriage-nav-items:nth-child(4):hover .navitems-datasearch {
  background-position: -58px -225px;
}
.carriageWrapper .carriage-nav-items:nth-child(5):hover .navitems-manage {
  background-position: -59px -285px;
}
.carriageWrapper .carriage-nav-items:nth-child(6):hover .navitems-sysmanage {
  background-position: -59px -345px;
}
.carriageWrapper .carriage-items-active {
  color: #05cee2;
}
.carriageWrapper .carriage-items-active .navitems-data {
  background-position: -58px -45px;
}
.carriageWrapper .carriage-items-active .navitems-search {
  background-position: -58px -105px;
}
.carriageWrapper .carriage-items-active .navitems-set {
  background-position: -59px -165px;
}
.carriageWrapper .carriage-items-active .navitems-datasearch {
  background-position: -58px -225px;
}
.carriageWrapper .carriage-items-active .navitems-manage {
  background-position: -59px -285px;
}
.carriageWrapper .carriage-items-active .navitems-sysmanage {
  background-position: -59px -345px;
}
.carriageWrapper .carriage-search {
  height: 30px;
  background-color: #0e3056;
}
.carriageWrapper .carriage-search-input {
  width: 205px;
  height: 100%;
  text-align: center;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  color: #10b3ff;
}
.carriageWrapper .carrige-search-icon {
  padding-right: 5px;
  vertical-align: 2px;
  color: #10b3ff;
  cursor: pointer;
}
</style>