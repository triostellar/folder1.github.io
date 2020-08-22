$(document).ready(function () {
   
    $("#id-aboutus-sec").click(function () {
        $("#id-h-h4").animate({

            opacity: '0',
            height: '0px',
            padding: '0px',
            top: '0%',
            margin: '0px'
        }, {
            duration: 700,
        });

        $("#id-h-p").animate({

            opacity: '0',
            height: '0px',
            paddingtop: '0px!important',
            top: '0%',
            margin: '0px'
        }, {
            duration: 700,
        });

        $("#id-aboutus-sec").animate({
            height: '700px',
            marginTop: '-30px'
        }, "1500");

    });
    
    window.scrollTo(0, 0);
});