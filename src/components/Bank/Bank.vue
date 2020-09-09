<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>银行账户</li>
        </ul>
        <div class="zhong">
            <div class="zhong-tou">
                <p>商户名称：<span>花生米科技有限公司</span></p>
            </div>
            <div class="biao">
                <ul>
                    <li>开户行名称：<el-input v-model="ming" placeholder="请输入开户银行名称" class="biao-wan"></el-input>
                    </li>
                    <li>开户行账号：<el-input v-model="hao" placeholder="请输入银行账户" class="biao-wan"></el-input>
                    </li>
                    <li>真实姓名：<el-input v-model="xing" placeholder="请输入银行账户名称" class="biao-wan"></el-input>
                    </li>
                    <li>图形校验码：<el-input v-model="tu" placeholder="图形校验码" class="biao-tu"></el-input>
                        <template slot="prepend"><i class="el-icon-s-opportunity"></i></template>
                        <div class="ma" @click="refreshCode" style="margin-left:220px;position: relative;bottom: 42px;">
                            <sidentify :identifyCode="identifyCode"></sidentify>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="biao-buttom">
                <el-button type="warning">保存</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import sidentify from '../RandomCode/RandomCode'
export default {
    name: 'Bank',
    data() {
        return {
            ming: '',
            hao: '',
            xing: '',
            tu: '',
            identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            identifyCode: ''
        };
    },
    mounted() {
        // 验证码初始化
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
    },
    methods: {
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 切换验证码
        refreshCode() {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
        // 生成四位随机验证码
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
            }
        },
        submitForm() {

        }
    },
    components: {
        'sidentify': sidentify
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
    height: 800px;
    margin-top: 20px;
    margin-left: 18.5%;
    padding-bottom: 120px;
}

.zhong-tou p {
    display: block;
    line-height: 30px;
    font-size: 12px;
    margin-left: 10px;
}

.zhong-tou {
    background-color: #fff9f4;
    width: 80%;
    margin-left: 10%;
    border: 1px solid #ccc;
    position: relative;
    top: 15px;
}

.zhong-tou p span {
    color: #ff8800;
}

.biao {
    border: 1px solid #cccccc;
    width: 80%;
    margin-left: 10%;
    margin-top: 35px;
}

.biao ul li {
    display: block;
    font-size: 14px;
}

.biao-wan {
    width: 60%;
}

.biao-tu {
    width: 15%;
}

.biao-buttom {
    text-align: center;
    margin-top: 20px;
}
</style>
