$(function () {
    $header = $('#header');
    console.log($header);
    $(window).scroll(function(event){
        var winPos = $(window).scrollTop();
        if(winPos>=70){
            $header.addClass('on')
            $header.addClass('active')

        }else{
            $header.removeClass('on')
            $header.removeClass('active')
        }
    })
})

