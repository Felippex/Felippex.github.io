// function for slide down article in activities in pure JS
/* const activities = document.querySelectorAll('.in-activities')
console.log(activities);

const articles = document.querySelectorAll('.in-activities article')
console.log(articles);

for (let i = 0; i < 5; i++) {
    const showArticle = function () {
        articles[i].classList.toggle('active')
    }
    activities[i].addEventListener('click', showArticle)
} */

// the same as above but in jQuery
$('.in-activities').each(function () {
    $(this).click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('article', this).slideUp(300);
            $('.fa-caret-down', this).removeClass('rotate')

        } else {
            $(this).addClass('active');
            $('article', this).slideDown(300);
            $('.fa-caret-down', this).addClass('rotate')
        }
    })
})