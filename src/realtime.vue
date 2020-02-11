<template>
    <div class="content-box">
        <div class="carriage-carmsg">
            <div class="carriage-carmsg-title">车辆信息</div>
            <div class="carriage-carmsg-table">
                <div class="carriage-carmsg-thead">
                <div class="carriage-carmsg-th">序号</div>
                <div class="carriage-carmsg-th">姓名</div>
                <div class="carriage-carmsg-th">车牌号</div>
                </div>
                <div class="carriage-carmsg-tbody">
                <div class="carriage-carmsg-tr">
                    <div class="carriage-carmsg-td">01</div>
                    <div class="carriage-carmsg-td">张三</div>
                    <div class="carriage-carmsg-td">京AAAAAA</div>
                </div>
                <div class="carriage-carmsg-tr">
                    <div class="carriage-carmsg-td">01</div>
                    <div class="carriage-carmsg-td">张三</div>
                    <div class="carriage-carmsg-td">京AAAAAA</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.carriage-content {
    height: 100%;
}
.carriage-content .content-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(./img/map.png) center center no-repeat;
  background-size: 100% 100%;
}
.carriage-content .carriage-carmsg {
  position: absolute;
  right: 5px;
  top: 20px;
  width: 470px;
  height: 330px;
  border: 1px solid #083165;
  background-color: #09142a;
}
.carriage-content .carriage-carmsg-title {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  background: url(./img/spriticon.png) no-repeat;
  background-position: 102px -405px;
}
.carriage-content .carriage-carmsg-table {
  padding: 0 3px;
}
.carriage-content .carriage-carmsg-thead {
  display: flex;
  background-color: #0c203b;
}
.carriage-content .carriage-carmsg-th {
  flex: 1;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.carriage-content .carriage-carmsg-tbody {
  overflow-y: auto;
}
.carriage-content .carriage-carmsg-tr {
  display: flex;
}
.carriage-content .carriage-carmsg-td {
  flex: 1;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}
</style>