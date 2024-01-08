// script.js
document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const jiggleableImage = document.getElementById('jiggleableImage');

    let isJiggling = false;

    jiggleableImage.addEventListener('mousedown', function (e) {
        isJiggling = true;
        // Add your custom logic here to identify the jiggling area if needed.
    });

    document.addEventListener('mousemove', function (e) {
        if (isJiggling) {
            const imageBoundingRect = jiggleableImage.getBoundingClientRect();
            const offsetX = e.clientX - imageBoundingRect.left;
            const offsetY = e.clientY - imageBoundingRect.top;

            // Calculate jiggle effect based on mouse movement
            const jiggleX = (offsetX / imageBoundingRect.width - 0.5) * 30;
            const jiggleY = (offsetY / imageBoundingRect.height - 0.5) * 30;

            jiggleableImage.style.transform = `translate(${jiggleX}px, ${jiggleY}px)`;
        }
    });

    document.addEventListener('mouseup', function () {
        if (isJiggling) {
            // Add any additional logic or animations when the mouse is released.
            jiggleableImage.style.transform = 'translate(0, 0)';
        }
        isJiggling = false;
    });
});
