<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>外卖预定设置</li>
        </ul>
        <div class="zhong">
            <div class="zhong-wen">
                <p>温馨提示：可以点击【外卖分类】和【外卖商品】进行添加或修改</p>
            </div>
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="编号">
                </el-table-column>
                <el-table-column prop="tu" label="图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.tu" min-width="50" height="50" />
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="门店名称">
                </el-table-column>
                <el-table-column prop="address" label="外卖分类">
                </el-table-column>
                <el-table-column prop="shu" label="外卖商品">
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
    name: 'Customized',
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: '1001',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司总部',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }, {
                date: '1002',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（越秀店）',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }, {
                date: '1002',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（天河店）',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }, {
                date: '1003',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（天河店）',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }, {
                date: '1004',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（黄埔店）',
                address: '外卖分类（1）',
                shu: '外卖商品（10）',
            }, {
                date: '1001',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（黄埔店）',
                address: '外卖分类（1）',
                shu: '外卖商品（10）',
            }, {
                date: '1004',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（黄埔店）',
                address: '外卖分类（1）',
                shu: '外卖商品（10）',
            }, {
                date: '1003',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（天河店）',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }, {
                date: '1002',
                tu: require("../Customized/img/4.jpg"),
                name: '花生米科技公司（天河店）',
                address: '外卖分类（5）',
                shu: '外卖商品（10）',
            }]
        };
    }
}
</script>

<style scoped>
.zhong-wen {
    background: #fffccc;
}

.zhong-wen p {
    padding-top: 10px;
    margin-left: 10px;
    padding-bottom: 10px;
    font-size: 12px;
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
    margin-left: 18%;
    padding-bottom: 60px;
}
</style>
