// Carousel Controls
$(function () {
    $(".carousel").carousel({
        interval: 2000,
        pause: "false"
    });
    $("#carouselPause").click(function () {
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function () {
        $(".carousel").carousel("cycle");
    });
});

// Enable Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})