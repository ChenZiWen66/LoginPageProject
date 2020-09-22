<template>
    <div>
        <div>
            <Navigation/>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
    import Navigation from "../components/Navigation";

    export default {
        components:{
            Navigation
        }
    }
</script>
