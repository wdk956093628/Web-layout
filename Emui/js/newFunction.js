/**
 * Created by Administrator on 2017/9/21.
 */
//封装吸顶函数。
function ceiling(obj) {
    var nav_scrollTop = obj.offsetTop;
    document.onscroll = function () {
        var body_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute("data-fixed",body_scrollTop>= nav_scrollTop?"fixed":"");
    }
}
//视频触摸自动播放
function autoplay(obj) {
    for(var i = 0;i<obj.length;i++){
        (function (n) {
            obj[n].onmouseover=function () {
                obj[n].play();
            }
        })(i)
    }
}
//获取DOM节点
var switch_list =document.getElementsByClassName("switch_list");
var switch_img_list = document.getElementsByClassName("switch_img_list");
switch_list[0].style.background="white";
switch_list[0].style.color="#007DFF";
switch_img_list[1].style.opacity=0.2;
switch_img_list[2].style.opacity=0.2;
//循环遍历
for(var y=0;y<switch_list.length;y++){
    switch_list[y].index=y;
    //鼠标点击改变其样式
    switch_list[y].onclick=function(){
        for(var j=0;j<switch_img_list.length;j++){
            switch_img_list[j].style.opacity=.2;
            switch_list[j].style.background="";
            switch_list[j].style.color="";
        }
        switch_img_list[this.index].style.opacity=1;
        switch_list[this.index].style.background="white";
        switch_list[this.index].style.color="#007DFF";
    }
}
document.onscroll = function () {
    var move = document.getElementsByClassName("move");
    console.log(move);
    for(var i =0;i<move.length;i++){
        (function(n){
            var nav_scrollTop = move[n].offsetTop;
            console.log(move[n]);
            console.log(nav_scrollTop);
            var body_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(body_scrollTop<nav_scrollTop-500){
                move[i].setAttribute("class","animated slideInUp")
            }
            else{
                move[n].className=("second_screen_text animated slideInUp");
            }
        })(i);
    }
};