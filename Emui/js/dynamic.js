window.onload = function () {
    //中间横幅部分
    var show_timer = null;
    var show_timer1 = null;
    var show_item = document.getElementsByClassName("show-item");
    var container = document.getElementsByClassName("media-show")[0];
    var prev = document.getElementsByClassName("show-left")[0];
    var next = document.getElementsByClassName("show-right")[0];
    var cur = 0;

    next.addEventListener("click", function () {
        show()
    });
    prev.addEventListener("click", function () {
        show()
    });

    function show() {
        for (var i = 0; i < show_item.length; i++) {
            show_item[i].style.opacity = 0;
        }
        show_item[cur].style.display = "block";
        show_item[cur].style.opacity = 1;
        cur++;
        if (cur >= show_item.length) {
            cur = 0;
        }
    }

    //添加定时器
    show_timer = setInterval(function () {
        show()
    }, 2000);

    //
    container.onmouseover = function () {
        clearInterval(show_timer);
        clearInterval(show_timer1);
    };
    //鼠标移出重新绑定计时器
    container.onmouseout = function () {
        show_timer1 = setInterval(function () {
            show(1)
        }, 2000);
    };

};

