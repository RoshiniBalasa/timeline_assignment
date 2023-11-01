$(document).ready(function() {
    $(".timeline-event").each(function(index) {
        $(this).delay(200 * index).animate({
            opacity: 1,
            left: 0
        }, 800);
    });
    $(".timeline-event").click(function() {
        $(this).find(".event-description").slideToggle();
    });
});
