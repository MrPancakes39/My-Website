let containBox;

function setup() {
    noCanvas();
    containBox = document.getElementById("containBox")
}

function draw() {
    if (windowWidth < 550) {
        containBox.className = "my-container small";
    } else {
        containBox.className = "my-container";
    }
}