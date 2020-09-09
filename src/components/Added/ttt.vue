<template>
<div>
    <div class="div1">
        第一个id:<input type="text" v-model="add1" /><br />
        2:<input type="text" v-model="add2" /><br />
        3:<input type="text" v-model="add3" /><br />
        4:<input type="text" v-model="add4" /><br />
        5:<input type="text" v-model="add5" /><br />
        第二个id:<input type="text" v-model="add6" /><br />
        <button type="submit" @click="tijiao">提交</button>
    </div>
</div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
        return {
            add1: "",
            add2: "",
            add3: "",
            add4: "",
            add5: "",
            add6: "",
            con: true
        }
    },
    methods: {
        tijiao() {
            let data = qs.stringify({
                "professional.id": this.add1,
                "professional.professionalName": this.add2,
                "professional.professionalDesc": this.add3,
                "courseName": this.add4,
                "id": this.add5,
                "professionalId": this.add6
            })
            if (this.con) {
                alert(1111)
                this.$axios.post("http://139.9.169.87:8081/examsystem/addCourse?professional.id=", +this.add1 + '&professional.professionalName' + this.add2 +
                    'professional.professionalDesc' + this.add3 + 'courseName' + this.add4 + 'id' + this.add5 + 'professionalId' + this.add6, {
                        headers: {
                            'Content-Type': ' application/x-www-form-urlencoded'
                        }
                    }).then((res) => {
                    if (res.data.success) {
                        alert('新增成功！')
                        this.$router.push({
                            path: '/Home/Seach'
                        })
                    }
                })
            } else {
                this.$axios.post("http://139.9.169.87:8081/examsystem/updateCourse", data, {
                    headers: {
                        'Content-Type': ' application/x-www-form-urlencoded'
                    }
                }).then((res) => {
                    if (res.data.success) {
                        alert('修改成功！')
                        this.$router.push({
                            path: '/Home/Seach'
                        })
                    }
                })
            }

        }
    },
    created() {
        let duix = this.$route.params.duix
        // console.log(duix)
        if (duix != null) {
            this.add1 = duix.professional.id
            this.add2 = duix.professional.professionalName
            this.add3 = duix.professional.professionalDesc
            this.add4 = duix.courseName
            this.add5 = duix.id
            this.add6 = duix.professionalId
            this.con = false
        }
    }
}
</script>

<style>
.div1 {
    margin-top: 30px;
    margin-left: 300px;
}
</style>
