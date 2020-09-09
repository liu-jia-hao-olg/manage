<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>满免运费</li>
        </ul>
        <div class="zhong">
            <div class="zhong-shang">
                <p>减免运费<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </p>
                <p>温馨提示：若开启满免运费，则当订单中的商品金额大于设定值时，免除运费</p>
            </div>
            <div class="zhong-xia">
                <p>满免方式：订单金<el-input v-model="input" placeholder="" style="width: 20%;margin-left: 5px;margin-top:5px"></el-input>
                    元，免运费【只能填写数字】</p>
            </div>
            <div class="body-buttom">
                <el-button type="warning">保存</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Fare',
    data() {
        return {
            value: true,
            input: ''
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
    width: 60%;
    margin-top: 20px;
    margin-left: 28%;
    padding-bottom: 60px;
}

.zhong-shang {
    background-color: #f1eff3;
    width: 90%;
    border: 1px solid rgb(214, 212, 212);
    height: 100px;
    margin-left: 5%;
    position: relative;
    top: 25px;
}

.zhong-shang p {
    margin-left: 5%;
    line-height: 50px;
    color: #333;
    font-size: 14px;
}

.zhong-xia {
    background-color: #f1eff3;
    width: 90%;
    border: 1px solid rgb(214, 212, 212);
    height: 50px;
    margin-left: 5%;
    position: relative;
    top: 35px;
}

.zhong-xia p {
    font-size: 14px;
    margin-left: 5%;
    color: #333;
}

.body-buttom {
    margin-left: 5%;
    position: relative;
    top: 50px;
}
</style>
