<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>财务报表</li>
        </ul>
        <div class="zhong">
            <el-tabs v-model="activeName" type="card" style="width: 90%;margin-left:5%;position: relative;
    top: 15px;">
                <el-tab-pane label="财务概况" name="first" @click="handleClick">
                    <div class="first-bb">
                        <input type="name1" value="查询起始日期">- <input type="name2" value="查询截止日期">
                        <el-button type="warning" class="war-name">查询</el-button>
                    </div>
                    <div class="fu">
                        <div class="yu">
                            <ve-pie :data="chartData" v-if="con==1"></ve-pie>
                        </div>
                        <div class="zong-jin">
                            <div>
                                <ul>
                                    <li>总销售额：<span>¥21091.78</span></li>
                                    <li>退款金额：<span>¥1537</span></li>
                                    <li>未消费：<span>¥14034.46</span></li>
                                    <li>未提现：<span>¥188</span></li>
                                    <li>已提现：<span>¥4734.9</span></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>2020-01 报表</li>
                                    <li>2020-01 销售额：<span>¥100</span></li>
                                    <li>2020-01 退款金额：<span>¥0</span></li>
                                    <li>2020-01 消费：<span>¥200</span></li>
                                    <li>2020-01 提现：<span>¥400</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="财务明细" name="third">
                    <div class="first-bb">
                        <input type="name1" value="查询起始日期">- <input type="name2" value="查询截止日期">
                        <el-select v-model="value" placeholder="销售明细" class="cc">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button type="warning" class="war-name">查询</el-button>
                    </div>
                    <el-table :data="tableData" border style="width: 100%;margin-top:20px">
                        <el-table-column prop="date" label="日志" width="590">
                        </el-table-column>
                        <el-table-column prop="name" label="金额" width="130">
                        </el-table-column>
                        <el-table-column prop="address" label="发生时间">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'Finance',
    data() {

        this.chartSettings = {
            metrics: ['访问用户', '下单用户'],
            dimension: ['日期']
        }
        return {
            activeName: 'first',
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [{
                        '日期': '未提现0.45%',
                        '访问用户': 200
                    },
                    {
                        '日期': '销售总额50.77%',
                        '访问用户': 6000
                    },
                    {
                        '日期': '已提现11.29%',
                        '访问用户': 500
                    },
                    {
                        '日期': '未消费33.78%',
                        '访问用户': 5000
                    },
                    {
                        '日期': '退款金额3.70%',
                        '访问用户': 500
                    }
                ]
            },
            chartDatas: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393,
                        '下单用户': 1093,
                        '下单率': 0.32
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530,
                        '下单用户': 3230,
                        '下单率': 0.26
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923,
                        '下单用户': 2623,
                        '下单率': 0.76
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723,
                        '下单用户': 1423,
                        '下单率': 0.49
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792,
                        '下单用户': 3492,
                        '下单率': 0.323
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593,
                        '下单用户': 4293,
                        '下单率': 0.78
                    }
                ]
            },
            tableData: [{
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }, {
                date: 'ID：10001  商品名称  订单：20181220100878',
                name: '￥10',
                address: '2018-12-12 12:00:12'
            }],
            options: [{
                value: '选项1',
                label: '2020年'
            }, {
                value: '选项2',
                label: '2019年'
            }, {
                value: '选项3',
                label: '2018年'
            }, {
                value: '选项4',
                label: '2017年'
            }, {
                value: '选项5',
                label: '2016年'
            }, {
                value: '选项6',
                label: '销售明细'
            }],
            value: '',
            con: 1,
        }
    },
    methods: {
        toCon() {
            this.con = 2;
            alert(this.con)
        },
        handleClick() {
            this.con = 1;
            alert(this.con)
        }
    },
}
</script>

<style scoped>
.cc {
    width: 110px;
    margin-left: 10px;
}

.bb {
    width: 100px;
    float: left;
    margin-left: 10px;
    margin-top: 5px;
}

.fu {
    display: flex;
}

.yu {
    width: 400px;
    height: 500px;
    float: right;
}

.olg {
    width: 300px;
    height: 500px;
}

.zong-jin {
    float: left;
}

.zong-jin div {
    height: 150px;
    width: 400px;
    border: 1px solid #dcdcdc;
}

.zong-jin div:nth-of-type(1) {
    margin-top: 15px;
}

.zong-jin div:nth-of-type(2) {
    margin-top: 10px;
}

.zong-jin div:nth-of-type(1) ul li {
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
}

.zong-jin div:nth-of-type(1) ul li span {
    color: #ff8800;
}

.zong-jin div:nth-of-type(2) ul li span {
    color: #ff8800;
}

.zong-jin div:nth-of-type(1) ul {
    background-color: #fff9f4;
}

.zong-jin div:nth-of-type(2) ul li {
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
}

.zong-jin div:nth-of-type(2) ul {
    background-color: #fff9f4;
}

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
    margin-left: 18.5%;
    padding-bottom: 120px;
}

.first-bb {
    border: 1px solid #999;
    height: 50px;
}

.first-bb input {
    line-height: 25px;
    margin-left: 10px;
}

.war-name {
    margin-left: 5px;
    margin-top: 5px;
}
</style>
