<template>
  <div class="carriage-warning-box">
    <div class="carriage-content-title">
      <span>当前位置</span> /
      <span>历史数据查询</span>
    </div>
    <div class="carriage-warning-search">
      <div class="warning-search-box">
        <div class="warning-search-item">
          <div class="search-item-text">按车辆查询</div>
          <div class="search-item-input">
            <input type="text" />
          </div>
          <div class="search-item-btn">查询</div>
        </div>
        <div class="warning-search-item">
          <div class="search-item-text">按载荷告警查询</div>
          <div class="search-item-input">
            <input type="text" />
          </div>
          <div class="search-item-btn">查询</div>
        </div>
      </div>
      <div class="warning-search-box">
        <div class="warning-search-item">
          <div class="search-item-text">按胎压告警查询</div>
          <div class="search-item-input">
            <input type="text" />
          </div>
          <div class="search-item-btn">查询</div>
        </div>
        <div class="warning-search-item">
          <div class="search-item-text">按胎温告警查询</div>
          <div class="search-item-input">
            <input type="text" />
          </div>
          <div class="search-item-btn">查询</div>
        </div>
      </div>
    </div>
    <div class="carriage-warning-list">
      <div class="carriage-warning-table">
        <div class="carriage-warning-thead">
          <div class="carriage-warning-th">序号</div>
          <div class="carriage-warning-th">告警类型</div>
          <div class="carriage-warning-th">告警数据</div>
          <div class="carriage-warning-th">告警时间</div>
          <div class="carriage-warning-th">告警坐标</div>
          <div class="carriage-warning-th">设备信息</div>
          <div class="carriage-warning-th">车辆ID信息</div>
        </div>
        <div class="carriage-warning-tbody">
          <div class="carriage-warning-tr">
            <div class="carriage-warning-td">001</div>
            <div class="carriage-warning-td">*********</div>
            <div class="carriage-warning-td">*********</div>
            <div class="carriage-warning-td">2019-12-03 12:10:10</div>
            <div class="carriage-warning-td">
              <span>22.53255252</span>&nbsp;&nbsp;
              <span>33.265415551</span>
            </div>
            <div class="carriage-warning-td">*******</div>
            <div class="carriage-warning-td">京B*******</div>
          </div>
          <div class="carriage-warning-tr">
            <div class="carriage-warning-td">001</div>
            <div class="carriage-warning-td">*********</div>
            <div class="carriage-warning-td">*********</div>
            <div class="carriage-warning-td">2019-12-03 12:10:10</div>
            <div class="carriage-warning-td">
              <span>22.53255252</span>&nbsp;&nbsp;
              <span>33.265415551</span>
            </div>
            <div class="carriage-warning-td">*******</div>
            <div class="carriage-warning-td">京B*******</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.carriage-content .carriage-warning-box {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
.carriage-content .carriage-warning-search {
  width: 100%;
  height: 150px;
  padding: 15px 0;
  border: 1px solid #1b6fb7;
}
.carriage-content .warning-search-box {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
}
.carriage-content .warning-search-item {
  width: 45%;
  display: flex;
  align-items: center;
}
.carriage-content .search-item-text {
  width: 130px;
  padding-right: 10px;
  text-align: right;
}
.carriage-content .search-item-input {
  flex: .8;
}
.carriage-content .search-item-input input {
  width: 100%;
  height: 36px;
  padding-left: 5px;
  border-radius: 4px;
  background-color: #04183d;
  border: 1px solid #133370;
  outline: none;
  color: #a0d9ed;
  font-size: 13px;
}
.carriage-content .search-item-btn {
  width: 60px;
  height: 30px;
  margin-left: 20px;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  background-color: #047c23;
  cursor: pointer;
}
.carriage-content .carriage-warning-list {
  height: calc(100% - 180px);
  padding: 15px 0;
}
.carriage-content .carriage-warning-table {
  height: 100%;
} 
.carriage-content .carriage-warning-thead {
  display: flex;
  background-color: #0d2950;
}
.carriage-content .carriage-warning-th, .carriage-content .carriage-warning-td {
  flex: 1;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.carriage-content .carriage-warning-th:first-child, .carriage-content .carriage-warning-td:first-child {
  flex: 0 100px;
}
.carriage-content .carriage-warning-tbody {
  height: calc(100% - 40px);
  overflow-y: auto;
}
.carriage-content .carriage-warning-tr {
  display: flex;
}
</style>
