

const menuToggle = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    if(menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide() {
        const offset = -index * 100;
        document.querySelector('.slides-container').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    });

    document.querySelector('.next').addEventListener('click', function() {
        index = (index + 1) % totalSlides;
        showSlide();
    });

    showSlide(); // Показ первого слайда при загрузке
});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.819204, 37.964244], // Координаты центра карты
        zoom: 15 // Уровень масштаба
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создание меток
    myPlacemark1 = new ymaps.Placemark([55.819204, 37.964244], {
        // Описание метки
        hintContent: 'Улыбка Стоматологическая клиника ',
        balloonContent: 'ЛУЧШАЯ'
    }),

    myPlacemark2 = new ymaps.Placemark([55.827399, 37.955604], {
        // Описание метки
        hintContent: 'Улыбка Стоматологическая клиника',
        balloonContent: 'ЛУЧШАЯ'
    });

    // Добавление меток на карту
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
});