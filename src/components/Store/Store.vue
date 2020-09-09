<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>到店付</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="bian" placeholder="请输入订单编号" style="width: 15%;"></el-input>
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;margin-left:5%"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>

                <el-button type="warning" style="margin-left:5%">查询</el-button>

                <el-table :data="tableData" border style="width: 95%;margin-top:20px">
                    <el-table-column prop="date" label="订单编号" width="100">
                    </el-table-column>
                    <el-table-column prop="name" label="消费时间" width="100">
                    </el-table-column>
                    <el-table-column prop="address" label="消费金额" width="100">
                    </el-table-column>
                    <el-table-column prop="guo" label="不可优惠金额" width="100">
                    </el-table-column>
                    <el-table-column prop="xiao" label="已优惠金额" width="100">
                    </el-table-column>
                    <el-table-column prop="men" label="实付金额" width="100">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="消费门店" width="100">
                    </el-table-column>
                    <el-table-column prop="zi" label="支付状态">
                    </el-table-column>
                    <el-table-column fixed="right" label="详情">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="下单时间"></el-table-column>
                        <el-table-column property="name" label="下单会员"></el-table-column>
                        <el-table-column property="address" label="商品总价"></el-table-column>
                        <el-table-column property="jin" label="实际支付金额："></el-table-column>
                        <el-table-column property="jie" label="结算金额："></el-table-column>
                    </el-table>
                </el-dialog>

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
    name: 'Store',
    data() {
        return {
            bian: '',
            qi: '',
            jie: '',
            input: '',
            value: '',
            currentPage3: 5,
            gridData: [{
                date: '2018-12-12 21:20:20',
                name: '十月大神',
                address: '￥50',
                jin: '￥45',
                jie: '￥40'
            }, {
                date: '2018-12-12 21:20:20',
                name: '十月大神',
                address: '￥50',
                jin: '￥45',
                jie: '￥40'
            }, {
                date: '2018-12-12 21:20:20',
                name: '十月大神',
                address: '￥50',
                jin: '￥45',
                jie: '￥40'
            }, {
                date: '2018-12-12 21:20:20',
                name: '十月大神',
                address: '￥50',
                jin: '￥45',
                jie: '￥40'
            }],
            tableData: [{
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥800',
                guo: '￥600',
                xiao: '￥20',
                men: '￥780',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥68',
                guo: '￥0',
                xiao: '￥0',
                men: '￥68',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥160',
                guo: '￥0',
                xiao: '￥20',
                men: '￥140',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥100',
                guo: '￥0',
                xiao: '￥20',
                men: '￥80',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥0.01',
                guo: '￥0',
                xiao: '￥0',
                men: '￥0.01',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥800',
                guo: '￥600',
                xiao: '￥20',
                men: '￥780',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥68',
                guo: '￥0',
                xiao: '￥0',
                men: '￥68',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥160',
                guo: '￥0',
                xiao: '￥20',
                men: '￥140',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥100',
                guo: '￥0',
                xiao: '￥20',
                men: '￥80',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥0.01',
                guo: '￥0',
                xiao: '￥0',
                men: '￥0.01',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥800',
                guo: '￥600',
                xiao: '￥0',
                men: '￥780',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥68',
                guo: '￥0',
                xiao: '￥0',
                men: '￥68',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥160',
                guo: '￥0',
                xiao: '￥0',
                men: '￥140',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥100',
                guo: '￥0',
                xiao: '￥20',
                men: '￥80',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }, {
                date: '20181228003005',
                name: '2018-12-12',
                address: '￥0.01',
                guo: '￥0',
                xiao: '￥0',
                men: '￥0.01',
                zhuang: '花生米科技公司',
                zi: '已付款',
            }],
            methods: {
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                },
                handleClick(row) {
                    console.log(row);
                }
            }
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
    height: 800px;
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
