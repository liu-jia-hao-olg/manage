<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>商品预售</li>
        </ul>
        <div class="zhong">
            <el-button type="warning" style="float:right;margin-right:30px;margin-top:10px">新增门店</el-button>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left:25px;padding-top:20px">
                <el-tab-pane label="全部预售" name="first">
                    <el-input v-model="input" placeholder="请输入商品名称/ID" style=" width: 17%;"></el-input>
                    <el-select v-model="value" placeholder="全部" style=" width: 17%;margin-left:5px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="商品ID">
                            <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column prop="name" label="商品名称">
                        </el-table-column>
                        <el-table-column prop="address" label="预售时间">
                        </el-table-column>
                        <el-table-column prop="fenlei" label="预售销量">
                        </el-table-column>
                        <el-table-column prop="pai" label="排序">
                        </el-table-column>
                        <el-table-column prop="zhuang" label="状态">
                            <template slot-scope="scope">
                                <el-switch v-model="scope.row.con"></el-switch>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="进行中" name="second">
                    <el-input v-model="input" placeholder="请输入商品名称/ID" style=" width: 17%;"></el-input>
                    <el-select v-model="value" placeholder="全部" style=" width: 17%;margin-left:5px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="names" label="商品名称">
                        </el-table-column>
                        <el-table-column prop="addresss" label="预售时间">
                        </el-table-column>
                        <el-table-column prop="fenleis" label="预售销量">
                        </el-table-column>
                        <el-table-column prop="pais" label="排序">
                        </el-table-column>
                        <el-table-column prop="zhuangs" label="状态">
                            <template slot-scope="scope">
                                <el-switch v-model="scope.row.con"></el-switch>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="未开始" name="third">
                    <el-input v-model="input" placeholder="请输入商品名称/ID" style=" width: 17%;"></el-input>
                    <el-select v-model="value" placeholder="全部" style=" width: 17%;margin-left:5px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="names" label="商品名称">
                        </el-table-column>
                        <el-table-column prop="addresss" label="预售时间">
                        </el-table-column>
                        <el-table-column prop="fenleis" label="预售销量">
                        </el-table-column>
                        <el-table-column prop="pais" label="排序">
                        </el-table-column>
                        <el-table-column prop="zhuangs" label="状态">
                            <template slot-scope="scope">
                                <el-switch v-model="scope.row.con"></el-switch>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已结束" name="fourth">
                    <el-input v-model="input" placeholder="请输入商品名称/ID" style=" width: 17%;"></el-input>
                    <el-select v-model="value" placeholder="全部" style=" width: 17%;margin-left:5px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="danger" style="margin-left:5px">查询</el-button>
                    <el-table ref="multipleTable" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="names" label="商品名称">
                        </el-table-column>
                        <el-table-column prop="addresss" label="预售时间">
                        </el-table-column>
                        <el-table-column prop="fenleis" label="预售销量">
                        </el-table-column>
                        <el-table-column prop="pais" label="排序">
                        </el-table-column>
                        <el-table-column prop="zhuangs" label="状态">
                            <template slot-scope="scope">
                                <el-switch v-model="scope.row.con"></el-switch>
                            </template>
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
    name: 'Booking',
    data() {
        return {
            activeName: 'first',
            input: '',
            tableData: [{
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '0',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '0',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '0',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '12',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '18',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '553',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '180',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '79',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '188',
                pai: '10',
                con: true,
            }, {
                date: '1001',
                name: '商城商品名称',
                address: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenlei: '1685',
                pai: '10',
                con: true,
            }],
            tableDatas: [{
                names: '商城商品名称',
                addresss: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenleis: '0',
                pais: '10',
                con: true,
            }, {
                names: '商城商品名称',
                addresss: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenleis: '0',
                pais: '10',
                con: true,
            }, {
                names: '商城商品名称',
                addresss: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenleis: '0',
                pais: '10',
                con: true,
            }, {
                names: '商城商品名称',
                addresss: '2018-12-05 18:00:00 开始2019-01-10 18:00:00结束',
                fenleis: '0',
                pais: '10',
                con: true,
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
