const input = document.querySelector('.header__search');
const searchIcon = document.querySelector('.header__search-icon');
const galeryBox = document.querySelector('.galery__box');
const galeryTitle = document.querySelector('.galery__title');


function hideSearchIcon () {
    if (input.value.length > 0) {
        searchIcon.style.display = 'none'
    } else {
        searchIcon.style.display = 'block'
    }
}
input.addEventListener('input', hideSearchIcon);

input.addEventListener('keyup', function (e){
        let value 
        if (e.key == "Enter") {
            value = input.value;
            changeTitle (value)
            let url = `https://api.unsplash.com/search/photos?query=${value}&per_page=10&orientation=landscape&client_id=6_BZGMaV4rT1lU3AE4FnjDertaoVtCNgwywSOoy8I6g`
            getData(url)
        }
}) 

function changeTitle (value) {
    galeryTitle.textContent = value
}

async function getData(url) {
        const res = await fetch(url);
        const data = await res.json();
        createElement (data)
        console.log(data)
        console.log(data.results.length)
}

function createElement (data){
    try {
        deleteElement();
        for (let i = 0; i < 10; i++) {
            const img = document.createElement('img')
            img.classList.add ('galery__img');
            img.src = `${data.results[i].urls.regular}`;
            img.alt = 'image';
            galeryBox.append(img);
            if (i == 4) {
                img.classList.add ('first');
            }
            if (i == 9) {
                img.classList.add ('last');
            }
        }
    } catch {
        if (data.results.length == 0) {
            value = 'Oops.. Try using another word'
            changeTitle (value)
        }
        else if (data.results.length <= 11) {
            changeTitle (input.value)
        } 
        
    }
}


function deleteElement() {
    const imageAll = document.querySelectorAll('.galery__img')
    imageAll.forEach(item => item.remove())
    
}



console.log (`
1.Вёрстка +10
    -на странице есть несколько фото и строка поиска +5
    -в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2.При загрузке приложения на странице отображаются полученные от API изображения +10
3.Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10
4.Поиск +30
    -при открытии приложения курсор находится в поле ввода +5
    -есть placeholder +5
    -автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5
    -поисковый запрос можно отправить нажатием клавиши Enter +5
    -после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5
    -в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5
5.Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
    - ДОПОЛНИТЕЛЬНЫЙ ФУНКЦИОНАЛ: Отлавливает ошибки(т.е. если некорректный ввод, то выводит "Oops.. Try using another word") +10
<<<<<<< HEAD
Оценка: 60/60
=======
>>>>>>> add7413d00a46ab2154726c49c224572c690a809
`)

