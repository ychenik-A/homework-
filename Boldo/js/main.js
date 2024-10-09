(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // ======================БУРГЕР МЕНЮ====================

    new Swiper('.about__slider', {

        slidesPerView: 1,
        // spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            slidesPerView: 1,

            400: {
                slidesPerView: 1.1,
            },

            500: {
                slidesPerView: 1.3,
            },

            600: {
                slidesPerView: 1.5,
            },

            700: {
                slidesPerView: 1.8,
            },

            900: {
                slidesPerView: 2.5,
            },

            1100: {
                slidesPerView: 3,
            },
        }
    });

    // ====================СЛАЙДЕР-ABOUT======================


    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });


    // ==================МОДАЛКА=====================

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.nav__link-button')
    const closeButton = document.querySelector('.modal__cancel')

    modalButton.addEventListener('click', openModal)
    closeButton.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal() {
        document.body.classList.remove('body--opened-modal')
    }


})()