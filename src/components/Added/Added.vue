<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>更改的数据</li>
        </ul>
        <div class="zhong">
            <el-table :data="aaa" style="width: 100%">
                <el-table-column prop="date" label="编号">
                    <template slot-scope="scope">
                        <span>{{scope.row.QuestionId}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="优惠券名称">
                    <template slot-scope="scope">
                        <span>{{scope.row.Title}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="券总数">
                    <template slot-scope="scope">
                        <span>{{scope.row.Content}}</span>
                    </template>
                </el-table-column>
                </el-table-column>
                <el-table-column prop="shu" label="已领取量">
                    <template slot-scope="scope">
                        <span>{{scope.row.Prize}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="zhuang" label="上线时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.CreateUserId}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="caozuo" label="面值">
                    <template slot-scope="scope">
                        <span>{{scope.row.CreateUserName}}</span>
                    </template>
                </el-table-column>
                </el-table-column>
                <el-table-column prop="fan" label="使用范围">
                    <template slot-scope="scope">
                        <span>{{scope.row.CreatedTime}}</span>
                    </template>
                </el-table-column>
                </el-table-column>
                <el-table-column prop="lei" label="类型"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.con"></el-switch>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
var _index; //定义全局变量
export default {
    name: "Added",
    data() {
        return {
            aaa: [],
            abab: "",
            activeName: "first",
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
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    created() {
        let than = this;
        this.$axios.get("http://47.111.250.151:8081/api/Question/GetQuestion")
            .then((res) => { //执行回调
                than.aaa = res.data.rows;
                console.log(this.aaa);
            })
    },
};
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
