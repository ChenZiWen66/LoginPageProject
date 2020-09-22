<template>
    <div>
        <ul class="nav nav-pills">
            <li role="presentation" :class="{'active':sheet==='Home'}" @click="setSheet('Home')">
                <a href="#">Home</a>
            </li>
            <li role="presentation" :class="{'active':sheet==='Profile'}" @click="setSheet('Profile')">
                <a href="#">Profile</a>
            </li>
            <li role="presentation" :class="{'active':sheet==='Message'}" @click="setSheet('Message')">
                <a href="#">Messages</a>
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