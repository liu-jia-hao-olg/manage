<template>
<div class="login_body">
    <div class="login-xia">
        <div class="tou">
            <strong>O2O商城商家后台系统</strong>
        </div>
        <div class="dd">
            <el-input placeholder="登录账户" v-model="denglu" clearable class="login_text">
                <template slot="prepend"><i class="el-icon-user-solid"></i></template>
            </el-input>
        </div>
        <div class="dd">
            <el-input placeholder="登录密码" v-model="mima" show-password class="login_text">
                <template slot="prepend"><i class="el-icon-s-goods"></i></template>
            </el-input>
        </div>
        <div class="dd">
            <el-input placeholder="区分大小写" v-model="da" clearable class="login_text">
                <template slot="prepend"><i class="el-icon-s-opportunity"></i></template>
            </el-input>
        </div>
        <div class="ma" @click="refreshCode">
            <sidentify :identifyCode="identifyCode"></sidentify>
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @click="dianji()">
            <router-link tag="p" to="/Home">
                <p>免效验直接登录</p>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import sidentify from '../RandomCode/RandomCode'
export default {
    name: "Login",
    data() {
        return {
            denglu: '',
            mima: '',
            zhanghao: "",
            mima1: "",
            da: '',
            identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            identifyCode: '',
            msg: ""

        }
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
        dianji: function () {
            let than = this;
            this.$axios.post("http://139.9.169.87:8081/examsystem/login?username=" + than.denglu + '&password=' + than.mima)
                .then((res) => {
                    if (res.data.success) {
                        than.$router.push({
                            path: '/Home'
                        })
                    }
                })
        },
        submitForm() {

        }
    },
    components: {
        'sidentify': sidentify
    },
    created() {},
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.login_body {
    background: powderblue;
    width: 100%;
    height: 600px;
    background-size: 100%;
    position: absolute;

}

.login-xia {
    width: 290px;
    height: 310px;
    background: #fdd8de;
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    top: 25%;
}

.tou {
    text-align: center;
    line-height: 60px;
}

.tou strong {
    color: #ff8800;
}

.dd {
    width: 80%;
    line-height: 60px;
}

.dd[data-v-55d595c3] {
    margin-left: 8%;
}

.el-input-group__prepend {
    border-right: 0;
    font-size: 20px;
}

.el-input-group__append,
.el-input-group__prepend {
    background-color: #fff;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    padding: 0 10px;
    width: 1px;
    white-space: nowrap;
}

.dd:nth-of-type(4) {
    width: 55%;
}

.login_btn input {
    width: 80%;
    height: 40px;
    border: 1px solid #efefef;
    outline: none;
    cursor: pointer;
}

.login_btn {
    text-align: center;

}

.login_btn p {
    cursor: pointer;
    line-height: 30px;
    font-size: 14px;
    color: #ff8800;
}

.ma {
    cursor: pointer;
    margin-left: 65%;
    margin-top: -48px;
    padding-bottom: 5%;
}
</style>
