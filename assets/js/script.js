// Ensure correct casing and method usage
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(); // Use lowercase 'window'
    if (scrollTop >= 10) {
        $('body').addClass('fixed-header'); // Use 'addClass' instead of 'addclass'
    } else {
        $('body').removeClass('fixed-header'); // Use 'removeClass' instead of 'removeclass'
    }
});


// ==================== AOS Animation Init ====================
AOS.init();

// ==================== Typed JS ====================
var typed = new Typed("#type-it", {
    strings: ["Frontend Developer", "Web Developer", "React Developer", "UI Designer"],
    typeSpeed: 160,
    backSpeed: 160,
    loop: true
});

// ==================== Copy Email Button ====================
document.getElementById("copyButton").addEventListener("click", function () {
    var email = "amitkavathekar123@gmail.com";
    var button = document.getElementById("copyButton");

    navigator.clipboard.writeText(email).then(function () {
        var originalText = button.innerText;
        button.innerText = "Copied!";

        setTimeout(function () {
            button.innerText = originalText;
        }, 2000);
    }).catch(function (error) {
        console.error("Error copying text: ", error);
    });
});
// Close navbar when any nav link is clicked (mobile only)
$(".nav-link").on("click", function () {
    if ($(".navbar-toggler").is(":visible")) {
        $(".navbar-collapse").collapse("hide");
    }
});
