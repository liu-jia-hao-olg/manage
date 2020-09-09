<template>
<div class="Affairs">
    <div class="aff">

        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="下单起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="下单截止日期" style="width: 13%;"></el-input>
                <el-input v-model="input" placeholder="请输入订单号或手机号" style="width: 20%;margin-left:10px;"></el-input>
                <el-button type="warning" style="float:right;margin-right:10px;">查询</el-button>

                <el-table :data="tableData" border style="width: 95%;margin-top:20px">
                    <el-table-column prop="men" label="门店">
                    </el-table-column>
                    <el-table-column prop="hao" label="订单号">
                    </el-table-column>
                    <el-table-column prop="lianxi" label="联系人">
                    </el-table-column>
                    <el-table-column prop="dian" label="电话">
                    </el-table-column>
                    <el-table-column prop="pei" label="配送地址">
                    </el-table-column>
                    <el-table-column prop="cui" label="催单时间">
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
    name: 'Reminder',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
            currentPage3: 5,
            tableData: [{
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司（越秀店）',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
            }, {
                men: '花生米科技公司总部',
                hao: '20181228003005',
                lianxi: '￥15',
                dian: '￥0',
                pei: '广州市越秀区东园横路1号',
                cui: '2018-12-12'
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
