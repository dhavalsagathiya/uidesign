$(document).ready(function() {
    $('.card-header button').click(function() {
        $('.card').addClass('otherClasses');
        $('.btn').addClass('other');
        $(this).closest('.otherClasses').removeClass("otherClasses");
        $(this).closest('.other').removeClass("other");
        $('.otherClasses').removeClass('bg')
        $('.other').removeClass('arrowDown')
        $(this).closest('.card').toggleClass("bg");
        $(this).closest('.btn').toggleClass("arrowDown");
    });  

});

