<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-1">.col-md-1</div>
            <div class="col-md-2">.col-md-2</div>
        </div>
        <div class="row">
            <div class="col-md-8">.col-md-8</div>
            <div class="col-md-4">.col-md-4</div>
        </div>
        <div class="row">
            <!--      col-*-push-* 是将该列向后推*格      -->
            <!--      col-*-pull-* 是将该列向前拉*格      -->
            <div id="a" class="col-md-9 col-md-push-4">.col-md-9 .col-md-push-3</div>
            <div id="b" class="col-md-3 col-md-pull-5 ">.col-md-3 .col-md-pull-9</div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="col-md-6">
                    <label>
                        <input type="text" class="form-control" placeholder=".col-xs-2">
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-push-2">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"/>
                        <li data-target="#carousel-example-generic" data-slide-to="1"/>
                        <li data-target="#carousel-example-generic" data-slide-to="2"/>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img class="tupian" src="../../public/twly.jpg" alt="../../public/xiaolan.jpg">
                            <div class="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div class="item">
                            <img class="tupian" src="../../public/xiaolan.jpg" alt="../../public/twly.jpg">
                            <div class="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div class="item">
                            <img class="tupian" src="../../public/xiaolan.jpg" alt="../../public/twly.jpg">
                            <div class="carousel-caption">
                                ...
                            </div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bootstraptest"
    }
</script>
<style scoped>
    .container-fluid {
        background-color: antiquewhite;
    }

    .col-md-1 {
        background-color: blue;
    }

    .col-md-2 {
        background-color: coral;
    }

    #a {
        background-color: red;
    }

    #b {
        background-color: #42b983;
    }

    /*#carousel-example-generic{*/
    /*    height: auto;*/
    /*}*/
    /*.carousel-inner{*/
    /*    */
    /*}*/
    .carousel-inner .item{
        height:300px;
    }
    .carousel-inner .item img {
        width: auto; /* or width: 100% !important; */
        height: 100%;
        margin: auto;
    }
</style>