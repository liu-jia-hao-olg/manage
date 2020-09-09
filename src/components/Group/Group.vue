<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>团购订单列表</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="请输入商品名称" style="width: 15%;margin-left:5%"></el-input>
                <el-select v-model="value" placeholder="已消费" style="width: 13%;margin-left:5%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" style="margin-left:5%">查询</el-button>

                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="tu" label="图片" width="100">
                        <template slot-scope="scope">
                            <img :src="scope.row.tu" min-width="50" height="50" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="详情" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="发票信息" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="红包" width="120">
                    </el-table-column>
                    <el-table-column prop="you" label="优惠券" width="120">
                    </el-table-column>
                    <el-table-column prop="jie" label="结算金额" width="100">
                    </el-table-column>
                    <el-table-column prop="shu" label="数量" width="90">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="状态">
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
    name: 'Group',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
            currentPage3: 5,
            options: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '未消费'
            }, {
                value: '选项3',
                label: '已消费'
            }],
            tableData: [{
                tu: require("../Group/img/12.jpg"),
                date: '下单会员：shiyue手机号：18800000000',
                name: '不开发票',
                address: '0',
                you: '0',
                jie: '140',
                shu: '1',
                zhuang: '未消费'
            }, {
                tu: require("../Group/img/12.jpg"),
                date: '下单会员：shiyue手机号：18800000000',
                name: '不开发票',
                address: '0',
                you: '0',
                jie: '140',
                shu: '2',
                zhuang: '未消费'
            }, {
                tu: require("../Group/img/12.jpg"),
                date: '下单会员：shiyue手机号：18800000000',
                name: '不开发票',
                address: '0',
                you: '0',
                jie: '140',
                shu: '2',
                zhuang: '订单已完结已点评 '
            }, {
                tu: require("../Group/img/12.jpg"),
                date: '下单会员：shiyue手机号：18800000000',
                name: '不开发票',
                address: '0',
                you: '0',
                jie: '140',
                shu: '2',
                zhuang: '订单已完结'
            }, {
                tu: require("../Group/img/12.jpg"),
                date: '下单会员：shiyue手机号：18800000000',
                name: '不开发票',
                address: '0',
                you: '0',
                jie: '109',
                shu: '1',
                zhuang: '订单已完结已点评 '
            }],
            methods: {
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                }
            }
        };
    }
}
</script>

<style scoped>
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
