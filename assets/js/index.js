$(document).ready(function () {  
$(".switch_span2").click(function() {
    $('.switch_bg').toggleClass("switch_tgl");
    $('.switch_tgl').removeClass('switch_bg');
}); 
$(".switch_span1").click(function() {
    $('.switch_tgl').toggleClass("switch_bg");
    $('.switch_bg').removeClass('switch_tgl');
});
// $("#pricing2").click(function() {
//     $('.switch_bg').toggleClass("switch_tgl");
//     $('.switch_tgl').removeClass('switch_bg');
// }); 
// $("#pricing1").click(function() {
//     $('.switch_tgl').toggleClass("switch_bg");
//     $('.switch_bg').removeClass('switch_tgl');
// });
$('.card-header button').click(function () {
        $('.card').addClass('otherClasses');
        $('.btn').addClass('other');
        $(this).closest('.otherClasses').removeClass("otherClasses");
        $(this).closest('.other').removeClass("other");
        $('.otherClasses').removeClass('bg')
        $('.other').removeClass('arrowDown')
        $(this).closest('.card').toggleClass("bg");
        $(this).closest('.btn').toggleClass("arrowDown");
    });
    $('.navbar-toggler').click(function () {
        /* $('.hero_title').addClass('d-none');
        $('.hero_title').removeClass('d-flex') */
        $('.hero_title').toggleClass('d-flex')
        $('.hero_title').toggleClass("invisible");
        $('.free').toggleClass("d-none");
    });
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
   
});

