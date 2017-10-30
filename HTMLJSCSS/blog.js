
function addPost()
{
    var name = window.document.getElementById("author").value;
    var blogpost = window.document.getElementById("post").value;

    var mainBlog = document.getElementById("blogs");
    mainBlog.innerHTML += '<article><h1>' + name + '</h1><p>'+ blogpost + '</p></article>';
    window.document.getElementById("author").value = "";
    window.document.getElementById("post").value = ""    
}