<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>活动评论</li>
        </ul>
        <div class="zhong">
            <div class="zhong-xia">
                <el-input v-model="qi" placeholder="评论起始日期" style="width: 13%;"></el-input> -
                <el-input v-model="jie" placeholder="评论截止日期" style="width: 13%;"></el-input>
                <el-select v-model="value" placeholder="全部评论" style="width: 13%;margin-left:5%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="全部内容" style="width: 13%;margin-left:5%">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="warning" style="margin-left:5%">查询</el-button>

                <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                    <el-table-column prop="date" label="评论星级" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="评论内容" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="评论人" width="180">
                    </el-table-column>
                    <el-table-column prop="shu" label="被评论来源" width="180">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="outerVisible = true" type="success" size="small">回复</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="评论回复" :visible.sync="outerVisible">
                    <el-dialog width="30%" title="回复成功" :visible.sync="innerVisible" append-to-body>
                    </el-dialog>
                    <div slot="footer" class="dialog-footer">
                        <el-input v-model="input" placeholder="请输入内容" style="margin-bottom:30px;height: 50px;"></el-input>
                        <el-button type="primary" @click="innerVisible = true">确定</el-button>
                        <el-button @click="outerVisible = false">取 消</el-button>
                    </div>
                </el-dialog>
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
    name: 'activitys',
    data() {
        return {
            qi: '',
            jie: '',
            input: '',
            value: '',
            aa: '',
            bb: '',
            cc: '',
            num: '',
            currentPage3: 5,
            outerVisible: false,
            options: [{
                value: '选项1',
                label: '全部评论'
            }, {
                value: '选项2',
                label: '5星评论'
            }, {
                value: '选项3',
                label: '4星评论'
            }, {
                value: '选项4',
                label: '3星评论'
            }, {
                value: '选项5',
                label: '2星评论'
            }, {
                value: '选项6',
                label: '1星评论'
            }],
            options1: [{
                value: '选项1',
                label: '全部'
            }, {
                value: '选项2',
                label: '有图'
            }, {
                value: '选项3',
                label: '无图'
            }],
            tableData: [{
                date: '★★★★★',
                name: '阿巴阿巴，优先使用',
                address: '十月大神',
                shu: '电脑',
            }, {
                date: '★★★★☆',
                name: '文字评价内容',
                address: '十月大神',
                shu: '鱼缸',
            }, {
                date: '★★★☆☆',
                name: '文字评价内容',
                address: '十月大神',
                shu: '座子',
            }, {
                date: '★★★☆☆',
                name: '文字评价内容',
                address: '十月大神',
                shu: '风扇',
            }, {
                date: '★★☆☆☆',
                name: '文字评价内容',
                address: '十月大神',
                shu: '肯德基',
            }],
            methods: {
                handleSizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                handleCurrentChange(val) {
                    console.log(`当前页: ${val}`);
                },
                handleClick(row) {
                    console.log(row);
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
