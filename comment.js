function loadComment() {
    var comments = document.getElementById("comments");
    var text_comment = document.getElementById("comment").value;
    var comment = document.createElement("p");
    comment.innerHTML = text_comment;
    comments.appendChild(comment);
}
