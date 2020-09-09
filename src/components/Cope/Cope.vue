<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>对账单</li>
        </ul>
        <div class="zhong">
            <div class="zhong-shang">
                <p>销售金额：<span>￥2000</span> 未确认：<span>￥750</span> 已完成：<span>￥1200</span> 退款/取消订单：<span>￥50</span>
                </p>
                <p>注：以上数据统计的是所有订单销售金额，商户最终结算费用以每个订单的结算价为准</p>
            </div>
            <div class="zhong-xia">
                <p>已结算：<span>￥0</span> 待结算：<span>￥1900</span> 已结算佣金：<span>￥100</span>
                    <el-button type="danger" style="margin-left: 10px">结算</el-button>
                </p>
            </div>
            <div class="body-buttom">
                <p>
                    <el-input v-model="input" placeholder="下单起始日期" style="width: 20%;line-height: 100px;"></el-input> - <el-input v-model="jie" placeholder="下单截止日期" style="width: 20%;line-height: 100px;"></el-input>
                    <el-select v-model="value" placeholder="销售明细" style="width: 20%;margin-left:12%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="danger" style="margin-left: 80px">查询</el-button>
                </p>
            </div>
            <div class="body-biao">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="men" label="门店">
                    </el-table-column>
                    <el-table-column prop="name" label="订单号">
                    </el-table-column>
                    <el-table-column prop="jin" label="订单金额">
                    </el-table-column>
                    <el-table-column prop="zai" label="在线支付">
                    </el-table-column>
                    <el-table-column prop="hou" label="活动补贴">
                    </el-table-column>
                    <el-table-column prop="dai" label="代金券">
                    </el-table-column>
                    <el-table-column prop="address" label="佣金">
                    </el-table-column>
                    <el-table-column prop="jie" label="结算价">
                    </el-table-column>

                </el-table>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cope',
    data() {
        return {
            value: '',
            input: '',
            jie: '',
            options: [{
                value: '选项1',
                label: '销售明细'
            }, {
                value: '选项2',
                label: '已完成明细'
            }, {
                value: '选项3',
                label: '退款/取消明细'
            }, {
                value: '选项4',
                label: '已结算明细'
            }],
            tableData: [{
                men: '花生米科技公司总部',
                name: '201812280030',
                jin: '￥15',
                zai: '￥0',
                hou: '￥15',
                dai: '￥0',
                address: '-￥5',
                jie: '￥10',
            }, {
                men: '花生米科技公司总部',
                name: '201812280030',
                jin: '￥15',
                zai: '￥0',
                hou: '￥15',
                dai: '￥0',
                address: '-￥5',
                jie: '￥10',
            }, {
                men: '花生米科技公司总部',
                name: '201812280030',
                jin: '￥15',
                zai: '￥0',
                hou: '￥15',
                dai: '￥0',
                address: '-￥5',
                jie: '￥10',
            }, {
                men: '花生米科技公司总部',
                name: '201812280030',
                jin: '￥15',
                zai: '￥0',
                hou: '￥15',
                dai: '￥0',
                address: '-￥5',
                jie: '￥10',
            }]
        };
    }
}
</script>

<style scoped>
.block {
    margin-top: 20px;
    text-align: center;
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
    margin-top: 20px;
    margin-left: 18%;
    padding-bottom: 90px;
}

.zhong-shang {
    background-color: #fff2f7;
    width: 90%;
    border: 1px solid rgb(214, 212, 212);
    height: 100px;
    margin-left: 5%;
    position: relative;
    top: 25px;
}

.zhong-shang p {
    margin-left: 5%;
    line-height: 40px;
    color: #333;
    font-size: 14px;
}

.zhong-shang p span {
    color: #ff8800;
}

.zhong-xia {
    background-color: #fff2f7;
    width: 90%;
    border: 1px solid rgb(214, 212, 212);
    height: 50px;
    margin-left: 5%;
    position: relative;
    top: 35px;
}

.zhong-xia p {
    font-size: 14px;
    margin-left: 5%;
    color: #333;
    position: relative;
    top: 5px;
}

.zhong-xia p span {
    color: #ff8800;
}

.body-buttom {
    background-color: #fff2f7;
    width: 90%;
    border: 1px solid rgb(214, 212, 212);
    height: 100px;
    margin-left: 5%;
    position: relative;
    top: 50px;
}

.body-buttom p {
    margin-left: 5%;
}

.body-biao {
    width: 90%;
    margin-left: 5%;
    position: relative;
    top: 60px;
}
</style>
