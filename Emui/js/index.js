$(function(){
    var _opt= $(".index-choose-option");
    var _tip1= $("#index-tips_1");
    var _tip2= $("#index-tips_2");
    //tab切换
    _opt.eq(0).click(function(){
        _opt.eq(0).attr("style","border-color:#007dff");
        _opt.eq(1).attr("style","border-color:darkgray");
       _tip1.attr("style","display:block");
        _tip2.attr("style","display:none");
    }) ;
        _opt.eq(1).click(function(){
            _opt.eq(1).attr("style","border-color:#007dff");
            _opt.eq(0).attr("style","border-color:darkgray");
        _tip1.attr("style","display:none");
        _tip2.attr("style","display:block");
    });






});