// Скролл - Наш каталог
const ourCatalog = document.querySelector('[data-ourCatalog]');

ourCatalog.addEventListener('click', function(event) {
    event.preventDefault();

    const id = ourCatalog.getAttribute('href');
    
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
})

// Скролл - забронировать
const bookings = document.querySelectorAll('[data-booking]');

for (let booking of bookings) {
    booking.addEventListener('click', function(event) {
        event.preventDefault();

        const id = booking.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

// Валидация email-input
const inputEmail = document.querySelector('input[type="email"]');

inputEmail.addEventListener('input', function() {
    const patternForEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if (patternForEmail.test(inputEmail.value)) {
        inputEmail.style.borderBottom = '.3rem solid #66D763';
    } else {
        inputEmail.style.borderBottom = '.3rem solid #D76363';
    }
})