<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>团购订单列表</li>
        </ul>
        <div class="zhong">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="width: 90%;margin-left:5%;position: relative;
    top: 15px;">
                <el-tab-pane label="消费券验证" name="first">
                    <div class="body-men">
                        <p>选择门店</p>
                        <select class="SS">
                            <option>花生米科技公司总部</option>
                            <option>花生米科技公司（越秀店）</option>
                            <option>花生米科技公司（天河店）</option>
                            <option>花生米科技公司（黄埔店）</option>
                        </select>
                        <p>请先验证消费券，再接待</p>
                        <el-input placeholder="请输入验证码【123456】" v-model="xiao" clearable class="login_text">
                        </el-input>
                        <el-button type="warning" @click="dianji()" style="margin-left:15px">验证消费卷</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="消费券批量验证" name="second">
                    <div class="body-men">
                        <p>选择门店</p>
                        <select class="SS">
                            <option>花生米科技公司总部</option>
                            <option>花生米科技公司（越秀店）</option>
                            <option>花生米科技公司（天河店）</option>
                            <option>花生米科技公司（黄埔店）</option>
                        </select>
                        <p>请先验证消费券，再接待</p>
                        <el-input placeholder="请输入消费卷【123456】" v-model="xiao" clearable class="login_text">
                        </el-input><br>
                        <el-input placeholder="请输入验证码【111111】" v-model="ma1" clearable class="login_text">
                        </el-input><br>
                        <el-input placeholder="请输入验证码【222222】" v-model="ma2" clearable class="login_text">
                        </el-input><br>
                        <el-input placeholder="请输入验证码【333333】" v-model="ma3" clearable class="login_text">
                        </el-input><br>
                        <el-input placeholder="请输入验证码【1】" v-model="ma4" clearable class="login_text">
                        </el-input><br>
                        <el-button type="warning" @click="dianji()">验证消费卷</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="超级验证" name="third">
                    <div class="body-men">
                        <p>选择门店</p>
                        <select class="SS">
                            <option>花生米科技公司总部</option>
                            <option>花生米科技公司（越秀店）</option>
                            <option>花生米科技公司（天河店）</option>
                            <option>花生米科技公司（黄埔店）</option>
                        </select>
                        <p>请先验证消费券，再接待</p>
                        <el-input placeholder="请输入消费卷【123456】" v-model="xiao" clearable class="login_text">
                        </el-input>
                        <el-button type="warning" @click="dianji()" style="margin-left:15px">验证消费卷</el-button>
                        <div id="wen">
                            <p>温馨提示:</p>
                            <p>超级验证，输入其中一个消费券可以查询出该订单下所有可用消费券；</p>
                            <p>根据输入的张数随机抽取你要使用的消费券，但必须是同一款商品；</p>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Verify',
    data() {
        return {
            activeName: 'first',
            xiao: '',
            ma1: '',
            ma2: '',
            ma3: '',
            ma4: ''
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        dianji: function () {
            var fei = /^([1-6]){6}$/;
            if (this.xiao == null || this.xiao == '') {
                alert("请输入消费券序列号");
            } else {
                if (!fei.test(this.xiao)) {
                    alert("消费券验证码错误")
                } else {
                    alert("验证成功，等待接待!");
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
    line-height: 50px;
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
