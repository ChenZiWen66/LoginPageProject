<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">用户注册</h4>
                    </div>
                    <div class="modal-body">
                        <div>用户名</div>
                        <div>密码</div>
                        <div>密码确认</div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">不注册了！关闭</button>
                        <button type="button" class="btn btn-primary">提交注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
