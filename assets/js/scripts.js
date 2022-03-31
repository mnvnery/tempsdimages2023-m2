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

$(document).ready(function(){
	$('#close-icon').click(function(){
		$(this).toggleClass('open');
        $('.pages-nav').toggleClass('pages-nav-open');
	});
});