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
        youtube : "https://www.youtube.com/embed/FSd88y_VgDc",
        description : "The reddit monthly contest for July was Duck! themed. Thus of course I made ducks falling from the sky",
    };

    var owlProj = {
        src : "images/owl.png",
        alt : "Animated owl sitting in an hole in a tree",
        title : "Early Bird",
        youtube : "https://www.youtube.com/embed/vSq7VAKLsnk",
        description : "I made an animation of an owl falling his hole.",
    };

    var donutProj = {
        src : "images/donutCup.png",
        alt : "Donut and tea cup",
        title : "Donut and Tea",
        youtube : "#",
        description : "I tried to make a photo realistic photo of a cup and donut",
    };

    var cokeProj = {
        src : "images/cocacolaBottle.png",
        alt : "Coke bottle falling from the sky",
        title : "Cocacola bottle",
        youtube : "#",
        description : "Reddit's theme contest for June was to texture a bottle and I made a coke bottle falling out of the sky",
    };

    var pigletProj = {
        src : "images/piglet.png",
        alt : "A still from the animation piglet and the red balloon",
        title : "Piglet and the Red Balloon",
        youtube : "https://www.youtube.com/embed/qg3AkJTsvlw",
        description : "My first animation without a tutorial. Piglet loses his balloon then has to climb a tree to get it.",
    };

    var lowPolyProj = {
        src : "images/low poly owl and tree.png",
        alt : "Low poly owl and tree on floating island",
        title : "Low poly floating island",
        youtube : "#",
        description : "A low poly tree and owl",
    };

    var mechHeartProj = {
        src : "images/mechanicalHeart.png",
        alt : "Mechanical Heart",
        title : "Mechanical Heart",
        youtube : "https://www.youtube.com/embed/oGQItBSEZuk",
        description : "A science fiction version of what a mechanical heart could look like.",
    };

    var motorbikeProj = {
        src : "images/motorbike.png",
        alt : "motorbike",
        title : "Motorbike",
        youtube : "#",
        description : "Harely Davidson Motorbike",
    };

    var gunProj = {
        src : "images/gun.png",
        alt : "gun",
        title : "Cyber punk Gun",
        youtube : "#",
        description : "A cyberpunk gun that I made",
    };

    var bearProj = {
        src : "images/old bear.png",
        alt : "old bear",
        title : "Old Bear",
        youtube : "#",
        description : "An old teddy bear inspired from the childrens book old bear",
    };

    var perioProj = {
        src : "images/perio.png",
        alt : "perio",
        title : "Perio",
        youtube : "https://www.youtube.com/embed/z7O0WYZMEjo",
        description : "An animation of a bird waking up in the morning based on the tutorial",
    };

    var projects = [duckProj, donutProj, owlProj, cokeProj, pigletProj,
        lowPolyProj, mechHeartProj, motorbikeProj, gunProj, bearProj, perioProj];

    $('.btn').click( function(){
        localStorage.project = $(this).attr("title");
        console.log(localStorage.project);
        document.location.href = "project.html";
    });



    // var data = {
    //     imageSrc: localStorage.src,
    //     altImage:  localStorage.alt,
    //     youtube: "#",
    //     description: "to do laters"
    // }

    console.log("moved to " + localStorage.project);


    var template = $("#template").html();
    console.log(template);


    for (i = 0; i < projects.length; i++){

        if (projects[i].title == localStorage.project){
            console.log(projects[i]);
            var html = Mustache.render(template, projects[i]);
        }
    }

    $("body").append(html);


});
