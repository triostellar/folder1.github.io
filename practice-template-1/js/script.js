$(document).ready(function () {
    $('.section-style').on('click', function () {
        $('.section-style').removeClass('active');
        $(this).addClass('active');
        $(this).children().children('.d').addClass('dis');
        
    });
    // var a = true;
    // console.log(a);
    // $("#id-aboutus-sec").click(function () {
    //     $("#id-h-h4").animate({
    //         opacity: '0',
    //         height: '0px',
    //         padding: '0px',
    //         top: '0%',
    //         margin: '0px'
    //     }, {
    //         duration: 700,
    //     });

    //     $("#id-h-p").animate({
    //         opacity: '0',
    //         height: '0px',
    //         paddingtop: '0px!important',
    //         top: '0%',
    //         margin: '0px'
    //     }, {
    //         duration: 700,
    //     });

    //     $("#id-aboutus-sec").animate({
    //         height: '700px',
    //         marginTop: '-30px'
    //     }, "1500");

    // });
    
    // window.scrollTo(0, 0);
});

$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
})

$(document).on("click", 'ul li', function () {
    $('ul li').removeClass('active');
    $(this).addClass('active');
});