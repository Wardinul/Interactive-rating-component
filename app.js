const mainCard = document.querySelector('.submit-content')
const thankCard = document.querySelector('.thank-content')
const ratingButtons = document.querySelectorAll('.rating-item')

const submitButton = document.getElementById('submit')
const rateNumber = document.getElementById('rating')

submitButton.addEventListener('click', () => {
    thankCard.classList.remove('hidden')
    mainCard.classList.add('hidden')
})

ratingButtons.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateNumber.innerHTML = rate.innerHTML
    })
})