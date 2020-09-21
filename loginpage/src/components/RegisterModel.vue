<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            注册账号
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">用户注册</h4>
                    </div>
                    <div class="modal-body">
                        <div>用户名<label>
                            <input type="text" v-model="userName">
                        </label></div>
                        <div>密码<label>
                            <input type="password" v-model="password">
                        </label></div>
                        <div>密码确认<label>
                            <input type="password" v-model="passwordconfirm">
                        </label></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">不注册了！关闭</button>
                        <button type="button" class="btn btn-primary" @click="submitInfo">提交注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'RegisterModel',
        data(){
            return{
                userName:'',
                password:'',
                passwordconfirm:'',
            }
        },
        methods:{
           submitInfo() {
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