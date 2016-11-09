$(document).ready(function () {
    var template = "";
    var data = "";
    var project = "";
    var src = "";
    var alt = "";
    var title = "";

    var duckProj = {
        src : "images/Duck.png",
        alt : "Rubber ducks in a bath tub",
        title : "Duck!",
        youtube : function () {
            $("iframe").remove();
            $('.embed-container').append('<iframe width="1060" height="615" src="https://www.youtube.com/embed/FSd88y_VgDc" frameborder="0" allowfullscreen></iframe>');
            },
        description : "The reddit monthly contest for July was Duck! themed. Thus of course I made ducks falling from the sky",
        date : "24th of July 2016",
        time : "1 week",
        difficulty : "Easy",
        aim : "A bit of fun"
    };

    var owlProj = {
        src : "images/owl.png",
        alt : "Animated owl sitting in an hole in a tree",
        title : "Early Bird",
        youtube : function () {
            $("iframe").remove();
            $('.embed-container').append('<iframe width="1060" height="615" src="https://www.youtube.com/embed/vSq7VAKLsnk" frameborder="0" allowfullscreen></iframe>');
            },
        description : "I made an animation of an owl falling his hole.",
        date : "6th of July 2016",
        time : "2 Months",
        difficulty : "Hard",
        aim : "Cute animation"
    };

    var donutProj = {
        src : "images/donutCup.png",
        alt : "Donut and tea cup",
        title : "Donut and Tea",
        youtube : "",
        description : "I tried to make a photo realistic photo of a cup and donut",
        date : "7th of July 2016",
        time : "2 days",
        difficulty : "Medium",
        aim : "Realism"
    };

    var cokeProj = {
        src : "images/cocacolaBottle.png",
        alt : "Coke bottle falling from the sky",
        title : "Cocacola bottle",
        youtube : "",
        description : "Reddit's theme contest for June was to texture a bottle and I made a coke bottle falling out of the sky",
        date : "23rd June 2016",
        time : "1 day",
        difficulty : "Easy",
        aim : "Realism"
    };

    var pigletProj = {
        src : "images/piglet.png",
        alt : "A still from the animation piglet and the red balloon",
        title : "Piglet and the Red Balloon",
        youtube : function () {
            $("iframe").remove();
            $('.embed-container').append('<iframe width="1060" height="615" src="https://www.youtube.com/embed/qg3AkJTsvlw" frameborder="0" allowfullscreen></iframe>');
            },
        description : "My first animation without a tutorial. Piglet loses his balloon then has to climb a tree to get it.",
        date : "22nd Febuary 2016",
        time : "6 Months",
        difficulty : "Hard",
        aim : "Animation"
    };

    var lowPolyProj = {
        src : "images/low poly owl and tree.png",
        alt : "Low poly owl and tree on floating island",
        title : "Low poly floating island",
        youtube : "",
        description : "A low poly tree and owl",
        date : "‎2 ‎January ‎2016",
        time : "4 hours",
        difficulty : "Easy",
        aim : "Low Poly"

    };

    var mechHeartProj = {
        src : "images/mechanicalHeart.png",
        alt : "Mechanical Heart",
        title : "Mechanical Heart",
        youtube :function () {
             $("iframe").remove();
             $('.embed-container').append('<iframe width="1060" height="615" src="https://www.youtube.com/embed/oGQItBSEZuk" frameborder="0" allowfullscreen></iframe>');
           },
        description : "A science fiction version of what a mechanical heart could look like.",
        date : "28th of June 2015",
        time : "1 week",
        difficulty : "Medium",
        aim : "Sci-fi look"
    };

    var motorbikeProj = {
        src : "images/motorbike.png",
        alt : "motorbike",
        title : "Motorbike",
        youtube : function () {
            $(".gif").remove();
             $('.embed-container').append('<img class="gif" src=images/motorbike_animation.gif alt="motorbike spining around"> </img>');
           },
        description : "Harely Davidson Motorbike",
        date : "4th of Febuary 2015",
        time : "1 week",
        difficulty : "Medium",
        aim : "Realism"
    };

    var gunProj = {
        src : "images/gun.png",
        alt : "gun",
        title : "Cyber punk Gun",
        youtube : "",
        description : "A cyberpunk gun that I made",
        date : "16th of January 2015",
        time : "2 days",
        difficulty : "Easy",
        aim : "Make metal materials"
    };

    var bearProj = {
        src : "images/old bear.png",
        alt : "old bear",
        title : "Old Bear",
        youtube : "",
        description : "An old teddy bear inspired from the childrens book old bear",
        date: "‎23 ‎December ‎2014",
        time : "A few hours",
        difficulty : "Easy",
        aim : "Revisit making a teddy bear to see improvement"
    };

    var perioProj = {
        src : "images/perio.png",
        alt : "perio",
        title : "Perio",
        youtube : function () {
            $("iframe").remove();
            $('.embed-container').append('<iframe width="1060" height="615" class="youtube" src="https://www.youtube.com/embed/z7O0WYZMEjo" frameborder="0" allowfullscreen></iframe>');
        },
        description : "An animation of a bird waking up in the morning based on the tutorial",
        date : "5th of Novemeber 2014",
        time : "5 Months",
        difficulty : "Hard",
        aim : "Make an animation"
    };

    var projects = [duckProj, donutProj, owlProj, cokeProj, pigletProj,
        lowPolyProj, mechHeartProj, motorbikeProj, gunProj, bearProj, perioProj];

    $('.btn').click( function(){
        localStorage.project = $(this).attr("title");
        console.log(localStorage.project);
        document.location.href = "project.html";
    });


    console.log("moved to " + localStorage.project);


    var template = $("#template").html();
    console.log(template);

    for (i = 0; i < projects.length; i++){

        if (projects[i].title == localStorage.project){
            console.log(projects[i]);
            var html = Mustache.render(template, projects[i]);
        }
    }

    $("#wrapper").append(html);


});
