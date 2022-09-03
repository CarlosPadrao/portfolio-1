$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
})

//
function darkMode() {
    $('body').toggleClass('dark-mode');
}

function darkModeControl() {
    const btn = document.querySelector('.btn-dark-mode');
    darkMode();
}
//
function scrolling() {
    document.onscroll = function() {
        scrollY;
        if (scrollY >= 100) {
            document.querySelector('header').style.padding = "20px 0px"
            document.querySelector('header').style.borderBottom = "1px solid #866cc4"
        } else {
            document.querySelector('header').style.padding = "0px 0px"
            document.querySelector('header').style.borderBottom = "none"
        }
    }
    
}
scrolling();
//
// jQuery(function () {
//     $('.btn-dark-mode').on('click', function () {
//         darkMode();
//     })
// })