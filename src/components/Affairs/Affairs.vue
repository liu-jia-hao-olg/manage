<template>
<div class="Affairs">
    <div class="aff">
        <ul>
            <li>|</li>
            <li>商户资料管理</li>
        </ul>
        <div class="zhong">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 90%;margin-left:5%">
                <el-tab-pane label="商户质料管理" name="first">
                    <el-table :data="tableData" border>
                        <el-table-column prop="date" label="商家名称：" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="十月大神商家">
                        </el-table-column>
                    </el-table>
                    <el-button type="warning" style="margin-left:20%;margin-top: 20px;">编辑</el-button>
                    <router-link tag="buttom" to="/Home" style="margin-left:10px">
                        <el-button type="success">返回</el-button>
                    </router-link>

                </el-tab-pane>
                <el-tab-pane label="加盟协议" name="second">
                    <ul class="body-second">
                        <li>O2O商城系统服务协议</li><br>
                        <li>您确认，在开始"实名认证"前，您已详细阅读了本协议所有内容，一旦您开始认证流程，即表示您充分理解并同意接受本协议的全部内容。

                            为了提高服务的安全性和我们的商户身份的可信度，我们向您提供认证服务。在您申请认证前，您必须先注册成为用户。商户认证成功后，我们将给予每个商户一个认证标识。本公司有权采取各种其认为必要手段对商户的身份进行识别。但是，作为普通的网络服务提供商，本公司所能采取的方法有限，而且在网络上进行商户身份识别也存在一定的困难，因此，本公司对完成认证的商户身份的准确性和绝对真实性不做任何保证。

                            本公司有权记录并保存您提供给本公司的信息和本公司获取的结果信息，亦有权根据本协议的约定向您或第三方提供您是否通过认证的结论以及您的身份信息。</li><br>
                        <li>一、关于认证服务的理解与认同</li><br>
                        <li>二、实名认证</li><br>
                        <li>三、特别声明</li><br>
                        <li>四、第三方网站的链接</li><br>
                    </ul>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Affairs",
    data() {
        return {
            activeName: 'second',
            tableData: [{
                date: '申请会员：',
                name: '十月大神',
            }, {
                date: '营业执照：',
                name: '无图片',
            }, {
                date: '其它资质：',
                name: '无图片',
            }, {
                date: '商户商标：',
                name: '无图片',
            }, {
                date: '门店默认图片：',
                name: '无图片',
            }, {
                date: '城市：',
                name: '广东省  广州市  越秀区',
            }, {
                date: '商圈：',
                name: '天河商圈',
            }, {
                date: '地址：',
                name: '东园横路1号',
            }, {
                date: '联系电话：',
                name: '18812345678',
            }, {
                date: '联系人：',
                name: '十月大神',
            }, {
                date: '营业时间：',
                name: '周一至周五8点至20点，周六周日全天',
            }]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
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
    margin-top: 20px;
    margin-left: 18%;
    padding-bottom: 60px;
}

.Affairs {
    background: #fcfcfc;
}

.body-second li {
    font-size: 12px;
}
</style>
