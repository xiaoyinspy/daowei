$(function () {
    $header = $('#header');
    $(window).scroll(function(event){
        var winPos = $(window).scrollTop();
        if(winPos>=70){
            $header.addClass('on')
        }else{
            $header.removeClass('on')
        } })
    }
)

