$('.event-container').click(function() {
    $(this).toggleClass("d-block");
    $(this).find('.event-img').toggleClass("event-full");
    $(this).find(".closed-event").toggle();
    $(this).find(".open-event").toggle();
    $(this).find(".img-credits").toggle();
});
$('.event-container').hover(function() {
    let days = $(this).data('days');
    let newdays = days.slice(0, -1)
    const daysArr = newdays.split(',');
    $.each( daysArr, function(i, val) {
        $("#" + val).toggleClass("day-active");
    });
});