<template>
  <div class="carriage-systemset-box">
    <div class="carriage-content-title">
      <span>当前位置</span> /
      <span>告警设置</span>
    </div>
    <div class="systemset-nav">
      <div class="systemset-btn systemset-btn-active">用户管理</div>
      <div class="systemset-btn">角色管理</div>
      <div class="systemset-btn">系统日志</div>
    </div>
    <div class="carriage-systemset-manage">
      <div class="carriage-systemset-table">
        <div class="carriage-systemset-thead">
          <div class="carriage-systemset-th">序号</div>
          <div class="carriage-systemset-th">设备ID</div>
          <div class="carriage-systemset-th">车辆ID</div>
          <div class="carriage-systemset-th">车牌号</div>
          <div class="carriage-systemset-th">车型</div>
          <div class="carriage-systemset-th">额定载荷</div>
          <div class="carriage-systemset-th">备注</div>
        </div>
        <div class="carriage-systemset-tbody">
          <div class="carriage-systemset-tr">
            <div class="carriage-systemset-td">001</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">京B******</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
          </div>
          <div class="carriage-systemset-tr">
            <div class="carriage-systemset-td">001</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">京B******</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
            <div class="carriage-systemset-td">*********</div>
          </div>
        </div>
      </div>
      <div id="pageNations"></div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.carriage-content .carriage-systemset-box {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
.carriage-systemset-box .systemset-nav {
  display: flex;
  padding: 10px 0;
}
.carriage-systemset-box .systemset-btn {
  width: 120px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  background-color: #082247;
  cursor: pointer;
}
.carriage-systemset-box .systemset-btn-active {
  color: #08bbd2;
}
.carriage-systemset-manage {
  height: calc(100% - 100px);
}
.carriage-systemset-manage .carriage-systemset-table {
  height: calc(100% - 60px);
  padding-top: 15px;
}
.carriage-systemset-manage .carriage-systemset-thead {
  display: flex;
  background-color: #0d2950;
}
.carriage-systemset-manage .carriage-systemset-th {
  flex: 1;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.carriage-systemset-manage .carriage-systemset-tbody {
  height: calc(100% - 40px);
  overflow-y: auto;
}
.carriage-systemset-manage .carriage-systemset-tr {
  display: flex;
}
.carriage-systemset-manage .carriage-systemset-td {
  flex: 1;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.carriage-systemset-manage .carriage-systemset-th:first-child, .carriage-systemset-manage .carriage-systemset-td:first-child {
  flex: 0 100px;
}

</style>
