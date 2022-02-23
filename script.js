$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up').addClass("show");
        }
        else {
            $('.scroll-up').removeClass("show");
        }
    });
    // scroll-up
    $('.scroll-up').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // typing animation

    var typed = new Typed(".typed", {
        strings: ["Developer", "Artist", "Designer", "Technophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed = new Typed(".typed-2", {
        strings: ["Developer", "Artist", "Designer", "Technophile"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // read more button
    var b = true;
    $('.skills .skills-content .left a').click(function () {
        $('.skills .skills-content .left p span').toggleClass("active");
        if (b) {
            $('.skills .skills-content .left a').text('Read Less');
            b = false;
        }
        else {
            $('.skills .skills-content .left a').text('Read More');
            b = true;
        }

    });



    // profile sliding

    var slide = document.getElementById("slider");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var len = slide.getElementsByClassName("profile").length;
    var count = 1;
    // automatic profile sliding
    var nextSlide = function () {
        if (count < len) {
            slide.style.transform = "translateX(" + -33.33 * count + "%)";
            $("#btn2").removeClass("active");
            $("#btn1").removeClass("active");
            $("#btn3").removeClass("active");
            count++;
            $("#btn" + count).addClass("active");

        }
        else if (count = len) {
            slide.style.transform = "translateX(0px)";
            $("#btn2").removeClass("active");
            $("#btn1").removeClass("active");
            $("#btn3").removeClass("active");
            count = 1;
            $("#btn" + count).addClass("active");

        }
    }

    setInterval(function () {
        nextSlide();
    }, 7000);

    // manual sliding

    btn1.onclick = function () {
        slide.style.transform = "translateX(0px)";
        $("#btn1").addClass("active");
        $("#btn2").removeClass("active");
        $("#btn3").removeClass("active");
    }

    btn2.onclick = function () {
        slide.style.transform = "translateX(-33.33%)";
        $("#btn2").addClass("active");
        $("#btn1").removeClass("active");
        $("#btn3").removeClass("active");
    }
    btn3.onclick = function () {
        slide.style.transform = "translateX(-66.66%)";
        $("#btn3").addClass("active");
        $("#btn2").removeClass("active");
        $("#btn1").removeClass("active");
    }

});