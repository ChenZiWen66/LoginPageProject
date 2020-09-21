<template>
    <div>
        <div class="panel panel-primary">
            <!-- Default panel contents -->
            <div class="panel-heading">用户信息查询</div>
            <div class="panel-body">
                <p>以下是用户信息查询的结果</p>
            </div>

            <!-- Table -->
            <table class="table">
                <tr>
                    <td>用户名</td>
                    <td>密码</td>
                </tr>
                <tr v-for="info in userInfo">
                    <td>{{info.username}}</td>
                    <td>{{info.password}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import message from "./message";
    export default {
        name: "PanelTable",
        data(){
            return{
                currentPage:Number(1),
                pageSize:Number(5),
                userInfo:[]
            }
        },
        methods:{
            getInfo() {
                let _this=this;
                this.$http.post("http://localhost:9002/crud/show",{currentPage:_this.currentPage,pageSize:_this.pageSize})
                    .then(function (response) {
                    _this.userInfo=response.data;
                });
            }
        },
        mounted:function () {
            let _this=this;
            _this.getInfo();
            message.$on("userInfoCurrentPage",function (currentpage) {
                _this.currentPage=currentpage;
            });
            message.$on("userInfoPageSize",function (pageSize) {
                _this.pageSize=pageSize;
            });
        },
        watch:{
            currentPage(){
                // alert("当前页面改变了:"+this.currentPage);
                this.getInfo();
                },
            pageSize(){
                alert("表格大小改变了"+this.pageSize);
                this.currentPage=1;
                this.getInfo();
            }
        }
    }
</script>
