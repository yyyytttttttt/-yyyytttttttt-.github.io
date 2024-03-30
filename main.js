

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


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("yandex-map", {
        center: [55.819204, 37.964244], // Центр карты
        zoom: 10
    });

    // Список координат для меток
    var coords = [
        [55.819204, 37.964244], // Красная площадь
        [55.827399, 37.955604] // Кремль
    ];

    // Добавляем метки на карту
    coords.forEach(function(location) {
        var myPlacemark = new ymaps.Placemark(location, {
            hintContent: 'Улыбка Стоматологическая клиника', // Здесь можно указать содержание подсказки
            balloonContent: 'Улыбка Стоматологическая клиника ' + location.join(', ') // Содержание балуна
        });

        myMap.geoObjects.add(myPlacemark);
    });

    // Опционально: Масштабировать карту так, чтобы были видны все метки
    myMap.setBounds(myMap.geoObjects.getBounds(), {
        checkZoomRange: true
    });
}
