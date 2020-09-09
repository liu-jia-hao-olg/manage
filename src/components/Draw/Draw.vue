<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>优惠券领取记录</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="领取起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="领取截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="输入优惠券名称" style="width: 15%;margin-left:5%"></el-input>
                <el-select v-model="value" placeholder="全部" style="width: 13%;margin-left:5%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" style="margin-left:5%">查询</el-button>

                <el-table :data="tableData" border style="width: 95%;margin-top:20px">
                    <el-table-column prop="date" label="优惠券名称" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="会员" width="130">
                    </el-table-column>
                    <el-table-column prop="address" label="领取时间" width="130">
                    </el-table-column>
                    <el-table-column prop="guo" label="过期时间" width="130">
                    </el-table-column>
                    <el-table-column prop="xiao" label="消费时间" width="130">
                    </el-table-column>
                    <el-table-column prop="men" label="消费门店" width="130">
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
    name: 'Draw',
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
                label: '未使用'
            }, {
                value: '选项3',
                label: '使用中'
            }, {
                value: '选项4',
                label: '已使用'
            }, {
                value: '选项5',
                label: '已过期'
            }],
            tableData: [{
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '未使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '使用中'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '使用中'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '已使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '已使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '已使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '已使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '永久有效',
                xiao: '2018-12-31',
                men: '花生米科技公司',
                zhuang: '已使用'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
            }, {
                date: '测试优惠券',
                name: '十月大神',
                address: '2018-12-12',
                guo: '2019-01-12',
                xiao: '---',
                men: '---',
                zhuang: '已过期'
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
