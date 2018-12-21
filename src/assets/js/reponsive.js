function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".view").removeClass("view view-portfolio").addClass("gallery-mobile");
    }
}

$(window).load(mobileViewUpdate);
$(window).resize(mobileViewUpdate);