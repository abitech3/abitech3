// create function for erro page

function errorPage() {
    var error = document.getElementById("error");
    error.innerHTML = "Error: Page not found";
    error.style.color = "red";
    error.style.fontSize = "50px";
    error.style.fontWeight = "bold";
    error.style.textAlign = "center";
    error.style.marginTop = "200px";
}