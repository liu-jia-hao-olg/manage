<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>服务管理</li>
        </ul>
        <div class="zhong">
            <el-button type="warning" style="float:right;margin-right:30px;margin-top:10px">新增服务</el-button>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left:25px;padding-top:20px">
                <el-tab-pane label="出售中" name="first">
                    <el-input v-model="input" placeholder="请输入服务名称/ID" style=" width: 17%;"></el-input>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="date" label="服务ID">
                        </el-table-column>
                        <el-table-column prop="name" label="服务名称">
                        </el-table-column>
                        <el-table-column prop="address" label="上架时间">
                        </el-table-column>
                        <el-table-column prop="fenlei" label="售价">
                        </el-table-column>
                        <el-table-column prop="pai" label="销量">
                        </el-table-column>
                        <el-table-column prop="zhuang" label="服务类型">
                        </el-table-column>
                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已下架" name="second">
                    <el-input v-model="input" placeholder="请输入服务名称/ID" style=" width: 17%;"></el-input>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="dates" label="服务ID">
                        </el-table-column>
                        <el-table-column prop="names" label="服务名称">
                        </el-table-column>
                        <el-table-column prop="addresss" label="上架时间">
                        </el-table-column>
                        <el-table-column prop="fenleis" label="售价">
                        </el-table-column>
                        <el-table-column prop="pais" label="销量">
                        </el-table-column>
                        <el-table-column prop="zhuangs" label="服务类型">
                        </el-table-column>

                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="审核记录" name="third">
                    <el-input v-model="input" placeholder="请输入服务名称/ID" style=" width: 17%;"></el-input>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table :data="tableDatabb" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="wubb" label="服务详情">
                        </el-table-column>
                        <el-table-column prop="datebb" label="服务类型">
                        </el-table-column>
                        <el-table-column prop="namebb" label="提交时间">
                        </el-table-column>
                        <el-table-column prop="addressbb" label="审核类型">
                        </el-table-column>
                        <el-table-column prop="fenleibb" label="审核状态">
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
    name: 'Run',
    data() {
        return {
            activeName: 'first',
            input: '',
            tableData: [{
                date: '1001',
                name: '美甲',
                address: '永久有效',
                fenlei: '26',
                pai: '0',
                zhuang: '标准服务',
            }, {
                date: '1001',
                name: '修指甲',
                address: '永久有效',
                fenlei: '15',
                pai: '0',
                zhuang: '自定义服务',
            }, {
                date: '1001',
                name: '擦玻璃',
                address: '永久有效',
                fenlei: '50',
                pai: '0',
                zhuang: '标准服务',
            }, {
                date: '1001',
                name: '擦玻璃',
                address: '永久有效',
                fenlei: '50',
                pai: '0',
                zhuang: '标准服务',
            }, {
                date: '1001',
                name: '擦玻璃',
                address: '永久有效',
                fenlei: '50',
                pai: '0',
                zhuang: '标准服务',
            }, {
                date: '1001',
                name: '擦玻璃',
                address: '永久有效',
                fenlei: '50',
                pai: '0',
                zhuang: '标准服务',
            }, {
                date: '1001',
                name: '擦玻璃',
                address: '永久有效',
                fenlei: '50',
                pai: '0',
                zhuang: '标准服务',
            }],
            tableDatas: [{
                dates: '1001',
                names: '擦玻璃',
                addresss: '永久有效',
                fenleis: '50',
                pais: '0',
                zhuangs: '标准服务',
            }, {
                dates: '1002',
                names: '美甲',
                addresss: '永久有效',
                fenleis: '15',
                pais: '0',
                zhuangs: '自定义服务',
            }],
            tableDatabb: [{
                wubb: '服务名称服务名称',
                datebb: '标准服务',
                namebb: '2018-12-12 12:00:00',
                addressbb: '发布申请',
                fenleibb: '未审核',
            }, {
                wubb: '服务名称服务名称',
                datebb: '标准服务',
                namebb: '2018-12-12 12:00:00',
                addressbb: '发布申请',
                fenleibb: '未审核',
            }, {
                wubb: '服务名称服务名称',
                datebb: '标准服务',
                namebb: '2018-12-12 12:00:00',
                addressbb: '发布申请',
                fenleibb: '未审核',
            }, {
                wubb: '服务名称服务名称',
                datebb: '标准服务',
                namebb: '2018-12-12 12:00:00',
                addressbb: '发布申请',
                fenleibb: '未审核',
            }],
            options: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '正常'
            }, {
                value: '选项3',
                label: '关闭'
            }],
            value: ''
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
    width: 80%;
    margin-top: 20px;
    margin-left: 18%;
    padding-bottom: 60px;
}
</style>
