<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>预售订单</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="请输入商品名称" style="width: 15%;margin-left:5%"></el-input>

                <el-button type="warning" style="margin-left:5%">查询</el-button>

                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="详情" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="发票信息" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="单价" width="120">
                    </el-table-column>
                    <el-table-column prop="shu" label="数量" width="120">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="状态" width="120">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="primary" size="small">详情</el-button>
                        </template>
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
    name: 'Commodity',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
            currentPage3: 5,
            tableData: [{
                date: '阿里巴巴，卫生纸',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '待付订金',
            }, {
                date: '阿里巴巴，卫生纸',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '待付尾款',
            }, {
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥19',
                shu: '1',
                zhuang: '待发货 ',
            }, {
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥500',
                shu: '1',
                zhuang: '待退款 ',
            }, {
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥20',
                shu: '2',
                zhuang: '待评价',
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
