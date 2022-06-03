$(document).ready(function () {

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
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem);
    
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
   
});

