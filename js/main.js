function toggleStars(){
    if ($(".star").hasClass("glyphicon glyphicon-star-empty star")){ 
        console.log("empty")
        $(".star").addClass("glyphicon-star").removeClass("glyphicon-star-empty");
    } else {
        console.log("black")
        $(".star").addClass("glyphicon-star-empty").removeClass("glyphicon-star");
    }
};

$(document).ready(function(){
    $("#myCarousel").carousel({interval: 50000});
    $("#hidden").hide();


    $("#imageHid").on("mouseenter", function(){
        $("#hidden").fadeIn();
        console.log("entered mouse on image");
    });

    $("#imageHid").on("mouseleave", function(){
        $("#hidden").fadeOut();
        console.log("exit mouse on image");
    });

});