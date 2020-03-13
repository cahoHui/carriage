<template>
  <div class="carriage-warningset-box">
    <div class="carriage-content-title">
      <span>当前位置</span> /
      <span>告警设置</span>
    </div>
    <div class="warningset-nav">
      <div class="warningset-btn warningset-btn-active">胎压告警设置</div>
      <div class="warningset-btn">温度告警设置</div>
      <div class="warningset-btn">载荷告警设置</div>
    </div>
    <div class="warningset-details">
      <div class="warningset-search">
        <div class="warningset-search-list warningset-list-select">
          <span class="warningset-selected">default value</span>
          <span class="search-drop-icon">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </span>
          <div class="search-dropdown-list dropdown-list-ul">
            <ul class="search-dropdown-ul">
              <li class="search-dropdown-items search-item-active">defalut value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
              <li class="search-dropdown-items">select value</li>
            </ul>
          </div>
        </div>
        <div class="warningset-carId">车辆 ID</div>
      </div>
      <div class="warningset-details-level">
        <div class="warningset-level-box">
          <div class="warningset-level-color">黄色警告</div>
          <div class="warningset-level-value">
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压上限</span>
            </div>
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压下限</span>
            </div>
          </div>
        </div>
        <div class="warningset-level-box">
          <div class="warningset-level-color">橙色警告</div>
          <div class="warningset-level-value">
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压上限</span>
            </div>
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压下限</span>
            </div>
          </div>
        </div>
        <div class="warningset-level-box">
          <div class="warningset-level-color">红色警告</div>
          <div class="warningset-level-value">
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压上限</span>
            </div>
            <div class="warningset-level-maxmin">
              <input type="text" class="warningset-value" />
              <span>胎压下限</span>
            </div>
          </div>
        </div>
      </div>
      <div class="test-div">123456778</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.carriage-content .carriage-warningset-box {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
.carriage-warningset-box .warningset-nav {
  display: flex;
  padding: 10px 0;
}
.carriage-warningset-box .warningset-btn {
  width: 120px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  background-color: #082247;
  cursor: pointer;
}
.carriage-warningset-box .warningset-btn-active {
  color: #08bbd2;
}
.carriage-warningset-box .warningset-details {
  height: 280px;
  border: 1px solid #1b6fb7;
  padding: 10px 20px;
}
.carriage-warningset-box .warningset-search {
  display: flex;
  height: 60px;
  align-items: center;
}
.carriage-warningset-box .warningset-search-list {
  position: relative;
  width: 300px;
  height: 36px;
  padding-right: 26px;
  text-align: center;
  line-height: 36px;
  background-color: #082247;
  border: 1px solid #14336c;
  cursor: pointer;
}
.carriage-warningset-box .warningset-selected {
  color: #05cee2;
}
.carriage-warningset-box .search-drop-icon {
  position: absolute;
  top: 6px;
  right: 10px;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  font-size: 20px;
  color: #fff;
}
.carriage-warningset-box .search-dropdown-list {
  position: absolute;
  top: 36px;
  left: -1px;
  width: 300px;
  max-height: 0;
  overflow: hidden;
  background-color: #082247;
  transition: all ease .2s;
}
.carriage-warningset-box .search-dropdown-ul {
  max-height: 210px;
  overflow-y: auto;
}
.carriage-warningset-box .search-dropdown-items {
  height: 35px;
  padding-right: 26px;
  text-align: center;
  line-height: 35px;
  color: #f3f4ef;
  cursor: pointer;
}
.carriage-warningset-box .search-dropdown-items:hover {
  color: #05cee2;
}
.carriage-warningset-box .search-item-active {
  color: #05cee2;
}
.carriage-warningset-box .warningset-carId {
  width: 60px;
  height: 30px;
  margin-left: 15px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  background-color: #047c23;
}
.carriage-warningset-box .warningset-details-level {
  padding-bottom: 15px;
}
.carriage-warningset-box .warningset-level-box {
  display: flex;
  height: 60px;
  align-items: center;
}
.carriage-warningset-box .warningset-level-color {
  width: 315px;
  height: 40px;
  padding-right: 25px;
  text-align: right;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #e82509;
}
.carriage-warningset-box .warningset-level-value {
  flex: 1;
  display: flex;
}
.carriage-warningset-box .warningset-level-maxmin {
  flex: 1;
  display: flex;
  height: 50px;
  align-items: center;
  color: #f3f4ef;
}
.carriage-warningset-box .warningset-value {
  width: 350px;
  height: 36px;
  padding-left: 5px;
  margin-right: 15px;
  border: 1px solid #14336c;
  background-color: #082247;
  outline: none;
  font-size: 14px;
  color: #f3f4ef;
}

</style>
