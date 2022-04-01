$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $(".navbar-container").addClass("nav-shadow");
    } else {
        $(".navbar-container").removeClass("nav-shadow");
    }
});

$('.momento-2-toggle').click(function() {  
    $('.depois-container').toggle();
});

// $(document).ready(function(){
// 	$('#close-icon').click(function(){
// 		$(this).toggleClass('open');
//         $('.pages-nav').toggleClass('pages-nav-open');
// 	});
// });

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".pages-nav").hasClass("pages-nav-open");
        if (_opened === true && !clickover.hasClass("pages-nav-open")) {
            $("#close-icon").click();
        }
    });
});

$(document).on('click',function(e){
    if(!(($(e.target).closest(".pages-nav").length > 0 ) || ($(e.target).closest("#close-icon").length > 0))){
        $(".pages-nav").removeClass('open');
        $('.nav-title').removeClass('underline');
    }
});