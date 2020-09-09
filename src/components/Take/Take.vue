<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>外卖订单</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-select v-model="value" placeholder="全部" style="width: 13%;margin-left:5%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="全部" style="width: 23%;margin-left:5%">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" style="margin-left:5%">查询</el-button>
                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="详情">
                    </el-table-column>
                    <el-table-column prop="name" label="发票信息">
                    </el-table-column>
                    <el-table-column prop="address" label="单价">
                    </el-table-column>
                    <el-table-column prop="shu" label="数量">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="状态">
                    </el-table-column>
                    <el-table-column prop="caozuo" label="操作">
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
    name: 'Take',
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
                label: '未接单'
            }, {
                value: '选项3',
                label: '已接单'
            }, {
                value: '选项4',
                label: '已完成'
            }, {
                value: '选项5',
                label: '交易关闭'
            }],
            options1: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '花生米科技公司总部'
            }, {
                value: '选项3',
                label: '花生米科技公司（越秀店）'
            }, {
                value: '选项4',
                label: '花生米科技公司（天河店）'
            }, {
                value: '选项5',
                label: '花生米科技公司（黄埔店）'
            }],
            tableData: [{
                date: '外卖商品名称',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '已完成',
                caozuo: '消费结束'
            }, {
                date: '外卖商品名称',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '交易关闭',
                caozuo: '商家接单超时，订单已关闭'
            }, {
                date: '外卖商品名称',
                name: '查看',
                address: '￥1800',
                shu: '1'
            }, {
                date: '外卖商品名称',
                name: '查看',
                address: '￥500',
                shu: '1',
                zhuang: '已接单',
                caozuo: '关闭交易'
            }, {
                date: '外卖商品名称',
                name: '查看',
                address: '￥250',
                shu: '2'
            }, {
                date: '外卖商品名称',
                name: '不开发票',
                address: '￥80',
                shu: '1',
                zhuang: '已接单',
                caozuo: '交易成功'
            }, {
                date: '外卖商品名称',
                name: '不开发票',
                address: '￥19',
                shu: '2',
                zhuang: '未接单'
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
    height: 450px;
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
