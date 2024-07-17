
$(".open-nav").click(function () {
    let widthSide = $("#sideMenu").css('width');
    $("#sideMenu").animate({
        width: widthSide == "0px" ? widthSide = '250px' : "0px"
    }, 50);
    let marginSide = $(".open-nav").css('marginLeft');
    $(".open-nav").animate({
        marginLeft: marginSide == "0px" ? marginSide = '250px' : "0px"
    }, 50)
})

$(".close-menu").click(function () {
    $("#sideMenu").animate({
        width: '0'
    }, 50);
    $(".open-nav").animate({
        marginLeft: '0'
    }, 50)
})


$("#sideMenu a").not(".close-menu").click(function () {
    let sectionId = $(this).attr('href');
    let sectionTop = $(sectionId).offset().top;
    scrollSection = sectionTop - 50;
    console.log(scrollSection);
    $("html, body").animate({
        scrollTop: scrollSection < 0 ? scrollSection = 0 : scrollSection
    }, 3000)

})



$("#singerDown .toggle").click(function () {
    $(".inner").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

window.onload = function () {
    countDownToTime("28 August 2024 10:00:00");
}

function countDownToTime(countTo) {

    let nowDate = new Date();
    nowDate = (nowDate.getTime() / 1000);

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    timeDifference = (futureDate - nowDate);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(days < 10 ? `0${days} ` : `${days}`);
    $(".hours").html(hours < 10 ? `0${hours} ` : `${hours}`);
    $(".minutes").html(mins < 10 ? `0${mins} ` : `${mins}`);
    $('.seconds').html(secs < 10 ? `0${secs} ` : `${secs}`)


    setInterval(function () {
        countDownToTime(countTo);
    }, 1000);
}


let maxLength = 100;
$("textarea").attr("maxlength", maxLength);
$("textarea").keyup(function () {
    let length = $(this).val().length;
    let remainingChar = maxLength - length;
    if (remainingChar <= 0) {
        $("#chars").text("your available character finished");
    } else {
        $("#chars").text(remainingChar);
    }
})


$(window).ready(function () {
    $("#loading").fadeOut(3000);
})


$(".options i").click(function () {
    $(".optionSide").animate({ width: "toggle" }, 800);
})

$(".options img").click(function () {
    let clickedImg = $(this).attr('src');
    console.log(clickedImg);
    $("#home").css({
        backgroundImage: `url(${clickedImg})`,
        transition: `all 1s`
    })
    $("#count").css({
        backgroundImage: `linear-gradient(rgba(238, 104, 104, 0.7), rgba(238, 104, 104, 0.7)), url(${clickedImg})`,
        transition: `all 1s`
    })
})