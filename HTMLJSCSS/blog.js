
function addPost()
{
    var name = prompt("Name:");
    var blogpost = prompt("Blog Text:");

    var mainBlog = document.getElementById("blogs");
    mainBlog.innerHTML += '<article><h1>' + name + '</h1><p>'+ blogpost + '</p></article>';
}