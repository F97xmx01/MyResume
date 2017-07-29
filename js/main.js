$(document).ready(function() {
    TAB(".box ul li");
});

// 手风琴
function TAB(name) {
    $(name).hover(function() {
        $(this).siblings().find("#action").removeClass('action');
        // 删除同级Class
        $(this).find("#action").addClass('action');
        // 添加Class予当前活动Div
    });
};