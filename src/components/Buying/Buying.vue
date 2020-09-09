<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>团购</li>
        </ul>
        <div class="zhong">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left:25px;padding-top:20px">
                <el-tab-pane label="出售中" name="first">
                    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="courseDesc" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="courseName" label="图片" width="100">
                        </el-table-column>
                        <el-table-column prop="id" label="详情" width="100">
                        </el-table-column>
                        <el-table-column prop="professional.professionalName" label="团购价/结算价" width="120">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.$index, tableData)" type="warning" size="small">编辑</el-button>
                                <el-button @click="outerVisible = true" type="primary" size="small">下架</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="确认" :visible.sync="outerVisible">
                        <el-dialog width="30%" title="下架成功" :visible.sync="innerVisible" append-to-body>
                        </el-dialog>
                        <div slot="footer" class="dialog-footer">
                            <p>确定要下架吗？</p>
                            <el-button type="primary" @click="innerVisible = true">确定</el-button>
                            <el-button @click="outerVisible = false">取 消</el-button>
                        </div>
                    </el-dialog>

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
import axios from 'axios'
export default {
    name: 'Buying',
    data() {
        return {
            activeName: 'first',
            outerVisible: false,
            innerVisible: false,
            tableData: [{
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '暂无分类',
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '暂无分类',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '生活服务',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '生活服务',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '餐饮美食',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '餐饮美食',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '美容美发',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../Consumption/img/1.jpg"),
                name: '团购商品名称 已0人分销 ',
                address: '98/68.6',
                shu: '12/100',
                zhuang: '美容美发',
                caozuo: '编辑 下架 预览'
            }]
        };
    },
    mounted() {
        this.getAll()
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        xia(row) {
            console.log(row);
        },
        remove(index, rows) {
            this.$axios.get('http://139.9.169.87:8081/examsystem/deleteCourse?id=' + rows[index].id)
                .then((res) => {
                    if (res.data.success) {
                        alert('删除成功！')
                        rows.splice(index, 1);
                    }
                })
        },
        getAll() {
            axios.get("http://139.9.169.87:8081/examsystem/getAllCourse")
                .then(res => {
                    this.tableData = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        handleClick(index, rows) {
            this.$router.push({
                name: 'zj',
                params: {
                    duix: rows[index]
                }
            })
        }
    }
}
</script>

<style scoped>
.dialog-footer p {
    margin-top: -30px;
    text-align: center;
    line-height: 50px;
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
