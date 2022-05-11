$(function(){
    var c1 =$('div.cntWrap>div.content.cnt01>div.section>div.artView>div.artGroup');
    var c1Btn =$('div.cntWrap>div.content.cnt01>div.section>div.btn');
    var c1p =$('div.cntWrap>div.content.cnt01>div.section>div.bar>div.per');
    var c2 =$('div.cntWrap>div.content.cnt02>div.section>div.artView>div.artGroup');
    var c2Btn =$('div.cntWrap>div.content.cnt02>div.section>div.btn');
    var c2p =$('div.cntWrap>div.content.cnt02>div.section>div.bar>div.per');
    var c3 =$('div.cntWrap>div.content.cnt03>div.section>div.artView>div.artGroup');
    var c3Btn =$('div.cntWrap>div.content.cnt03>div.section>div.btn');
    var c3p =$('div.cntWrap>div.content.cnt03>div.section>div.bar>div.per');
   

    var wd = $(window).width();
    var i =0;
    var mv = 0;
    var t = 0;


    if(wd > 1024){
        mv =-30;
        t = -60;
    }else if(wd >= 420 && wd <= 1024 ){
         mv =-30;
         t = -60;
    }else{
        mv =-42;
        t = -84;
    }



    c1.find('.article:last').prependTo(c1);
    c1.css({marginLeft : mv+'%'});
    c1Btn.click(function(){
        c1.stop().animate({
            marginLeft : t+'%'
        },1000,function(){
            c1.find('.article:first').appendTo(c1);
            c1.css({marginLeft : mv+'%'});
        });

        var num = c1.find('.article').eq(1).attr('data-num');
        c1p.css({width : num*16.66+'%'});


    });

    c2.find('.article:last').prependTo(c2);
    c2.css({marginRight : mv+'%'});
    c2Btn.click(function(){
        c2.stop().animate({
            marginRight : t+'%'
        },1000,function(){
            c2.find('.article:first').appendTo(c2);
            c2.css({marginRight : mv+'%'});
        });
        
        var num = c2.find('.article').next().attr('data-num');
        c2p.css({width : num*16.66+'%'});

    });


    c3.find('.article:last').prependTo(c3);
    c3.css({marginLeft : mv+'%'});
    c3Btn.click(function(){
        c3.stop().animate({
            marginLeft : t+'%'
        },1000,function(){
            c3.find('.article:first').appendTo(c3);
            c3.css({marginLeft : mv+'%'});
        });

        var num = c3.find('.article').eq(1).attr('data-num');
        c3p.css({width : num*16.66+'%'});

    });
});