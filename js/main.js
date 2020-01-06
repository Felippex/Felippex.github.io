const activities = document.querySelectorAll('.in-activities')
console.log(activities);

const articles = document.querySelectorAll('.in-activities article')
console.log(articles);

for (let i = 0; i < 5; i++) {
    const showArticle = function () {
        articles[i].classList.toggle('active')
    }
    activities[i].addEventListener('click', showArticle)
}