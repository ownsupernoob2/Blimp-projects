// This is blank because html doesnt like me ;( also im  afk  -Mina

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "#1c8dd4";
        document.getElementById("navbar").style.borderBottomWidth = "3px";
        document.getElementById("navbar").style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.15)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.borderBottomWidth = "0px";
        document.getElementById("navbar").style.boxShadow = "none";
    }
};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            console.log('oh no its gone!')
        }
    }
};

window.addEventListener("scroll", reveal);