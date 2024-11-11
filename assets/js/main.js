// Элемент для выбора города
const cityElement = document.querySelector('.header__city');
const modalCity = document.createElement('div'); // Создаем модальное окно
modalCity.classList.add('modal-city');
modalCity.innerHTML = `
    <div class="modal-city__content">
        <h2>Выберите город</h2>
        <button class="modal-city__option" data-city="Москва">Москва</button>
        <button class="modal-city__option" data-city="Санкт-Петербург">Санкт-Петербург</button>
        <!-- Добавьте больше городов при необходимости -->
        <button class="modal-city__close">Закрыть</button>
    </div>
`;
document.body.appendChild(modalCity);

// Открытие модального окна по клику на город
cityElement.addEventListener('click', () => {
    modalCity.style.display = 'flex';
});

// Сохранение выбранного города в localStorage
modalCity.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-city__option')) {
        const selectedCity = event.target.dataset.city;
        localStorage.setItem('selectedCity', selectedCity);
        document.querySelector('.header__text').textContent = selectedCity;
        modalCity.style.display = 'none';
    } else if (event.target.classList.contains('modal-city__close')) {
        modalCity.style.display = 'none';
    }
});

// Установка города из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
        document.querySelector('.header__text').textContent = storedCity;
    }
});

const participateButton = document.querySelector('.promo__button');
const modalForm = document.createElement('div');
modalForm.classList.add('modal-form');
modalForm.innerHTML = `
    <div class="modal-form__content">
        <h2>Форма участия</h2>
        <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" required>
        <button class="modal-form__submit">Отправить</button>
        <button class="modal-form__close">Закрыть</button>
    </div>
`;
document.body.appendChild(modalForm);

participateButton.addEventListener('click', () => {
    modalForm.style.display = 'flex';
});

modalForm.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-form__close')) {
        modalForm.style.display = 'none';
    }
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Удалить все нецифровые символы
    event.target.value = "+7 (" + value.slice(0, 3) + ") " + value.slice(3, 6) + "-" + value.slice(6, 8) + "-" + value.slice(8, 10);
});

// Пример проверки валидности
const submitButton = document.querySelector('.modal-form__submit');
submitButton.addEventListener('click', () => {
    if (phoneInput.value.length === 18) { // Длина строки с маской
        alert('Форма отправлена успешно!');
    } else {
        alert('Неверный номер телефона');
    }
});

const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Наверх';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const openTariffButton = document.querySelector('.info__button');
openTariffButton.addEventListener('click', () => {
    window.open('https://rostov.tele2.ru', '_blank');
});
