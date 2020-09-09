<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>验证优惠券</li>
        </ul>
        <div class="zhong">
            <div class="body-men">
                <p>选择门店</p>
                <select class="SS">
                    <option>花生米科技公司总部</option>
                    <option>花生米科技公司（越秀店）</option>
                    <option>花生米科技公司（天河店）</option>
                    <option>花生米科技公司（黄埔店）</option>
                </select>
                <p>请输入优惠券序列号进行验证消费</p>
                <el-input placeholder="请输入优惠券列号【123456】" v-model="xiao" clearable class="login_text">
                </el-input>
                <el-button type="warning" @click="dianji()" style="margin-left:15px">验证优惠券</el-button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Coupon',
    data() {
        return {
            activeName: 'first',
            xiao: ''
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        dianji: function () {
            var fei = /^([1-6]){6}$/;
            if (this.xiao == null || this.xiao == '') {
                alert("请输入优惠券序列号");
            } else {
                if (!fei.test(this.xiao)) {
                    alert("优惠券序列号不存在")
                } else {
                    alert("验证成功，优惠券有效!");
                }
            }
        }
    }
}
</script>

<style scoped>
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
    margin-left: 18%;
    padding-bottom: 60px;
}

.body-men p {
    font-size: 14px;
    padding-bottom: 10px;
}

.body-men p:nth-of-type(2) {
    font-size: 14px;
    padding-top: 10px;
}

.SS {
    width: 230px;
    height: 30px;
    line-height: 30px;
}

.login_text {
    width: 230px;
}

#wen {
    width: 100%;
    background: rgb(255, 250, 251);
    margin-top: 20px;
}

#wen p:nth-of-type(1) {
    padding-top: 15px;
    margin-left: 15px;
    font-weight: 600;
}

#wen p:nth-of-type(2) {
    margin-left: 25px;
    padding-top: 0px;
    font-weight: 0;
    font-size: 12px;
}

#wen p:nth-of-type(3) {
    margin-left: 25px;
    padding-top: 0px;
    font-weight: 0;
    font-size: 12px;
}
</style>
