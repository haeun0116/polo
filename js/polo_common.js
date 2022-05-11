$(function(){
    $('.hdr').load('./inc/polo_header.html',function(){
        var hb =$('div.hdrWrap>div.header>div.hdrRight>div.icons>i');
        var arco =$('div.navboxWrap>div.navBox>ul.arco>li');
        var nbx =$('div.navboxWrap>div.navBox>div.btn');

        hb.eq(2).click(function(){
            $('.navboxWrap').css({width : '100vw',height : '100vh'});
        });
    
        arco.even().mouseover(function(){
            arco.removeClass('on').find('span').text('+');
            $(this).addClass('on').find('span').text('-');
        });
    
        nbx.click(function(){
            $('.navboxWrap').css({width : '0',height : '0'});
        });
    });

    $('.footer').load('./inc/polo_footer.html');
});