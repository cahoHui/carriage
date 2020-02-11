<template>
    <div class="carriageWrapper">
        <div class="carriage-device-manage">
            <div class="carriage-content-title">
            <span>当前位置</span> /
            <span>设备管理</span>
            </div>
            <div class="carriage-device-addchange">
            <div class="device-add-change addDevice">
                <span class="icon-box">
                <i class="fa fa-plus" aria-hidden="true"></i>
                </span>
                <span>添加新设备</span>
            </div>
            <div class="device-add-change">
                <span class="icon-box">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
                <span>修改设备信息</span>
            </div>
            </div>
            <div class="carriage-device-search">
            <div class="device-search-box">
                <input type="text" class="device-search-input" />
                <div class="device-search-btn">设备ID查询</div>
            </div>
            <div class="device-search-box">
                <input type="text" class="device-search-input" />
                <div class="device-search-btn">车辆ID查询</div>
            </div>
            </div>
            <div class="carriage-device-table">
            <div class="carriage-device-thead">
                <div class="carriage-device-th">序号</div>
                <div class="carriage-device-th">设备ID</div>
                <div class="carriage-device-th">车辆ID</div>
                <div class="carriage-device-th">车牌号</div>
                <div class="carriage-device-th">车型</div>
                <div class="carriage-device-th">额定载荷</div>
                <div class="carriage-device-th">备注</div>
                <div class="carriage-device-th">操作</div>
            </div>
            <div class="carriage-device-tbody">
                <div class="carriage-device-tr">
                <div class="carriage-device-td">001</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">京B******</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">
                    <span class="edit">编辑</span>
                    <span class="delete">删除</span>
                </div>
                </div>
                <div class="carriage-device-tr">
                <div class="carriage-device-td">001</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">京B******</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">*********</div>
                <div class="carriage-device-td">
                    <span class="edit">编辑</span>
                    <span class="delete">删除</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'device',
    data() {
        return {
            
        }
    },
    created() {
    }
};
</script>

<style lang="css" scoped>
    .carriage-device-manage {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    }
    .carriage-device-manage .carriage-device-addchange {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    }
    .carriage-device-manage .device-add-change {
    margin-left: 20px;
    color: #05cce1;
    cursor: pointer;
    }
    .carriage-device-manage .carriage-device-search {
    display: flex;
    width: 100%;
    height: 80px;
    padding: 15px 0;
    align-items: center;
    border: 1px solid #1b6fb7;
    }
    .carriage-device-manage .device-search-box {
    flex: 1;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    }
    .carriage-device-manage .device-search-input {
    width: 300px;
    height: 36px;
    padding-left: 5px;
    border-radius: 4px;
    background-color: #04183d;
    border: 1px solid #133370;
    outline: none;
    color: #a0d9ed;
    font-size: 13px;
    }
    .carriage-device-manage .device-search-btn {
    width: 100px;
    height: 30px;
    margin-left: 20px;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
    background-color: #047c23;
    cursor: pointer;
    }
    .carriage-device-manage .carriage-device-table {
    height: calc(100% - 160px);
    padding-top: 15px;
    }
    .carriage-device-manage .carriage-device-thead {
    display: flex;
    background-color: #0d2950;
    }
    .carriage-device-manage .carriage-device-th {
    flex: 1;
    display: flex;
    height: 45px;
    justify-content: center;
    align-items: center;
    color: #fff;
    }
    .carriage-device-manage .carriage-device-tbody {
    height: calc(100% - 40px);
    overflow-y: auto;
    }
    .carriage-device-manage .carriage-device-tr {
    display: flex;
    }
    .carriage-device-manage .carriage-device-td {
    flex: 1;
    display: flex;
    height: 45px;
    justify-content: center;
    align-items: center;
    color: #fff;
    }
    .carriage-device-td .edit,
    .carriage-device-td .delete {
    color: #05cce1;
    cursor: pointer;
    }
    .carriage-device-td .delete {
    margin-left: 10px;
    }
    .carriage-device-manage .carriage-device-th:first-child,
    .carriage-device-manage .carriage-device-td:first-child {
    flex: 0 100px;
    }
    .carriage-device-pop {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 260px;
    margin: -120px 0 0 -225px;
    padding: 10px 15px;
    background: url(./img/popBoder.png) center center no-repeat;
    background-size: 100% 100%;
    display: none;
    }
    .carriage-device-pop .pop-title {
    height: 30px;
    margin-top: 10px;
    text-align: center;
    line-height: 30px;
    background-color: #0d2950;
    border-radius: 4px;
    }
    .carriage-device-pop .pop-msg {
    display: flex;
    margin-top: 15px;
    }
    .carriage-device-pop .items-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .carriage-device-pop .pop-msg-item {
    display: inline-block;
    width: 70px;
    height: 28px;
    padding-right: 10px;
    line-height: 28px;
    text-align: right;
    }
    .carriage-device-pop .pop-input {
    width: 120px;
    height: 28px;
    padding-left: 5px;
    margin-left: 5px;
    border: none;
    outline: none;
    background-color: #0d2950;
    border-radius: 4px;
    color: #fff;
    }
    .carriage-device-pop .pop-select {
    width: 120px;
    height: 30px;
    background-color: #0d2950;
    color: #fff;
    border: none;
    outline: none;
    }
    .carriage-device-pop .pop-radio {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    }
    .carriage-device-pop .pop-checkbox {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    }
    .carriage-device-pop .pop-sure-cancel {
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    }
    .carriage-device-pop .pop-btn {
    width: 70px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 3px;
    background-color: #0564c2;
    cursor: pointer;
    }
    .carriage-device-pop .pop-cancel {
    background-color: #364053;
    margin-left: 40px;
    }
</style>