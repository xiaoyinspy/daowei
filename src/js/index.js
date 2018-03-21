$(function () {
    const $lis  = $('.menu_daowei>.menu_second>.menu_list')
    console.log($lis);
   $lis.on('mouseover',function () {
       $(this).children('ul').addClass('on')
       $(this).children('.menu_title').children('.sanjiao').addClass('on')
       $(this).children('.menu_title').children('.iconfont').addClass('on')
   }).on('mouseleave',function () {
       $(this).children('ul').removeClass('on')
       $(this).children('.menu_title').children('.sanjiao').removeClass('on')
       $(this).children('.menu_title').children('.iconfont').removeClass('on')
   })
    $header = $('#app>header');
    $(window).scroll(function(event){
        var winPos = $(window).scrollTop();
        if(winPos>=70){
            $header.addClass('on')
        }else{
            $header.removeClass('on')
        }

    });

})