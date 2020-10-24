const upDiv = document.querySelector('.header__up-arrow');

window.addEventListener('scroll', function () {
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 200) {
        upDiv.classList.add('header__up-arrow--show')
    } else {
        upDiv.classList.remove('header__up-arrow--show')
    }
})

$('.header__up-arrow').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
})