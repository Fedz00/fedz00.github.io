document.addEventListener('DOMContentLoaded', function () {
    const backText = document.getElementById('backText');

    document.addEventListener('mousemove', function (event) {
        // Check if the mouse is on the left side of the page
        if (event.clientX < window.innerWidth / 2) {
            backText.style.opacity = 1;
            backText.style.top = `${event.clientY}px`;
        } else {
            backText.style.opacity = 0;
        }
    });

    // Capture click events on the entire document
    document.addEventListener('click', function (event) {
        // Check if the click is on the left side of the page
        if (event.clientX < window.innerWidth / 2) {
            history.back();
        }
    });
});
