<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>服务订单</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="请输入订单或手机号" style="width: 15%;margin-left:5%"></el-input>
                <el-select v-model="value" placeholder="全部" style="width: 18%;margin-left:5%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" style="margin-left:5%">查询</el-button>
                <p>订单状态： <el-radio-group v-model="radio">
                        <el-radio :label="3">全部</el-radio>
                        <el-radio :label="6">待接单</el-radio>
                        <el-radio :label="9">待服务</el-radio>
                        <el-radio :label="11">服务中</el-radio>
                        <el-radio :label="13">代付尾款</el-radio>
                        <el-radio :label="15">待评价</el-radio>
                        <el-radio :label="1">已完成</el-radio>
                    </el-radio-group>
                </p>

                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="详情">
                    </el-table-column>
                    <el-table-column prop="name" label="服务门店">
                    </el-table-column>
                    <el-table-column prop="address" label="服务时间">
                    </el-table-column>
                    <el-table-column prop="you" label="订单结算总额">
                    </el-table-column>
                    <el-table-column prop="jie" label="操作">
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
    name: 'BeTo',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
            radio: 3,
            currentPage3: 5,
            options: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '花生米科技公司'
            }, {
                value: '选项3',
                label: '肯德基公司'
            }],
            tableData: [{
                date: ' 客户信息：十月大神   ',
                name: '门店名称：花生米科技公司总部',
                address: '2018-12-28 14:20:008',
                you: '￥18收费详情'
            }, {
                date: ' 客户信息：十月大神',
                name: '门店名称：花生米科技公司总部',
                address: '2018-12-28 14:20:008',
                you: '￥18收费详情',
                jie: '取消订单'
            }, {
                date: ' 客户信息：十月大神',
                name: '门店名称：花生米科技公司总部',
                address: '2018-12-28 14:20:008',
                you: '￥18收费详情',
                jie: '结束服务'
            }, {
                date: ' 客户信息：十月大神',
                name: '门店名称：花生米科技公司总部',
                address: '2018-12-28 14:20:008',
                you: '￥18收费详情',
                jie: '开始服务'
            }, {
                date: ' 客户信息：十月大神',
                name: '门店名称：花生米科技公司总部',
                address: '2018-12-28 14:20:008',
                you: '￥18收费详情',
                jie: '取消订单'
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
    height: 460px;
    margin-top: 20px;
    margin-left: 18.5%;
    padding-bottom: 120px;
}

.zhong-xia {
    margin-left: 5%;
    padding-top: 15px;
}

.zhong-xia p {
    margin-top: 20px;
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
