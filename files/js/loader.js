document.addEventListener("DOMContentLoaded", function () {
    // Check if the loader has been shown before
    var loaderShown = localStorage.getItem("loaderShown");

    if (!loaderShown) {
        // Show loader initially
        document.getElementById("loader").style.display = "flex";

        // Hide loader and show content after 2 seconds
        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
            // Optionally, you can add a class to body to enable scrolling again
            document.body.style.overflow = "auto";

            // Set a flag in localStorage indicating that the loader has been shown
            localStorage.setItem("loaderShown", "true");
        }, 2000);
    } else {
        // If the loader has been shown before, directly show the content
        document.getElementById("content").style.display = "block";
        // Optionally, you can add a class to body to enable scrolling again
        document.body.style.overflow = "auto";
    }
});
