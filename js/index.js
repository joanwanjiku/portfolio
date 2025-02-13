
        // Scroll to top when the up button is clicked
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("up").addEventListener("click", function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    