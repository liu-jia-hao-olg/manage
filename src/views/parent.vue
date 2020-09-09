<template>
<div>
    <router-link :to="{name:'a'}">A</router-link> |
    <router-link :to="{name:'b'}">B</router-link> |
    <router-link :to="{name:'c'}">C</router-link> |
    <router-view></router-view>
</div>
</template>

<script>
export default {

    //通过path路径进行跳转
    //     <router-link to="/parent/a">A</router-link> |
    // <router-link to="/parent/B">B</router-link> |
    // <router-link to="/parent/C">C</router-link> |

}
</script>

<style>

</style>
