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

$('.show').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('article').slideUp(300);
        $('.fa-caret-down', this).removeClass('rotate')

    } else {
        $(this).addClass('active');
        $(this).siblings('article').slideDown(300);
        $('.fa-caret-down', this).addClass('rotate')
    }
})


/* $('.in-activities').each(function () {
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
}) */

const upDiv = document.querySelector('.upDiv');

window.addEventListener('scroll', function () {
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 150) {
        upDiv.classList.add('show')
    } else {
        upDiv.classList.remove('show')
    }
})

$('.upDiv').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
})



// let upDiv = document.createElement('div');
// let upIcon = document.createElement('i')
// upIcon.setAttribute('class', 'fa fas-arrow-up')

// upDiv.appendChild(upIcon);
// upDiv.style.width = '40px'
// upDiv.style.height = '40px'
// upDiv.style.position = 'fixed';
// upDiv.style.right = '5%';
// upDiv.style.bottom = '2%';
// upDiv.style.borderRadius = '50%';
// upDiv.style.backgroundColor = 'red';
// upIcon.style.color = 'white';
// upIcon.style.fontSize = '15px';
// header.appendChild(upDiv);
// console.log(upDiv);