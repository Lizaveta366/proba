document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 0;

    let opacity = 0;
    const fadeIn = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        document.body.style.opacity = opacity;
        opacity += 0.05;
    }, 50);
});