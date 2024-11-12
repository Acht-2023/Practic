
// Получаем элементы
const cityElement = document.querySelector('.header__text');
const modal = document.getElementById('cityModal');
const closeModal = document.querySelector('.modal__close');
const cityItems = document.querySelectorAll('.modal__city-item');

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModalWindow() {
    modal.style.display = 'none';
}

// Устанавливаем город из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
        cityElement.textContent = savedCity;
    }
});

// Обработчик клика на элемент города
cityElement.addEventListener('click', openModal);

// Обработчик клика на крестик закрытия модального окна
closeModal.addEventListener('click', closeModalWindow);

// Выбор города и сохранение в localStorage
cityItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const selectedCity = event.target.getAttribute('data-city');
        cityElement.textContent = selectedCity;
        localStorage.setItem('selectedCity', selectedCity);
        closeModalWindow();
    });
});

// Закрытие модального окна при клике за его пределами
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalWindow();
    }
});

$(document).ready(function() {
    // Открытие модального окна при клике на кнопку "Принять участие"
    $('.promo__button').on('click', function() {
        $('#promoModal').css('display', 'flex');
    });

    // Закрытие модального окна при клике на крестик
    $('.modal__close').on('click', function() {
        $('#promoModal').hide();
    });

    // Маска для номера телефона
    $('#phone').mask('+7 (999) 999-99-99');

    // Валидация и отправка формы
    $('#promoForm').on('submit', function(event) {
        event.preventDefault();
        const phone = $('#phone').val();
        const agreement = $('#agreement').is(':checked');
        const message = $('.form-message');

        if (phone && agreement) {
            message.css('color', 'green');
            message.text('Форма успешно отправлена!');
            // Закрытие модального окна через секунду
            setTimeout(() => $('#promoModal').hide(), 1000);
        } else {
            message.css('color', 'red');
            message.text('Пожалуйста, заполните все поля.');
        }
    });

    // Закрытие модального окна при клике вне его области
    $(window).on('click', function(event) {
        if ($(event.target).is('#promoModal')) {
            $('#promoModal').hide();
        }
    });
});