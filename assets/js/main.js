//Sticky Header
$(window).on("scroll load", function() {
  $(window).scrollTop() > $(".siteHeader").outerHeight()
    ? $(".siteHeader").addClass("sticky")
    : $(".siteHeader").removeClass("sticky");
});
