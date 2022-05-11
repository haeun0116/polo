$(function(){
    var c1aG =$('.cnt01>.section>.artView>.artGroup');
    var c1Btn =$('.cnt01>.section>.btn');
    var c1p =$('.cnt01>div.section>div.bar>div.per');
    var c2aG =$('.cnt02>.section>.artView>.artGroup');
    var c2Btn =$('.cnt02>.section>.artView>.btn>i');
    var c2p =$('.cnt02>div.section>div.bar>div.per');
    var i=0;
    


    var wd = $(window).width();
    var mv = 0;
    var t = 0;
    var j =0;

    if(wd > 1024){
        // pc버전
        mv =-30;
        t=-100;
        j =-60;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
         mv =-31;
         t=0;
         j=-60;
    }else{
        // 모바일버전
        mv =-50;
        j=-100;
    }


    c1aG.find('.article:last').prependTo(c1aG);
    c1aG.css({marginLeft : mv+'%'});

    c1Btn.find('i:last').click(function(){
        c1aG.stop().animate({
            marginLeft : j+'%'
        },1000,function(){
            c1aG.find('.article:first').appendTo(c1aG);
            c1aG.css({marginLeft : mv+'%'});
        });

        var num = c1aG.find('.article').eq(1).attr('data-num');
        c1p.css({width : num*16.66+'%'});
    });

    c1Btn.find('i:first').click(function(){
        c1aG.stop().animate({
            marginLeft : '0%'
        },1000,function(){
            c1aG.find('.article:last').prependTo(c1aG);
            c1aG.css({marginLeft : mv+'%'});
        });
    });



    c2aG.find('.article:last').prependTo(c2aG);
    c2aG.css({marginLeft : t+'%'});

    c2Btn.click(function(){
        c2aG.stop().animate({
            marginLeft : '-200%'
        },1000,function(){
            c2aG.find('.article:first').appendTo(c2aG);
            c2aG.css({marginLeft : t+'%'});
        });

        var num = c2aG.find('.article').eq(1).attr('data-num');
        c2p.css({width : num*33.33+'%'});
    });


});