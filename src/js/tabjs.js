/**
 * Created by FD on 2016/8/8.
 */
$(function () {
    new RadioGrop("#check-group");
    new RadioGrop("#user-form-sex");

    userBtnInit();
    
    document.onclick = function () {
        
    }
    $(document).click(function () {

        $(".user-add-content").hide();
        $(".user-search-box").hide();
    });
});

function userBtnInit() {
    $(".user-add-content").hide();
    $(".user-search-box").hide();
    $(".user-add-content").click(function (ev) {
        var dd = $(ev.target).attr("id");
        if(dd == "user-add-btn"){
            return true;
        }else
            return false;
    });
    $(".user-search-box").click(function () {
        return false;
    });
    $("#user-add").click(function () {
        $(".user-add-content").toggle("slow");
        $(".user-search-box").hide();
        return false;
    });
    $("#user-search").click(function () {
        $(".user-search-box").toggle("slow");
        $(".user-add-content").hide();
        return false;
    });
};

/*  单选择按钮组 开始*/
function RadioGrop(ulId){
    this.ulLis = $(ulId).children();
    this.beforeLi;
    this.init();
};
RadioGrop.prototype.init = function () {
    if(this.ulLis.length > 0)
        this.beforeLi = this.ulLis[0]
    var _this = this;
    for(var i = 0; i < this.ulLis.length; i++){
        $(this.ulLis[i]).click(function () {
            var d = $(_this.beforeLi);
            d.removeClass();
            d.addClass("fa fa-circle-o");
            _this.beforeLi = this;
            d = $(this);
            d.removeClass();
            d.addClass("fa fa-dot-circle-o");
            return false;
        });
    };
};
/*
<ul id="check-group">
    <li class="fa fa-dot-circle-o"> 按姓名查询</li>
    <li class="fa fa-circle-o"> 按账号查询</li>
    <li class="fa fa-circle-o"> 按部门查询</li>
    <li class="fa fa-circle-o"> 按岗位查询</li>
    </ul>*/
/*  单选择按钮组 结束*/

/*  多选择按钮组 开始*/
function CheckGrop(ulId){
    this.ulLis = $(ulId).children();
    this.init();
};
CheckGrop.prototype.init = function () {
    for(var i = 0; i < this.ulLis.length; i++){
        $(this.ulLis[i]).click(function () {
            var d = $(this);
            var css = this.className;
            if(css == "fa fa-square"){
                d.removeClass();
                d.addClass("fa fa-check-square");
            }else{
                d.removeClass();
                d.addClass("fa fa-square");
            }
        });
    };
};
/*
 <ul id="check-group0">
 <li class="fa fa-check-square"> 按姓名查询</li>
 <li class="fa fa-square"> 按账号查询</li>
 <li class="fa fa-square"> 按部门查询</li>
 <li class="fa fa-square"> 按岗位查询</li>
 </ul>
 */
/*  多选择按钮组 结束*/


var fdf = '<div class="col-md-4"> <div> <a href="#"><span class="fa fa-edit"></span></a> <a href="#"><span class="fa fa-trash"></span></a> </div> <a href="javastript:void(0);" class="clearfix"> <div class="user-contact-box"> <div class="col-sm-4" style="text-align: center;"><img class="img-circle" src="../img/555.jpg" /> <h4>部门经理</h4> </div> <div class="col-sm-8"> <h3>小帅哥</h3> <abbr title="福建 三明搞不惹事热功耗热管犯得上还不让他额是个好人饿个飞人个人风格的微风威锋网"> <p><i class="fa fa-map-marker"></i> 福建 三明搞不惹事热功耗热管犯得上还不让他额是个好人饿个飞人个人风格的微风威锋网</p> </abbr><address> <i class="fa fa-phone"></i> 18159801056<br> <i class="fa fa-mail-reply-all"></i> 919379171@qq.com<br> <i class="fa fa-dribbble"></i> 研发二部<br> <i class="fa fa-user-secret"></i> lfd<br> </address> </div> </div> </a> </div>';
window.onscroll = function() {
    if(getCheck()){
        var boxs = $(".user-context");
        var dx="";
        for(var i = 0; i < 6; i++)
            dx+= fdf;
        boxs.append(dx);
    };
};
/**
 * 数据请求检验
 */
function getCheck(){
    var documentH = document.documentElement.clientHeight;
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    return documentH+scrollH>=getLastH() ?true:false;
}
/**
 * 获得最后一个box所在列的高度
 */
function getLastH(){
    var wrap = document.getElementById('wrap');
    var boxs = $(".user-context>div");
    return boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;
}
