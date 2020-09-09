<template>
<div class="body-home">
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple home-div1">
                <img src="../../.././public/image/1.png">
                <span>O2O城市系统商户管理平台</span>
            </div>
        </el-col>

        <el-col :span="18">
            <div class="grid-content bg-purple bb">
                <ul class="bg-ul">
                    <router-link :to="{name:'Affairs'}" tag="li">商户质料管理</router-link>
                    <li>十月大神</li>
                    <li><i class="el-icon-bell"></i></li>
                    <router-link tag="li" to="/Home">
                        <i class="el-icon-s-home"></i>
                    </router-link>
                    <router-link tag="li" to="/Login">
                        <i class="el-icon-switch-button"></i>
                    </router-link>
                </ul>
            </div>
        </el-col>
    </el-row>
    <el-row class="tac">
        <el-col :span="12" id="el-tac">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>验证管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Verify'}" tag="el-menu-item" style="min-width:0px">验证消费卷</router-link>
                        <router-link :to="{name:'Coupon'}" tag="el-menu-item" style="min-width:0px">验证优惠券</router-link>
                        <router-link :to="{name:'Activity'}" tag="el-menu-item" style="min-width:0px">验证活动报名</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Group'}" tag="el-menu-item" style="min-width:0px">团购订单列表</router-link>
                        <router-link :to="{name:'Consumption'}" tag="el-menu-item" style="min-width:0px">商品订单列表</router-link>
                        <router-link :to="{name:'Draw'}" tag="el-menu-item" style="min-width:0px">优惠券领取记录</router-link>
                        <router-link :to="{name:'Enter'}" tag="el-menu-item" style="min-width:0px">活动报名</router-link>
                        <router-link :to="{name:'Store'}" tag="el-menu-item" style="min-width:0px">到店付</router-link>
                        <router-link :to="{name:'Open'}" tag="el-menu-item" style="min-width:0px">预售订单</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>评论管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Commodity'}" tag="el-menu-item" style="min-width:0px">消费评论</router-link>
                        <router-link :to="{name:'Make'}" tag="el-menu-item" style="min-width:0px">优惠券评论</router-link>
                        <router-link :to="{name:'activitys'}" tag="el-menu-item" style="min-width:0px">活动评论</router-link>
                        <router-link :to="{name:'Stores'}" tag="el-menu-item" style="min-width:0px">门店评论</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>项目管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Buying'}" tag="el-menu-item" style="min-width:0px">团购</router-link>
                        <router-link :to="{name:'Dity'}" tag="el-menu-item" style="min-width:0px">商品</router-link>
                        <router-link :to="{name:'bianjia'}" tag="el-menu-item" style="min-width:0px">优惠券</router-link>
                        <router-link :to="{name:'activityHou'}" tag="el-menu-item" style="min-width:0px">活动</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>财务管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Finance'}" tag="el-menu-item" style="min-width:0px">财务报表</router-link>
                        <router-link :to="{name:'Pos'}" tag="el-menu-item" style="min-width:0px">商户提现</router-link>
                        <router-link :to="{name:'Bank'}" tag="el-menu-item" style="min-width:0px">银行账户</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>门店管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Door'}" tag="el-menu-item" style="min-width:0px">门店列表</router-link>
                        <router-link :to="{name:'Customized'}" tag="el-menu-item" style="min-width:0px">外卖预定设置</router-link>
                        <router-link :to="{name:'Upper'}" tag="el-menu-item" style="min-width:0px">上面服务设置</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>账户管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Fast'}" tag="el-menu-item" style="min-width:0px">快递列表</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>营销管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Fare'}" tag="el-menu-item" style="min-width:0px">满免运费</router-link>
                        <router-link :to="{name:'Booking'}" tag="el-menu-item" style="min-width:0px">商品预售</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="9">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>外卖预定管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Take'}" tag="el-menu-item" style="min-width:0px">外卖订单</router-link>
                        <router-link :to="{name:'Fix'}" tag="el-menu-item" style="min-width:0px">预定订单</router-link>
                        <router-link :to="{name:'Sing'}" tag="el-menu-item" style="min-width:0px">异常外卖订单</router-link>
                        <router-link :to="{name:'Cope'}" tag="el-menu-item" style="min-width:0px">对账单</router-link>
                        <router-link :to="{name:'Reminder'}" tag="el-menu-item" style="min-width:0px">催单记录</router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="10">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>上门服务管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link :to="{name:'Run'}" tag="el-menu-item" style="min-width:0px">服务管理</router-link>
                        <router-link :to="{name:'BeTo'}" tag="el-menu-item" style="min-width:0px">服务订单</router-link>
                        <router-link :to="{name:'Seach'}" tag="el-menu-item" style="min-width:0px">数据遍历</router-link>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
        <router-view></router-view>
    </el-row>
    <router-link :to="{name:'HomeRight'}" class="bg-color"></router-link>
</div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.body-home {
    width: 100%;
    height: 40px;
    background: #ff8800;
}

.home-div1 span {
    color: #fff;
    font-size: 14px;
}

.bb {
    float: right;
}

.bg-ul li {
    display: inline;
    padding: 10px;
    color: white;
    cursor: pointer;
    line-height: 40px;
}

.bg-ul li:hover {
    background: #fcad53;
    opacity: 1;
}

#el-tac {
    width: 17%;
}

.body-right {
    float: right;
    margin-top: -560px;
    width: 85%;
    background: #ffffff;
    height: 55px;
}

.tac {
    background: #fcfcfc;
}
</style>
