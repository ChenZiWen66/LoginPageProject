<template>
    <div>
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                选择表的大小
                <span class="caret"/>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li @click="setPageSize(5)">5条</li>
                <li role="separator" class="divider"/>
                <li @click="setPageSize(8)">8条</li>
                <li role="separator" class="divider"/>
                <li @click="setPageSize(10)">10条</li>
                <li role="separator" class="divider"/>
                <li @click="setPageSize(15)">15条</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import message from "./message";

    export default {
        name: "PageSize",
        data(){
            return{
                pageSize:Number(5)
            }
        },
        methods:{
            setPageSize(pageSize){
                message.$emit('userInfoPageSize',pageSize);
            }
        }
    }
</script>