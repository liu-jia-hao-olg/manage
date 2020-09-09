<template>
<div class="dormitory">
    <div class="search-wrap">
        <el-col :span="20" class="el-cc">
                <div class="table-grid-content">
                    <el-button class="add" type="primary" @click="addRow()">新增</el-button>
                </div>
                <el-table :data="tables" ref="tableData" style="width: 100%" :row-class-name="tableRowClassName" border>
                    <el-table-column prop="date" label="编号" width="60"></el-table-column>
                <el-table-column prop="name" label="优惠券名称" width="90"></el-table-column>
                <el-table-column prop="address" label="券总数" width="80"></el-table-column>
                <el-table-column prop="shu" label="已领取量" width="80"></el-table-column>
                <el-table-column prop="zhuang" label="上线时间" width="140"></el-table-column>
                <el-table-column prop="caozuo" label="面值" width="80"></el-table-column>
                <el-table-column prop="fan" label="使用范围" width="80"></el-table-column>
                <el-table-column prop="lei" label="类型" width="80"></el-table-column>
                <el-table-column label="状态" width="80">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.con"></el-switch>
                    </template>
                </el-table-column>
                    <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
    <!-- 新增窗口 -->
                <el-dialog title="新增" :visible.sync="addFormVisible">
                    <el-form :model="addForm" ref="addForm">
                        <el-form-item label="编号" :label-width="formLabelWidth">
                        <el-input v-model="addForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠券" :label-width="formLabelWidth">
                        <el-input type="textarea" v-model="addForm.address" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div>
                        <el-button @click="cancel()">取消</el-button>
                        <el-button type="primary" @click="sumbitAddRow()" :loading="addLoading">确定</el-button>
                    </div>
                </el-dialog>
    <!-- 编辑窗口 -->
                <el-dialog title="编辑" :visible.sync="editFormVisible">
                    <el-form :model="editForm" ref="editForm">
                        <el-form-item label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="editForm.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="生日" :label-width="formLabelWidth">
                            <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期" format="MM 月 dd 日" value-format="MM-dd">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="地址" :label-width="formLabelWidth">
                            <el-input type="textarea" v-model="editForm.address" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div>
                        <el-button @click="cancel()">取消</el-button>
                        <el-button type="primary" v-on:click="sumbitEditRow()" :loading="addLoading">确定</el-button>
                    </div>
                </el-dialog>
        </el-col>
        </el-row>
    </div>
</div>
</template>

<style scope>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

.add {
    float: right;
}

.search-wrap {
    margin: 10px 50px;
}

.label-search {
    margin-top: 7px;
}
.el-cc{
    margin-left:21px;
}
</style>

<script>
var _index; //定义全局变量
export default {
    name: "bianjia",
    data() {
        return {
            tableData: [{
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "商城",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "商城",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "团购",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "团购",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "外卖预定",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "外卖预定",
                    lei: "电子券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "上门服务",
                    lei: "实体券",
                    con: true
                },
                {
                    date: "1001",
                    name: "阿里巴巴优惠券",
                    address: "1000",
                    shu: "489",
                    zhuang: "2018-12-12 10:00:00 开始 2020-12-30 00:00:00 结束",
                    caozuo: "20",
                    fan: "上门服务",
                    lei: "实体券",
                    con: true
                },
            ],
            formLabelWidth: '120px',
            addFormVisible: false, //是否显示新增窗口
            name: "tableList",
            addForm: [],
            addLoading: false,
            editFormVisible: false, //是否显示编辑窗口
            editForm: [],
            search: '',
        }
    },
    computed: {
        // 模糊搜索
        tables() {
            const search = this.search
            if (search) {
                // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
                // 注意： filter() 不会对空数组进行检测。
                // 注意： filter() 不会改变原始数组。
                return this.tableData.filter(data => {
                    // some() 方法用于检测数组中的元素是否满足指定条件;
                    // some() 方法会依次执行数组的每个元素：
                    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
                    // 如果没有满足条件的元素，则返回false。
                    // 注意： some() 不会对空数组进行检测。
                    // 注意： some() 不会改变原始数组。
                    return Object.keys(data).some(key => {
                        // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
                        // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
                        return String(data[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.tableData
        }
    },
    methods: {
        tableRowClassName: function ({
            row,
            rowIndex
        }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 2) {
                return 'success-row';
            }
            return '';
        },
        handleEdit: function (index, row) {
            console.log(index, row);
        },
        /*表格删除功能*/
        handleDelete: function (index, row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index, 1)
                this.$message({
                    type: 'success',
                    message: '删除成功!',
                })
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: err
                })
            })
        },
        //新增数据
        addRow: function () {
            this.addFormVisible = true;
            this.addForm = {
                name: '',
                date: '',
                address: ''
            }
        },
        //将新增的数据添加到表格中
        sumbitAddRow: function () {
            this.tableData = this.tableData || []
            this.tableData.push({
                name: this.addForm.name,
                date: this.addForm.address,
                address: this.addForm.date,
            })
            this.addFormVisible = false
        },
        cancel: function () {
            this.addFormVisible = false;//是否显示新增窗口
            this.editFormVisible = false;//是否显示编辑窗口
        },
        //编辑数据
        handleEdit(index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
            _index = index;
        },
        //保存编辑
        sumbitEditRow() {
            var editData = _index;
            this.tableData[editData].name = this.editForm.name;
            this.tableData[editData].date = this.editForm.date;
            this.tableData[editData].address = this.editForm.address;
            this.editFormVisible = false;
        },
    }
}
</script>
