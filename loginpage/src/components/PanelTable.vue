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
            this.getInfo();
            return{
                currentPage:Number(1),
                pageSize:Number(1),
                userInfo:[]
            }
        },
        methods:{
            getInfo:function () {
                let _this=this;
                this.$http.get("http://localhost:9002/crud/show").then(function (response) {
                    // console.log(response.data);
                    // this.userInfo=response.data;
                    _this.userInfo=response.data;
                });
            }
        },
        mounted:function () {
            let _this=this;
            message.$on("userInfoCurrentPage",function (currentpage) {
                // console.log("接收数据{}",currentpage);
                _this.currentPage=currentpage;
                // alert("当前页面改变了"+currentpage);
            });
        },
        watch:{
            currentPage(){
                alert("当前页面改变了:"+this.currentPage);
                },
            pageSize(){
                alert("表格大小改变了"+this.pageSize)
            }
        }
    }
</script>
