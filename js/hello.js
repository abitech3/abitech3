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

// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "3px solid red";
        }
    }
}

// display time in html



// Return the current time
function getTime() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return time;
}

