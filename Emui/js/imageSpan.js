;(function (win){
    function imageSpan(cfg,content){
        //获取参数
        this.config   = cfg;
        this.content = content;
        //获取节点（最大容器imageSpan_item）
        this.container = document.getElementsByClassName(this.config.dom);
        //布局(调用structrue函数)
        this.structrue();
    }
    imageSpan.prototype={
        constructor:imageSpan,
        structrue:function() {
            //如果img和text的内容匹配则创建节点，否则抛出错误
            //内容的个数
            for (var j = 0; j < this.container.length; j++) {
                this.container[j].style.width = this.config.width;
                this.container[j].style.paddingTop = 30+"px";
                this.container[j].style.margin = "auto";
                //获取参数个数
                var content_len = this.config.content_len;
                //图片的个数
                var img_len = this.content.img.length;
                //内容的个数
                var text_len = this.content.text.length;
                //创建图片和文字的容器
                if (img_len === text_len) {
                    //创建文档碎片
                    var imageSpan_tmp = document.createDocumentFragment();
                    for (var i = 0; i < content_len; i++) {
                        //创建span标签
                        var a_ele = document.createElement("a");
                        a_ele.className = "imageSpan_item";
                        //给span动态的设置宽
                        a_ele.style.width = this.config.width_item;
                        a_ele.style.height = this.config.height;
                        imageSpan_tmp.appendChild(a_ele);
                        //把span放进header中
                        this.container[j].appendChild(imageSpan_tmp);
                        a_ele.innerHTML = "<img class='imageSpan_img'>" + "<span class='imageSpan_text'></span>";
                        var imageSpan_img = this.container[j].getElementsByClassName("imageSpan_img");
                        imageSpan_img[i].setAttribute("src", this.content.img[i]);
                        var imageSpan_text = this.container[j].getElementsByClassName("imageSpan_text");
                        imageSpan_text[i].innerHTML = this.content.text[i];
                        }
                    }
                else {
                throw new Error("img和text的内容不匹配")
                }
            }

        }
    };
    win['imageSpan'] = imageSpan;
})(window);


//定义content，传入内容
var content={
    img:[
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone1.png',
        '../img/download_img/phone2.png',
        '../img/download_img/phone2.png',
        '../img/download_img/phone2.png',
        '../img/download_img/phone2.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone3.png',
        '../img/download_img/phone4.png',
        '../img/download_img/phone4.png',
        '../img/download_img/phone4.png',
        '../img/download_img/phone4.png',
        '../img/download_img/phone4.png',
        '../img/download_img/phone5.png',
        '../img/download_img/phone5.png',
        '../img/download_img/phone5.png',
        '../img/download_img/phone5.png',
        '../img/download_img/phone5.png',
    ],
    text:["P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)"]
};
var config={
    dom:"imageSpan_container",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:30
};
var content2={
    img:[
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png'
    ],
    text:['P8max双4G版(DAV-703L)','P8max双4G版(DAV-703L)',"P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)"]
};

var config2={
    dom:"imageSpan_container2",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:10
};
//定义content，传入内容
var content3={
    img:[
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png'
    ],
    text:['P8max双4G版(DAV-703L)','P8max双4G版(DAV-703L)',"P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)"]
};
var config3={
    dom:"imageSpan_container3",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:6
};
var content4={
    img:[
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png'
    ],
    text:['P8max双4G版(DAV-703L)','P8max双4G版(DAV-703L)',"P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)"]
};

var config4={
    dom:"imageSpan_container4",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:10
};
//定义content，传入内容
var content5={
    img:[
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png',
        '../img/newFunction_img/phone11.png'
    ],
    text:['P8max双4G版(DAV-703L)','P8max双4G版(DAV-703L)',"P8max双4G版(DAV-703L)","P8max双4G版","P8max双4G版(DAV-703L)","P8max双4G版(DAV-703L)"]
};
var config5={
    dom:"imageSpan_container5",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:6
};
var content6={
    img:[
        '../img/download_img/none_phone.png'
    ],
    text:['没有您要搜索的结果.']
};

var config6={
    dom:"imageSpan_container6",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:1
};
//定义content，传入内容
var content7={
    img:[
        '../img/download_img/huawei_box.jpg'
    ],
    text:["华为盒子M330"]
};
var config7={
    dom:"imageSpan_container7",
    width:"960px",
    width_item:"190px",
    height:"286px",
    content_len:1
};
new imageSpan(config,content);
new imageSpan(config2,content2);
new imageSpan(config3,content3);
new imageSpan(config4,content4);
new imageSpan(config5,content5);
new imageSpan(config6,content6);
new imageSpan(config7,content7);