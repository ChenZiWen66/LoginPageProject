<template>
    <div>
        <ul class="nav nav-pills">
            <li role="presentation" :class="{'active':sheet==='Home'}" @click="setSheet('Home')">
                <router-link to="/media/img">Home</router-link>
            </li>
            <li role="presentation" :class="{'active':sheet==='Image'}" @click="setSheet('Image')">
                <router-link to="/media/img">图片</router-link>
            </li>
            <li role="presentation" :class="{'active':sheet==='Video'}" @click="setSheet('Video')">
                <router-link to="/media/video">视频</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data: function () {
            return {
                sheet: 'Home'
            }
        },
        methods: {
            setSheet(sheetName) {
                this.sheet = sheetName
            }
        }
    }
</script>