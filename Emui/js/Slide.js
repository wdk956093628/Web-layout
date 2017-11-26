//轮播组件
;(function (win) {
    function Slide(cfg) {
        this.config = cfg;
        this.container = document.getElementById(this.config.dom);
        this.structure();
        this.roll();
        this.control();
    }

    Slide.prototype = {
        constructor: Slide,
        structure: function () {
            //渲染节点
            var tmp_wramp = document.createDocumentFragment(),
                _width = this.config.width,
                _height = this.config.height,
                _content,
                slide_list,
                _img,
                _info = "",
                botton_list,
                _botton;

            //创建容器 设置宽高；
            _content = document.createElement("div");
            _content.className = this.config.con;
            Slide.tools.attr(_content, "width", _width);
            Slide.tools.attr(_content, "height", _height);

            //循环生成节点
            for (var i = 0; i < this.config.img_num; i++) {
                //图片容器
                slide_list = document.createElement("div");
                slide_list.setAttribute("class", this.config.img_item);
                //图片
                _img = document.createElement("img");
                _img.className = "slide_img";
                _img.setAttribute("src", this.config.img_src[i]);
                slide_list.appendChild(_img);
                //文字
                _info = "<p>" + this.config.info[i] + "</p>";
                slide_list.innerHTML += _info;

                _content.appendChild(slide_list);

                //按钮
                botton_list = document.createElement("div");
                botton_list.className = "botton_list";

                _botton = document.createElement("span");
                _botton.setAttribute("class", this.config.slide_btn);
                _botton.innerHTML=i+1;

                botton_list.appendChild(_botton);

                _content.appendChild(botton_list);
            }

            //将文档碎片放到容器里
            tmp_wramp.appendChild(_content);
            this.container.appendChild(tmp_wramp);
        },
        roll: function () {
            //图片轮播
            for (var n = 0; n < 2; n++) {
                var show_timer = null,
                    slide_list = document.getElementsByClassName(this.config.img_item),
                    slide_btn = document.getElementsByClassName(this.config.slide_btn),
                    cur = 0;
            }
            show_timer = setInterval(function () {
                for (var i = 0; i < slide_list.length; i++) {
                    slide_list[i].style.opacity = 0;
                    slide_btn[i].setAttribute("style", "background:#0c88fc");
                }
                slide_list[cur].style.display = "block";
                slide_list[cur].style.opacity = 1;
                slide_btn[cur].setAttribute("style", "background:#5f5e5e");
                cur++;
                if (cur >= slide_list.length) {
                    cur = 0;
                }
            }, 5000);


        },
        control: function () {

            var slide_btn = document.getElementsByClassName("slide_btn");

            // slide_btn[0].addEventListener("click", function () {
            //     this.roll()
            // });
            // slide_btn[1].addEventListener("click", function () {
            //     this.roll()
            // });
        }
    };

    Slide.tools = {
        attr: function (dom, attrName, attrVal) {
            var arg_len = arguments.length;
            if (dom instanceof Object) {
                if (arg_len === 3) {
                    dom.style[attrName] = attrVal;
                    return true;
                } else {
                    throw new Error("参数错误!")
                }

            }
        }
    };
    win["Slide"] = Slide;
})(window, undefined);
