let containBox;

function setup() {
    noCanvas();
    containBox = document.getElementById("containBox");

    document.querySelectorAll("#svg ellipse").forEach(circle => {
        circle.addEventListener("mouseover", () => {
            circle.style.fill = circle.getAttribute("color");
        });
    });
}

function draw() {
    if (windowWidth < 550) {
        containBox.className = "my-container small";
    } else {
        containBox.className = "my-container";
    }
}