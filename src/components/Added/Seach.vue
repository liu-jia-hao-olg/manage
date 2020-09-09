<template>
<div class="home">
    <div>
        <el-table :data="tableData" border style="width: 80%">
            <el-table-column prop="courseDesc" label="courseDesc" sortable>
            </el-table-column>
            <el-table-column prop="courseName" label="courseName" sortable>
            </el-table-column>
            <el-table-column prop="id" label="id" sortable>
            </el-table-column>
            <el-table-column prop="professional.professionalName" label="id" sortable>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleClick(scope.$index, tableData)">编辑</el-button>
                    <el-button type="text" size="small" @click="remove(scope.$index, tableData)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <div class='add'>
        <router-link to="/Home/ttt">
            添加
        </router-link>

    </div>
    <div class='add' @click='remove'>
        删除
    </div>
    <div class='add'>
        <router-link to="/Home/ttt">
            修改
        </router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Seach: '',
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
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
};
</script>

<style lang="scss" scoped>
.add {
    margin: 100px auto;
}
</style>
