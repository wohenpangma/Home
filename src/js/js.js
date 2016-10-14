/**
 * Created by FD on 2016/8/2.
 */
var menlist = $(".nav-dropdown-menu>a");
var tabsFD;
$(function () {
    setMenu();
    toggleMenu();
    tabsFD = new TabsFD("#right-wrapper-tabs","#tabs-content");
});
/* 菜单 开始 */
function setMenu() {
    for(var i = 0; i < menlist.length; i++){
        var $ii = $(menlist[i]);
        $ii.click(function () {
            var d = $(this).parent();
            var $ul = $(this).next("ul");
            if(!$ul.is(":hidden")) {
                
                return;
            }
            hiddenMenu();
            var dd = $(this).find(".fa");
            $(dd[1]).removeClass();
            $(dd[1]).addClass("fa fa-angle-down");
            $ul.stop(true,true).toggle("slow");
            d.addClass('nav-dropdown-menud ');
        });
        $ii.next("ul").toggle();
    };
}
function hiddenMenu(){
    for(var i = 0; i < menlist.length; i++){
        var $ii = $(menlist[i]);
        var dd = $ii.find(".fa");
        $(dd[1]).removeClass();
        $(dd[1]).addClass("fa fa-angle-left");
        $ii.next("ul").stop(true,true).hide("slow");
        var d = $ii.parent();
        d.removeClass('nav-dropdown-menud');
    };
}
function toggleMenu() {
    $("#menu-dropdown").click(function () {
        var $menu = $("#left-wrapper");
        var $m = $("#right-wrapper");
        if($menu.is(":hidden")){
            $menu.animate({width:"+224px"},"slow",function () {
                $menu.removeAttr("style");

            });
            $menu.removeClass();
            $menu.addClass("left-wrapper");
            $m.animate({padding:"0 0 0 +224px"},"slow",function () {
                $m.removeClass();
                $m.addClass("right-wrapper");
                $m.removeAttr("style");
            });
        }else{
            $menu.animate({width:"-1px"},"slow",function () {
                $menu.removeClass();
                $menu.addClass("left-wrapperX");
                $menu.removeAttr("style");
            });
            $m.animate({padding:"0px"},"slow",function () {
                $m.removeClass();
                $m.addClass("right-wrapperX");
                $m.removeAttr("style");
            });
        }
    })
}
/* 菜单 结束 */

/* 选项卡  开始  */
/* {"name":"home","url":"www.fdaxy.com"} */
function TabsFD(tabsId,contextId) {
    this.curTab = '';
    this.berforeTab = '';
    this.arrTabs = [];
    this.$tabId = $(tabsId);
    this.$contextId=$(contextId);
    this.initTabs();
};
TabsFD.prototype.showTab = function (name) {
    if(this.curTab != '') {
        var df = document.getElementById("content"+this.curTab);
        if(df != undefined){
            var dg = $("#tabs"+this.curTab+">span");
            $(dg).removeClass();
            $(df).hide();
        }
        this.berforeTab = this.curTab;
    }else{
        this.berforeTab = "主页";
    }
    this.curTab = name;
    var ddf = document.getElementById("content"+name);
    if(ddf != undefined){
        var dg = $("#tabs"+this.curTab+">span");
        var n = name.length;
        $(dg).addClass("fffx "+"fffx"+n);
        $(ddf).show();
    }
};

TabsFD.prototype.initTabs = function () {
    this.addTabs("主页","html/main.html");
};
TabsFD.prototype.addTabs = function (name,url) {
    if(this.findTab(name) != -1){
        this.showTab(name);
        return;
    };
    var li='<li id="tabs'+name+'"><a href="javascript:void(0);" onclick="tabsFD.showTab(\''+name+'\')"><span>'+name+'</span></a> <a href="javascript:void(0);" onclick="tabsFD.delTabs(\''+name+'\')"><span class="fa fa-close"></span></a> <span class=""></sapn></li>';

    this.$tabId.append(li);
    var content='<div id="content'+name+'" style="width: 100%;height: 100%;"><iframe frameborder="0" src="'+url+'" style="width: 100%;height: 100%;"></iframe></div>';
    this.$contextId.append(content);
    this.arrTabs.push({"name":name,"url":url});
    this.showTab(name);
};
TabsFD.prototype.delTabs=function (name) {
    this.$tabId.find('#tabs'+name).remove();
    this.$contextId.find('#content'+name).remove();
    var i = this.findTab(name);
    if(i != -1){
        this.arrTabs.splice(i,1);
    };
    if(name == this.curTab){
        this.showTab(this.arrTabs[this.arrTabs.length-1].name);
    }else{
        this.berforeTab = '';
    }
};
TabsFD.prototype.findTab = function (name) {
    var lengths = this.arrTabs.length;
    for(var i = 0; i< lengths; i++){
        if(this.arrTabs[i].name == name){
            return i;
        };
    };
    return -1;
}
/* 选项卡  结束*/

/*    数据接受  start */
function GetNewInfo() {
    $.ajax({
        type:'GET',
        url:'',
        data:'',
        success:function (msg) {
            
        }
    },true);
}
/*    数据接受  end */