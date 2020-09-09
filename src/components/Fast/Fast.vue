<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>快递列表</li>
        </ul>
        <div class="zhong">
            <el-button type="warning" style="float:right;margin-right:30px;margin-top:10px">新增快递</el-button>
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="编号">
                </el-table-column>
                <el-table-column prop="name" label="快递名称">
                </el-table-column>
                <el-table-column prop="address" label="发货显示">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.con"></el-switch>
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
</template>

<script>
export default {
    name: 'Fast',
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: '1001',
                name: '韵达快递',
                con: true,
            }, {
                date: '1002',
                name: '中通快递',
                con: true,
            }, {
                date: '1003',
                name: '中通快递',
                con: true,
            }, {
                date: '1004',
                name: '圆通快递',
                con: true,
            }, {
                date: '1005',
                name: '汇通快递',
                con: true,
            }, {
                date: '1006',
                name: '菜鸟裹裹',
                con: true,
            }, {
                date: '1006',
                name: '顺丰快递',
                con: true,
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
    width: 60%;
    margin-top: 20px;
    margin-left: 28%;
    padding-bottom: 60px;
}
</style>
