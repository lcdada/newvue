<template>
    <div>
        <div class="login" v-show="seen_login">
            <p class="login_text">登录/注册</p>
            <input type="text" class="phone_num" placeholder="请输入手机号" v-model="phone_num">
            <button class="btn_verify" @click="Login">验证手机号</button>
        </div>
        <div class="login_code" v-show="!seen_login">
            <p class="login_text">登录/注册</p>
            <p class="phone_num_text">{{ this.phone_num }}</p>
            <div class="codeAll">
                <input id="first" class="inputStyle" v-model="code[0]"  type="text"/>
                <input id="second" class="inputStyle" v-model="code[1]"  type="text"/>
                <input id="third" class="inputStyle" v-model="code[2]"  type="text"/>
                <input id="forth" class="inputStyle" v-model="code[3]" name="code[3]"  type="text"/>
            </div>
            <button class="btn_verify">重新获取验证码{{codeTime}}s</button>
        </div>
    </div>
</template>
<script>
import {Notify } from 'vant'
import { mapMutations } from 'vuex';
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
            codeTime:0,
            smsCode:'',
            code:new Array(4),
            codeId:['first','second','third','forth'],

        }
    },
    watch:{
        code:function(newValue,oldValue){
            let tempValue=''
            for(let i=0;i<newValue.length;i++){
                if(i==4){
                    console.log(i)
                    break
                }
                if(newValue[i]){
                    tempValue=tempValue+newValue[i]		
                }
            }
            this.smsCode=tempValue
            console.log('smsCode '+this.smsCode)
            let m=tempValue.split("")
            let location=0
            for(let i=0;i<newValue.length;i++){
                if(m[i]&&i<4){
                    location++
                    newValue[i]=m[i]
                }else{
                    newValue[i]=''
                }
            }
            // console.log(this.codeId[i])
            if(location<1){
                location=1
            }else if(location>4){
                location=4
                if(this.code[3] != ""){
                    console.log(899999999)
                }
            }
            document.getElementById(this.codeId[location-1]).focus( )
            console.log(this.smsCode)
            console.log(this.code[3])
            console.log(tempValue.length)
            if(tempValue.length == 4){
                let _this = this;
                this.$api.home.tologin({
                    mobile : this.phone_num,
                    code:this.smsCode
                }).then(params => {
                    if(params.data.code == 1000){
                    //    console.log(params)
                       console.log(params)
                        _this.userToken = params.data.data.token;
                        // 将用户token保存到vuex中
                        _this.changeLogin({ Authorization: _this.userToken });
                        _this.$router.push('/');
                        alert('登陆成功');
                       this.seen_login = false;
                       this.codeTime = 60;
                       var codeTimeTimer =  setInterval(()=>{
                            this.codeTime--;
                            if(this.codeTime<=0){
                                this.seen_login = true;
                                clearInterval(codeTimeTimer);
                            }
                        }, 1000);
                    }
                    
                }).catch(error => {
                    alert(params.data.error)
                })
            }
        },
       
          
    },
    methods:{
        ...mapMutations(['changeLogin']),
        Login(){
            if (!this.phone_num) {
               Notify({
                message: '请输入电话',
                duration: 1000,
                background: '#1989fa'
                });
                return;
            }else{
                this.$api.home.getCode({
                    mobile : this.phone_num 
                }).then(params => {
                    if(params.data.code == 1000){
                       console.log(params)
                       this.seen_login = false;
                       this.codeTime = 60;
                       var codeTimeTimer =  setInterval(()=>{
                            this.codeTime--;
                            if(this.codeTime<=0){
                                this.seen_login = true;
                                clearInterval(codeTimeTimer);
                            }
                        }, 1000);
                    }
                    
                }).catch(error => {
                    alert(params.data.error)
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
        .phone_num_text
            display block
            height 0.4rem
        .codeAll
            height 2rem
            display flex
            justify-content space-between
            align-items center
            .inputStyle
                width 0.8rem
                text-align center
                border-bottom  1px solid #ccc
        .phone_num
            border-bottom 1px solid #979797
            margin-top 1.4rem
            line-height 1rem
        .phone_num::placeholder
            color #666
        .btn_verify
            width 100%
            height 0.92rem
            border-radius 0.08rem
            margin-top 1.6rem
            background #000
            color #ffffff
            font-size 0.28rem
            .time
                color red
</style>
