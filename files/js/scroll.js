// script.js
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add("show");
            scrollToTopBtn.classList.remove("hide");
        } else {
            scrollToTopBtn.classList.remove("show");
            scrollToTopBtn.classList.add("hide");
        }
    }

    function scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - (currentScroll / 20));
        }
    }

    window.addEventListener("scroll", scrollFunction);
    scrollToTopBtn.addEventListener("click", scrollToTop);
});


// script.js
document.addEventListener("DOMContentLoaded", function () {
    var refreshBtn = document.getElementById("refreshBtn");

    refreshBtn.addEventListener("click", function () {
        location.reload(); // Reloads the page
    });
});
