<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>商品订单列表</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="请输入商品名称" style="width: 15%;margin-left:5%"></el-input>
                <el-select v-model="value" placeholder="全部" style="width: 13%;margin-left:5%">
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
                    <el-table-column prop="date" label="详情" width="210">
                    </el-table-column>
                    <el-table-column prop="name" label="发票信息" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="单价" width="120">
                    </el-table-column>
                    <el-table-column prop="shu" label="数量" width="120">
                    </el-table-column>
                    <el-table-column prop="zhuang" label="状态" width="100">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <el-button @click="handleClick(scope.row)" type="primary" size="small">详情</el-button>
                    </el-table-column>
                </el-table>

            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Consumption',
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
                label: '待验证'
            }, {
                value: '选项3',
                label: '待收货'
            }, {
                value: '选项4',
                label: '已退款'
            }, {
                value: '选项5',
                label: '待评论'
            }, {
                value: '选项6',
                label: '已评论'
            }],
            tableData: [{
                tu: require("../Consumption/img/1.jpg"),
                date: '阿里巴巴，卫生纸，需要验证',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '待验证',
                caozuo: '详情'
            }, {
                tu: require("../Consumption/img/12.jpg"),
                date: '阿里巴巴，卫生纸，需要验证',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '待收货',
                caozuo: '详情'
            }, {
                tu: require("../Consumption/img/12.jpg"),
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥1800',
                shu: '1',
                zhuang: '待收货 '
            }, {
                tu: require("../Consumption/img/1.jpg"),
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥500',
                shu: '1',
                zhuang: '待发货 ',
                caozuo: '发货     详情'
            }, {
                tu: require("../Consumption/img/1.jpg"),
                date: '阿里巴巴，智能手机',
                name: '查看',
                address: '￥250',
                shu: '2',
                zhuang: '待发货 ',
            }, {
                tu: require("../Consumption/img/12.jpg"),
                date: '阿里巴巴，智能手机',
                name: '不开发票',
                address: '￥80',
                shu: '1',
                zhuang: '待收货 ',
            }, {
                tu: require("../Consumption/img/1.jpg"),
                date: '阿里巴巴，智能手机',
                name: '不开发票',
                address: '￥19',
                shu: '2',
                zhuang: '待发货退款处理',
                caozuo: '详情'
            }, {
                tu: require("../Consumption/img/12.jpg"),
                date: '阿里巴巴手机,需要验证',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '已退款',
                caozuo: '已完结  详情'
            }, {
                tu: require("../Consumption/img/1.jpg"),
                date: '阿里巴巴手机',
                name: '查看',
                address: '￥19',
                shu: '1',
                zhuang: '待评论',
                caozuo: '已完结  详情'
            }, {
                tu: require("../Consumption/img/12.jpg"),
                date: '阿里巴巴手机,需要验证',
                name: '不开发票',
                address: '￥19',
                shu: '1',
                zhuang: '已评论',
                caozuo: '已完结  详情'
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
