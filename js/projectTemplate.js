$(document).ready(function () {
    var template = "";
    var data = "";
    var project = "";
    var src = "";
    var alt = "";

    $('.btn').click( function(){
        localStorage.project = $(this).attr("title");
        localStorage.src = $(this).attr("src");
        localStorage.alt = $(this).attr("alt");
        console.log(src);    
        document.location.href = "project.html";
    });
    var data = {
        imageSrc: localStorage.src,
        altImage:  localStorage.alt,
        youtube: "#",
        description: "to do laters"
    }
    
    console.log("moved to " + localStorage.project);


    var template = $("#template").html();
    console.log(template);
    var html = Mustache.render(template, data);
    $("body").append(html);


});

