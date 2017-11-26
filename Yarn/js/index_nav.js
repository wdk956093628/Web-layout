window.onload = function () {
    var mobile_list = document.getElementById("head_content");
    var btn = document.getElementsByClassName("btn")[0];
    btn.addEventListener("click", function () {
        moving()
    });

    function moving() {
             var top_val = getStyle(mobile_list,"margin-top");
             if (top_val===30) {
                 top_val=390;
             } else {
                 top_val =30;
                 console.log(top_val)
             }
             mobile_list.style.marginTop = top_val + "px";
    }
};

