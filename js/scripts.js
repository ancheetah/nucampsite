
$(function () {

    // Carousel Controls
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

    // Reserve and Login Form
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });

});



// // Enable Tooltips
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })