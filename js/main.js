function toggleStars() {
    if ($(".star").hasClass("glyphicon glyphicon-star-empty star")) {
        console.log("empty");
        $(".star").addClass("glyphicon-star").removeClass("glyphicon-star-empty");
    }
    else {
        console.log("black");
        $(".star").addClass("glyphicon-star-empty").removeClass("glyphicon-star");
    }
}
;
$(document).ready(function () {
    $("#myCarousel").carousel({ interval: 50000 });
    $('.hov').hover(function () {
        $(this).find('.caption').show();
    }, function () {
        $(this).find('.caption').hide();
    });
});
