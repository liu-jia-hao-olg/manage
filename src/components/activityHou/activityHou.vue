<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>活动</li>
        </ul>
        <div class="zhong">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left:25px;padding-top:20px">
                <el-tab-pane label="进行中" name="first">
                    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="courseDesc" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="courseName" label="图片" width="100">
                        </el-table-column>
                        <el-table-column prop="id" label="详情" width="180">
                        </el-table-column>
                        <el-table-column prop="professional.professionalName" label="活动开始/结束时间" width="195">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.$index, tableData)" type="warning" size="small">编辑</el-button>
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
import axios from 'axios'
export default {
    name: 'activityHou',
    data() {
        return {
            activeName: 'first',
            tableData: [{
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '花生米科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '花生米科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '花生米科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '花生米科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '米花科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '米花科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '米花科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
                caozuo: '编辑 下架 预览'
            }, {
                date: '1001',
                tu: require("../activityHou/img/1.jpg"),
                name: '米花科技有限公司免费试吃活动',
                address: '2018-12-12 10:00:00 开始2012-12-30 23:59:58 结束',
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
