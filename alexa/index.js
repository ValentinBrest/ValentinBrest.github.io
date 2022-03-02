const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'post': 'E-mail',
      'phone': 'Phone',
      'message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'post': 'Ваша почта',
      'phone': 'Ваш номер телефона',
      'message': 'Ваше сообщение'
    }
  }
  


console.log (
    `
    1.Смена изображений в секции portfolio +25
    2.При кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20
    3.Кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5
    4.Перевод страницы на два языка +25
    5.При клике по надписи ru англоязычная страница переводится на русский язык +10
    6.При клике по надписи en русскоязычная страница переводится на английский язык +10
    7.Надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5
    8.Переключение светлой и тёмной темы +25
    9.На страницу добавлен переключатель при клике по которому:
        тёмная тема приложения сменяется светлой +10
        светлая тема приложения сменяется тёмной +10
    10.После смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5
    11.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5
    12.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
    13.Для получения максимального балла за пункт требований достаточно добавить кнопкам только один эффект
        Box-shadow Button Демо
    `
)
const button = document.querySelector('.header__burger')
const menu = document.querySelector('.nav')
const boxSpan =document.querySelector('.header__burger-box')
const overlay =document.querySelector('.overlay');
const body = document.querySelector('body');

const portfolioBtn = document.querySelector('.portfolio__buttons');
const portfolioBtnAll = document.querySelectorAll('.button-portfolio');
const portfolioPhotosAll = document.querySelectorAll('.portfolio__photos-item');

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const lang = document.querySelector('.header__lang')
const langSpan = document.querySelectorAll('.header__lang > span')
const changer = document.querySelector('.header__moonsun');



//menu    
    button.addEventListener('click', function(event) {
        if (this.classList.contains('header__burger-active')) {
            this.classList.remove('header__burger-active')
            boxSpan.classList.remove('header__burger-box-active')
            menu.classList.remove('nav-active') 
            overlay.classList.remove('overlay-active') 
            body.classList.remove('lock') 

        } else {
            this.classList.add('header__burger-active')
            boxSpan.classList.add('header__burger-box-active')
            menu.classList.add('nav-active')
            overlay.classList.add('overlay-active') 
            body.classList.add('lock') 
        }
        
    })
    menu.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link')) {
            this.classList.remove('nav-active')
            boxSpan.classList.remove('header__burger-box-active')
            button.classList.remove('header__burger-active')
            overlay.classList.remove('overlay-active') 
            body.classList.remove('lock')
        }  
    })
//change Image
    portfolioBtn.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('button-portfolio')) {
            portfolioBtnAll.forEach(item => item.classList.remove('button-gold'))
            target.classList.add('button-gold')

            portfolioPhotosAll.forEach((img, index) => {
                img.src = `assets/img/${target.dataset.season}/${index + 1}.jpg`
            })
        }
            
    })

//cash
    function preloadImages(item) {
        for(let i = 1; i <= 6; i++) {
          const img = new Image();
          img.src = `./assets/img/${item}/${i}.jpg`;
        }
      }
     
    seasons.forEach(item =>  preloadImages(item) )

//translate
    
    lang.addEventListener('click', changelang);

    function changelang (event) {
        const dataRu = document.querySelectorAll('[data-i18]');
        let target = event.target
        if (target.textContent == 'EN' ){
            dataRu.forEach((item) => {
                let attr = item.dataset.i18
                if (i18Obj.en.hasOwnProperty(attr)) {
                    if (item.placeholder) {
                        item.placeholder = i18Obj.en[attr];
                        item.textContent = '';
                    } 
                    item.textContent = '';
                    item.textContent = i18Obj.en[attr];
                }
            })
            langSpan.forEach(item => item.classList.remove('active'))
            target.classList.add('active');
            language = 'EN'
        } else if (target.textContent == 'RU') {
            dataRu.forEach((item) => {
                let attr = item.dataset.i18
                if (i18Obj.ru.hasOwnProperty(attr)) {
                    if (item.placeholder) {
                        item.placeholder = i18Obj.ru[attr];
                        item.textContent = '';
                    } 
                    item.textContent = '';
                    item.textContent = i18Obj.ru[attr];
                }
            })
            langSpan.forEach(item => item.classList.remove('active'))
            target.classList.add('active');
            language = 'RU'
        }
    }

    const grade = ['body', '.header', '.header__logo','.header__moonsun', '.nav', '.header__mix', '.hero','.button','.title', '.skills','.portfolio', '.price', '.contact','.footer__links']

    
    changer.addEventListener('click', function(event){
        let el;
        let target = event.target;
        if (target.classList.contains('light')) {
            grade.forEach((item) => {
                el = document.querySelectorAll(item)
                el.forEach(elem => elem.classList.remove('light'))
            })
            theme = 'dark'
        } else {
            grade.forEach((item) => {
                el = document.querySelectorAll(item)
                el.forEach(elem => elem.classList.add('light'))
            })
            theme = 'light'
        }     
    })

    


let language = (localStorage.language || 'EN');
let theme = (localStorage.theme || 'dark');


function setLocalStorage() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', language);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('language') ) {
      const language = localStorage.getItem('language');
      getTranslate(language);
    }
    if(localStorage.getItem('theme') ) {
      const theme = localStorage.getItem('theme');
      changeTheme(theme);
    }
  }
  window.addEventListener('load', getLocalStorage)

  function changeTheme (yyy) {
    let el;
    if (yyy == 'dark') {
        grade.forEach((item) => {
            el = document.querySelectorAll(item)
            el.forEach(elem => elem.classList.remove('light'))
        })
        theme = 'dark'
    } else if (yyy == 'light')  {
        grade.forEach((item) => {
            el = document.querySelectorAll(item)
            el.forEach(elem => elem.classList.add('light'))
        })
        theme = 'light'
    }    
}

  function getTranslate(xxx) {
    const dataRu = document.querySelectorAll('[data-i18]');
    if (xxx == 'EN' ){
        dataRu.forEach((item) => {
            let attr = item.dataset.i18
            if (i18Obj.en.hasOwnProperty(attr)) {
                if (item.placeholder) {
                    item.placeholder = i18Obj.en[attr];
                    item.textContent = '';
                } 
                item.textContent = '';
                item.textContent = i18Obj.en[attr];
            }
        })
        langSpan.forEach(item => {
            item.classList.remove('active')
            if (item.textContent == 'EN') {
                item.classList.add('active');
            }
        })
    } else if (xxx == 'RU') {
        dataRu.forEach((item) => {
            let attr = item.dataset.i18
            if (i18Obj.ru.hasOwnProperty(attr)) {
                if (item.placeholder) {
                    item.placeholder = i18Obj.ru[attr];
                    item.textContent = '';
                } 
                item.textContent = '';
                item.textContent = i18Obj.ru[attr];
            }
        })
        langSpan.forEach(item => {
            item.classList.remove('active')
            if (item.textContent == 'RU') {
                item.classList.add('active');
            }
        })
        
    }
}  


const player = document.querySelector('.player');
const toggle = document.querySelector('.player__play');
const video = document.querySelector('video');
const volume = document.querySelector('.player__slider');
const playerControls = document.querySelector('.player__controls');
const progress = document.querySelector('.progress');
const progressLine = document.querySelector('.progress_fill');
const progressDot = document.querySelector('.progress__dot');
const toggleVolume = document.querySelector('.player__sounds');
const bigPlay = document.querySelector('.video-player__button');
const goback = document.querySelector('.goback');
const gostraight = document.querySelector('.gostraight');
const minus5 = document.querySelector('.goback span');
const plus5 = document.querySelector('.gostraight span');
const playerBg = document.querySelector('.player__bg');

// change button play/pause
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
goback.addEventListener('click', togglePlay);
gostraight.addEventListener('click', togglePlay);
bigPlay.addEventListener('click', togglePlay);

function togglePlay () {
    const condition = video.paused ? 'play' : 'pause';
    video[condition]();
    changeIconPlay(condition);
    video.volume = volume.value;
    playerBg.style.zIndex = 0
}

function changeIconPlay (icon) {
if (icon == 'play') {
    toggle.style.background = "url('assets/svg/video/pause.svg')";
    bigPlay.style.display = "none";
} else if (icon == 'pause') {
    toggle.style.background = "url('assets/svg/video/play.svg')";
    bigPlay.style.display = "block";
}
}

//  rewind Video

player.addEventListener('dblclick', function (e){
    if (e.target.classList.contains('goback')) {
        rewindVideo('-')
    }else if (e.target.classList.contains('gostraight')) {
        rewindVideo('+')
    }
});

function rewindVideo (sign) {
    if (sign == '-') {
        video.currentTime = video.currentTime - 5;
        video.play()
        changeProgress()
        showFive(sign)
        setTimeout(hideFive, 1000)
        bigPlay.style.display = "none";
    } else if (sign == '+') {
        video.currentTime = video.currentTime + 5;
        video.play()
        changeProgress();
        bigPlay.style.display = "none";
        showFive(sign)
        setTimeout(hideFive, 1000)
    }
}

function hideFive() {
    minus5.style.opacity = 0;
    plus5.style.opacity = 0;
}

function showFive(sign) {
    if (sign == '-') {
        minus5.style.opacity = 1;
    } else if (sign == '+') {
        plus5.style.opacity = 1;
    }
}


// change volume 
let voluminator = volume.value;
let volumeFlag = true

function changeIconVolume () {
    if (volumeFlag) {
        toggleVolume.style.background = "url('assets/svg/video/volume-mute.svg')no-repeat center";
        volumeFlag = false;
        video.volume = 0;
        volume.value = 0;
        volume.classList.add('opacity');
    } else  {
        if (voluminator > 0 && voluminator <= 0.75) {
            toggleVolume.style.background  = "url('assets/svg/video/volume-down.svg')no-repeat center"
        } else  {
            toggleVolume.style.background  = "url('assets/svg/video/volume-up.svg')no-repeat center"
        }
        volumeFlag = true;
        video.volume = voluminator;
        volume.value = video.volume;
        volume.classList.remove('opacity');
    }
}

function changeVolume () {
    video[this.name] = this.value;
    if (video[this.name] == 0 ) {
        toggleVolume.style.background = "url('assets/svg/video/volume-mute.svg')no-repeat center";
        volumeFlag = false;
        volume.classList.add('opacity')
    } else {
        if (video[this.name] > 0 && video[this.name] <= 0.75) {
            toggleVolume.style.background  = "url('assets/svg/video/volume-down.svg')no-repeat center"
        } else  {
            toggleVolume.style.background  = "url('assets/svg/video/volume-up.svg')no-repeat center"
        }
        volumeFlag = true;
        voluminator = video.volume;
        volume.classList.remove('opacity')
       
    }
}
volume.addEventListener('change', changeVolume);
volume.addEventListener('mousemove',changeVolume);
toggleVolume.addEventListener('click', changeIconVolume)


// change video
function changeProgress() {
    const percent = (video.currentTime / video.duration) *100;
    progressLine.style.flexBasis = `${percent}%`;
    progressDot.style.left = `${percent-0.5}%`

    if (progressDot.style.left == '99.5%') {
        toggle.style.background = "url('assets/svg/video/play.svg')";
        bigPlay.style.display = "block";
    }
    
}

video.addEventListener('timeupdate', changeProgress);

let coords = progress.getBoundingClientRect()
function moveLeave() {
    video.volume = volume.value
    let moveTime
    if (window.event.clientX <= coords.left) {
        moveTime = 0;
        video.currentTime = moveTime;
    } else if (window.event.clientX >= coords.right){
        video.currentTime = video.duration;
    } else {
        moveTime = ((window.event.clientX - coords.left) / progress.offsetWidth) * video.duration;
        video.currentTime = moveTime;
    }

    if (video.currentTime == video.duration) {
        bigPlay.style.display = "block";
        toggle.style.background = "url('assets/svg/video/play.svg')"
    } else {
        bigPlay.style.display = "none";
        video.play()
        toggle.style.background = "url('assets/svg/video/pause.svg')";
    }
    
}

let mousedown = false
progress.addEventListener('click', moveLeave);
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

window.addEventListener('mousemove', function (e) {
    if(mousedown) {
        e.preventDefault()
        moveLeave()
    }
})

window.addEventListener('mouseup', () => mousedown = false)
