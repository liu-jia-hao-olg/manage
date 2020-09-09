<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>异常外卖订单</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-button type="warning" style="float:right;margin-right:10px">查询</el-button>

                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="订单号">
                    </el-table-column>
                    <el-table-column prop="name" label="下单会员">
                    </el-table-column>
                    <el-table-column prop="address" label="下单门店">
                    </el-table-column>
                    <el-table-column prop="shu" label="下单金额">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="配送地址">
                    </el-table-column>
                    <el-table-column prop="yi" label="异常原因">
                    </el-table-column>
                    <el-table-column prop="caozuo" label="操作">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Sing',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
        };
    }
}
</script>

<style scoped>
* {
    cursor: pointer;
}

.aff ul li {
    display: inline;
    line-height: 55px;
    margin-left: 10px;
}

.aff ul li:nth-of-type(1) {
    color: #ff8800;
    font-weight: 600;

}

.aff ul li:nth-of-type(2) {
    font-size: 14px;
}

.aff ul {
    background: #fff;

}

.zhong {
    background: #fff;
    width: 80%;
    height: 400px;
    margin-top: 20px;
    margin-left: 18.5%;
    padding-bottom: 120px;
}

.zhong-xia {
    margin-left: 5%;
    padding-top: 15px;
}

.el-button--warning {
    color: #FFF;
    background-color: #ff8800;
    border-color: #ff8800;
}

.el-button--warning.is-active,
.el-button--warning:active {
    background-color: #ff8800;
    border-color: #ff8800;
    color: #FFF;
}

.block {
    margin-top: 20px;
    text-align: center;
}
</style>
