$(document).ready(function () {
    $(".tab-content").hide();

    $(".tabs li:first").addClass("active");
    $(".tab-content:first").show();

    $(".tabs li").on("click", function (e) {
        e.preventDefault();

        $(".tabs li").removeClass("active");

        $(this).addClass("active");

        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");

        $(activeTab).fadeIn(200);
    });
});