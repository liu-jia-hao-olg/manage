<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>商务提现</li>
        </ul>
        <div class="zhong">
            <div class="zhong-tou">
                <ul>
                    <li>当前账户余额：<span>￥188</span></li>
                    <li>冻结余额：￥0 [包含订单完成后1天内的冻结贷款、提现审核中的冻结提现款]</li>
                    <li>可提现余额：<span>￥188</span></li>
                    <li>提现银行名称：<span>中国建设银行</span></li>
                    <li>提现银行账户：<span>6221 0000 0000 0000 0000</span></li>
                </ul>
            </div>
            <el-table :data="tableData" border style="width: 80%;margin-left:10%;margin-top:30px">
                <el-table-column prop="date" label="提现时间" width="200">
                </el-table-column>
                <el-table-column prop="name" label="提现金额" width="200">
                </el-table-column>
                <el-table-column prop="address" label="状态" width="200">
                </el-table-column>
                <el-table-column prop="bezhu" label="备注">
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Pos',
    data() {
        return {
            tableData: [{
                date: '2018-12-12 10:00:00',
                name: '￥100',
                address: '提现成功'
            }, {
                date: '2018-12-12 10:00:00',
                name: '￥100',
                address: '提现成功',
            }, {
                date: '2019-12-12 10:00:00',
                name: '￥100',
                address: '提现失败',
                bezhu: '银行账户与账户名对应错误'
            }, {
                date: '2019-12-12 10:00:00',
                name: '￥100',
                address: '提现失败',
                bezhu: '银行账户与账户名对应错误'
            }, {
                date: '2019-12-12 10:00:00',
                name: '￥100',
                address: '提现失败',
                bezhu: '银行账户与账户名对应错误'
            }]
        }
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
    height: 800px;
    margin-top: 20px;
    margin-left: 18.5%;
    padding-bottom: 120px;
}

.zhong-tou ul li {
    display: block;
    line-height: 30px;
    font-size: 12px;
}

.zhong-tou ul li span {
    color: #ff8800;
}

.zhong-tou ul {
    background-color: #fff9f4;
    width: 80%;
    margin-left: 10%;
    border: 1px solid #ccc;
    position: relative;
    top: 15px;
}

.block {
    margin-top: 20px;
    text-align: center;
}
</style>
