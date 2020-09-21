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
                <tr>
                    <td>czw123</td>
                    <td>123456</td>
                </tr>
                <tr>
                    <td>czw123</td>
                    <td>123456</td>
                </tr>
                <tr>
                    <td>czw123</td>
                    <td>123456</td>
                </tr>
                <tr>
                    <td>czw123</td>
                    <td>123456</td>
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
                pageSize:Number(1)
            }
        },
        mounted:function () {
            let _this=this;
            message.$on("userInfoCurrentPage",function (currentpage) {
                // console.log("接收数据{}",currentpage);
                _this.currentPage=currentpage;
                // alert("当前页面改变了"+currentpage);
            })
        },
        watch:{
            currentPage(){
                alert("当前页面改变了:"+this.currentPage)
                },
            pageSize(){
                alert("表格大小改变了"+this.pageSize)
            }
        }
    }
</script>
