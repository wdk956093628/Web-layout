window.onload = function () {
    var download_product = document.getElementsByClassName("download_product")[0];
    console.log(download_product);
    eventHandler("click",".check_more",function(){hidden()},true);
    function hidden() {
        download_product.style.overflow = "visible";
        download_product.style.height = "auto";
        for(var k =0 ;k<check_more.length;k++){
            check_more[k].style.display="none";
            console.log(check_more[k]);
        }
    }


    //获取DOM节点
    var phone_title =document.getElementsByClassName("phone_title");
    var product_list = document.getElementsByClassName("product_list");
    var check_more = document.getElementsByClassName("check_more");

    //循环遍历
    for(var y=0;y<phone_title.length;y++){
        phone_title[y].index=y;
        //鼠标点击改变其样式
        phone_title[y].onclick=function(){
            for(var j=0;j<product_list.length;j++){
                product_list[j].style.display="none";
                phone_title[j].style.background="";
                phone_title[j].style.color="";
            }
            console.log(this.index);
            product_list[this.index].style.display="block";
            phone_title[this.index].style.background="#007dff";
            phone_title[this.index].style.color="white";
            for(var m=0;m<product_list.length;m++){
                check_more[m].style.display="none";
            }
            check_more[this.index].style.display="block";
            check_more[this.index].style.height="auto";
        }

    }
};