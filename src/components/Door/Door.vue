<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>门店列表</li>
        </ul>
        <div class="zhong">
            <el-button type="warning" style="float:right;margin-right:30px;margin-top:10px">新增门店</el-button>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left:25px;padding-top:20px">
                <el-tab-pane label="已上线" name="first">
                    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="date" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="tu" label="图片" width="100">
                            <template slot-scope="scope">
                                <img :src="scope.row.tu" min-width="50" height="50" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="门店名称" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="所在城市" width="100">
                        </el-table-column>
                        <el-table-column prop="fenlei" label="行业分类" width="100">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary" size="small">下架</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已下线" name="second">
                    <el-table :data="tableDatas" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="dates" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="tus" label="图片" width="100">
                            <template slot-scope="scope">
                                <img :src="scope.row.tus" min-width="50" height="50" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="names" label="门店名称" width="180">
                        </el-table-column>
                        <el-table-column prop="addresss" label="所在城市" width="100">
                        </el-table-column>
                        <el-table-column prop="fenleis" label="行业分类" width="100">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary" size="small">上架</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="审核中" name="third">
                    <el-table :data="tableDatabb" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="datebb" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="tubb" label="图片" width="100">
                            <template slot-scope="scope">
                                <img :src="scope.row.tubb" min-width="50" height="50" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="namebb" label="门店名称" width="195">
                        </el-table-column>
                        <el-table-column prop="addressbb" label="所在城市" width="100">
                        </el-table-column>
                        <el-table-column prop="fenleibb" label="行业分类" width="120">
                        </el-table-column>
                        <el-table-column prop="leibb" label="审核" width="120">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="审核记录" name="fourth">
                    <el-table :data="tableDataxx" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="datez" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="tuz" label="图片" width="100">
                            <template slot-scope="scope">
                                <img :src="scope.row.tuz" min-width="50" height="50" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="namez" label="活动名称" width="180">
                        </el-table-column>
                        <el-table-column prop="addressz" label="提交时间" width="180">
                        </el-table-column>
                        <el-table-column prop="shuz" label="审核类型" width="180">
                        </el-table-column>
                        <el-table-column prop="zhuangz" label="审核状态">
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
    name: 'Door',
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: '1001',
                tu: require("../Door/img/1.jpg"),
                name: '花生米科技公司总部',
                address: '广州市',
                fenlei: '生活服务',
            }, {
                date: '1001',
                tu: require("../Door/img/1.jpg"),
                name: '花生米科技公司（越秀店）',
                address: '广州市',
                fenlei: '生活服务',
            }, {
                date: '1001',
                tu: require("../Door/img/1.jpg"),
                name: '花生米科技公司（天河店）',
                address: '广州市',
                fenlei: '餐饮美食',
            }, {
                date: '1001',
                tu: require("../Door/img/1.jpg"),
                name: '花生米科技公司（黄埔店）',
                address: '广州市',
                fenlei: '美容美发',
            }],
            tableDatas: [{
                dates: '1005',
                tus: require("../Door/img/2.jpg"),
                names: '花生米科技公司（花都店）',
                addresss: '广州市',
                fenleis: '餐饮美食',
            }, {
                dates: '1006',
                tus: require("../Door/img/2.jpg"),
                names: '花生米科技公司（宝安店）',
                addresss: '深圳市',
                fenleis: '美容美发',
            }, {
                dates: '1007',
                tus: require("../Door/img/2.jpg"),
                names: '花生米科技公司（禅城店）',
                addresss: '佛山市',
                fenleis: '生活服务',
            }, {
                dates: '1008',
                tus: require("../Door/img/2.jpg"),
                names: '花生米科技公司（顺德店）',
                addresss: '佛山市',
                fenleis: '美容美发',
            }],
            tableDatabb: [{
                datebb: '1008',
                tubb: require("../Door/img/3.jpg"),
                namebb: '花生米科技公司（花都店）',
                addressbb: '广州市',
                fenleibb: '生活服务',
                leibb: '新增申请',
            }, {
                datebb: '1009',
                tubb: require("../Door/img/3.jpg"),
                namebb: '花生米科技公司（宝安店）',
                addressbb: '深圳市',
                fenleibb: '生活服务',
                leibb: '下架申请',
            }, {
                datebb: '1010',
                tubb: require("../Door/img/3.jpg"),
                namebb: '花生米科技公司（禅城店）',
                addressbb: '佛山市',
                fenleibb: '餐饮美食',
                leibb: '上架申请',
            }, {
                datebb: '1011',
                tubb: require("../Door/img/3.jpg"),
                namebb: '花生米科技公司（顺德店）',
                addressbb: '佛山市',
                fenleibb: '美容美发',
                leibb: '项目修改申请',
            }],
            tableDataxx: [{
                datez: '1001',
                tuz: require("../Door/img/4.jpg"),
                namez: '花生米科技有限公司免费试吃活动',
                addressz: '2020-12-12 12:00:00',
                shuz: '发布申请',
                zhuangz: '未审核',
                caozuoz: '删除'
            }, {
                datez: '1002',
                tuz: require("../Door/img/4.jpg"),
                namez: '花生米科技有限公司免费试吃活动 ',
                addressz: '2022-12-12 12:00:00',
                shuz: '发布申请',
                zhuangz: '拒绝申请 审核备注：标题不符合规范'
            }, {
                datez: '1003',
                tuz: require("../Door/img/4.jpg"),
                namez: '花生米科技有限公司免费试吃活动',
                addressz: '2023-12-12 12:00:00',
                shuz: '修改申请',
                zhuangz: '未审核',
                caozuoz: '删除'
            }, {
                datez: '1004',
                tuz: require("../Door/img/4.jpg"),
                namez: '米花科技有限公司免费试吃活动',
                addressz: '2022-12-12 12:00:00',
                shuz: '修改申请',
                zhuangz: '审核通过 审核备注：无'
            }, {
                datez: '1005',
                tuz: require("../Door/img/4.jpg"),
                namez: '米花科技有限公司免费试吃活动',
                addressz: '2022-12-12 12:00:00',
                shuz: '上架申请',
                zhuangz: '审核通过 审核备注：系统自动审核'
            }, {
                datez: '1006',
                tuz: require("../Door/img/4.jpg"),
                namez: '肯德基免费试吃活动',
                addressz: '2022-12-12 12:00:00',
                shuz: '上架申请',
                zhuangz: '审核通过 审核备注：系统自动审核'
            }, {
                datez: '1007',
                tuz: require("../Door/img/4.jpg"),
                namez: '肯德基免费试吃活动',
                addressz: '2022-12-12 12:00:00',
                shuz: '下架申请',
            }, {
                datez: '1008',
                tuz: require("../Door/img/4.jpg"),
                namez: '肯德基免费试吃活动',
                addressz: '2020-12-12 12:00:00',
                shuz: '下架申请',
                zhuangz: '审核通过 审核备注：系统自动审核'
            }]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
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
    width: 80%;
    margin-top: 20px;
    margin-left: 18%;
    padding-bottom: 60px;
}
</style>
