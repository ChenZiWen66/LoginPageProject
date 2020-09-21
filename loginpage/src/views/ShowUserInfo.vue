<template>
    <div>
        <!--一个浏览用户信息的页面-->
        <div><PanelTable/></div>
        <br/>
        <div><Pagination/></div>
        <div><PageSize/></div>
    </div>
</template>
<script>
    import Pagination from "../components/Pagination";
    import PanelTable from "../components/PanelTable";
    import PageSize from "../components/PageSize";
    export default {
        components:{
            PanelTable,Pagination,PageSize
        }
    }
</script>