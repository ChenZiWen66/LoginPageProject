<template>
    <div>
        <div>用户名<label>
            <input type="text" v-model="userName">
        </label></div>
        <div>密 码<label>
            <input type="password" v-model="password">
        </label></div>
        <div>
            <button type="button" class="btn btn-default" @click="userLogin">登陆</button>
            <Model/>
        </div>
    </div>
</template>

<script>
    import Model from "../components/RegisterModel.vue"

    export default {
        name: "Login",
        data(){
            return{
                userName:'',
                password:''
            }
        },
        components:{
            Model
        },
        methods:{
            userLogin(){
                let _this=this;
                // alert("用户名:"+_this.userName+"密码:"+_this.password+"密码确认:"+_this.passwordconfirm);
                this.$http.post("http://localhost:9005/user/login",{userName:_this.userName,password:_this.password})
                    .then(function (response){
                        alert("返回结果："+response.toString());
                        if (response==='1'){
                            alert('登陆成功');
                        }else {
                            alert('登陆失败');
                        }
                    })
            }
        }

    }
</script>