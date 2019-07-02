<template>
    <div>
        <div class="login" v-if="seen_login">
            <p class="login_text">登陆/注册</p>
            <input type="text" class="phone_num" placeholder="请输入手机号" v-model="phone_num">
            <button class="btn_verify" @click="Login">验证手机号</button>
        </div>
        <div class="login_code" v-if="seen_code">
            <p class="login_text">登陆/注册</p>
            <input type="text" class="phone_num" placeholder="请输入手机号" v-model="phone_num">
            <button class="btn_verify" @click="Login">获取验证码</button>
        </div>
    </div>
</template>
<script>
import {Notify } from 'vant'
export default {
    name:'Login',
    // created:function () {
    //     this.$emit('public_header', false);
    // },
    components:{
        [Notify.name]:Notify 
    },
    data () {
        return{
            phone_num:'',
            seen_login:true,
            seen_code:false
        }
    },
    methods:{
        Login(){
            if (!this.phone_num) {
               Notify({
                message: '请输入电话',
                duration: 1000,
                background: '#1989fa'
                });
                return;
            }else{
                this.$api.home.login({
                    mobile : this.phone_num 
                }).then(params => {
                        console.log(params)
                })
            }

        }
    }
}
</script>
<style lang="stylus" scoped>
    .login,.login_code
        display  flex 
        flex-direction column
        padding 0.8rem
        .login_text
            font-size 0.4rem
            color #333
            font-weight 600
            line-height 0.56rem
        .phone_num
            border-bottom 1px solid #979797
            margin-top 1.4rem
            line-height 1rem
        .phone_num::placeholder
            color #666
        .btn_verify
            width 5.88rem
            height 0.92rem
            margin-top 1.6rem
            background #000
            color #ffffff
            font-size 0.28rem
</style>
