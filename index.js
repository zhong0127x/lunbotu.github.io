window.onload = function() {
    var box = document.querySelector(".box");
    var imgs = document.querySelectorAll("img");
    var leftArrow = document.querySelector(".left");
    var rightArrow = document.querySelector(".right");
    var iconsList = document.querySelectorAll(".icons");
    var lis = document.querySelectorAll("li");

    // 钥匙
    var key;

    // 循环遍历
    var m = 0;

    // 设置定时器时间
    var speed = 2000;

    // 定时器
    var playTimer = setInterval(runPlay, speed);

    // 定时函数
    function runPlay() {
        if( m == imgs.length - 1) {
            m = -1;
        }
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].className = "";
            lis[i].style.backgroundColor = "rgba(255, 255, 255, .4)";
        }
        imgs[m + 1].className = "current";
        lis[m + 1].style.backgroundColor = "blue";
        m ++;
    };

    // 设置滑动块和图片切换而切换
    for(var i = 0; i < lis.length; i++) {
        (function(i){
            lis[i].addEventListener("click", function(){
                for(var j = 0; j < lis.length; j++) {
                    lis[j].style.backgroundColor = "rgba(255, 255, 255, .4)";
                    imgs[j].className = "";
                }
                lis[i].style.backgroundColor = "blue";
                imgs[i].className = "current";
                m = i;
            }, false);
        }(i));
    }

    // 鼠标移入图片区域显示左右图标
    // box.addEventListener("mouseenter", function() {
    //     var len = iconsList.length;
    //     for(var i = 0; i < len; i++) {
    //         iconsList[i].style.display = "block";
    //     }
        
    //     // 停止定时
    //     clearInterval(playTimer);
    // },false);

    // 鼠标移出图片区域隐藏左右图标
    // box.addEventListener("mouseleave", function() {
    //     var len = iconsList.length;
    //     for(var i = 0; i < len; i++) {
    //         iconsList[i].style.display = "none";
    //     }

    //     // 重启定时
    //     playTimer = setInterval(runPlay, speed);
    // }, false);

    // 鼠标移入移出方案二
    // 鼠标移入图片区域显示左右图标
    box.addEventListener("mouseenter", function() {
        var len = iconsList.length;
        for(var i = 0; i < len; i++) {
            iconsList[i].style.display = "block";
        }
        
        // 停止定时
        clearInterval(playTimer);
        key = true;

        // 鼠标移出图片区域隐藏左右图标
        this.addEventListener("mouseleave", function() {
        var len = iconsList.length;
        for(var i = 0; i < len; i++) {
            iconsList[i].style.display = "none";
        }

            // 重启定时
            if(key == true) {
                playTimer = setInterval(runPlay, speed);
                key = false;
            }
        }, false);
    },false);
    
    // 点击右图标，切换下一张图片
    rightArrow.addEventListener("click", function() {
        if(m == imgs.length - 1) { // 4
            m = -1;
        }
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].className = "";
            lis[i].style.backgroundColor = "rgba(255, 255, 255, .4)";
        }
        imgs[m + 1].className = "current"; 
        lis[m + 1].style.backgroundColor = "blue"; 
        m ++; 
    }, false);

    // 点击左图标，切换上一张图片
    leftArrow.addEventListener("click", function() {
        if(m == 0) {
            m = imgs.length; // 5
        }
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].className = "";
            lis[i].style.backgroundColor = "rgba(255, 255, 255, .4)";
        }
        imgs[m - 1].className = "current";
        lis[m - 1].style.backgroundColor = "blue";
        m --;
    }, false);

}