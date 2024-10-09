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

    // new Swiper('.swiper', {

    //     slidesPerView: 2.5,
    //     spaceBetween: 15,

    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    //     breakpoints: {

    //         901: {
    //             slidesPerView: 2.6,
    //         },

    //         1001: {
    //             slidesPerView: 2.7,
    //         },

    //         1201: {
    //             slidesPerView: 2.8,
    //         },
    //     }
    // });

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

    // ==================== БЛОГ кнопка-Load more======================

    // const blogLists = document.querySelectorAll('.blog__cards-list')

    // blogLists.forEach(el => {

    //     el.addEventListener('click', (e) => {

    //         const blogList = e.currentTarget
    //         const blogOpenedItem = blogList.querySelector('.blog-cards__item--opened')
    //         const blogOpenedContent = blogList.querySelector('.blog-cards__item--opened .blog__cards-item-hidden')

    //         const blogControl = e.target.closest('.blog__open-btn');
    //         if (!blogControl) return
    //         const blogItem = blogControl.parentElement;
    //         const blogContent = blogControl.nextElementSibling;

    //         if (blogOpenedItem && blogItem != blogOpenedItem) {
    //             blogOpenedItem.classList.remove('.blog-cards__item--opened');
    //             blogOpenedContent.style.maxHeight = null;
    //         }
    //         blogItem.classList.toggle('.blog-cards__item--opened');

    //         if (blogItem.classList.contains('.blog-cards__item--opened')) {
    //             blogContent.style.maxHeight = blogContent.scrollHeight + 'px';
    //         } else {
    //             blogContent.style.maxHeight = null;
    //         }

    //     });

    // });


    // const blogOpenBtn = document.querySelector('.blog__open-btn')
    // const blogOpenedContent = document.querySelector('.blog__cards-item-hidden')
    // const blogOpenedItem = document.querySelector('.blog-cards__item--opened')

    // const loadMore = ('click', () => {
    //     if (document.addEventListener('.blog__open-btn')) {
    //         blogOpenedContent.classList.add('.blogOpenedItem')
    //     }
    // })


    // const showMore = document.querySelector('.blog__open-btn');
    // const productsLength = document.querySelectorAll('.blog__cards-item');
    // let items = 3;

    // showMore.addEventListener('click', () => {
    //     items += 3
    //     const array = Array.from(document.querySelector('.blog__cards-item').children);
    //     const visItems = array.slice(0, items);

    //     visItems.forEach(el => el.classList.add('is-visible'));

    //     if (visItems.length === productsLength) {
    //         showMore.style.display = 'none';
    //     }
    // })


    // const showMore = document.querySelector('.blog__open-btn');
    // const productsLength = document.querySelectorAll('.blog__cards-item').length;
    // let items = 3;

    // showMore.addEventListener('click', () => {
    //     items += 3;
    //     const array = Array.from(document.querySelector('.blog__cards-list').children);
    //     const visItems = array.slice(0, items);

    //     visItems.forEach(el => el.classList.add('is-visible'));

    //     if (visItems.length === productsLength) {
    //         showMore.style.display = 'none';
    //     }
    // });





    // =================


    // const showMore = document.querySelector('.show-more');
    // const productsLength = document.querySelectorAll('.products-grid__item').length;
    // let items = 3;

    // showMore.addEventListener('click', () => {
    //     items += 3;
    //     const array = Array.from(document.querySelector('.products-grid').children);
    //     const visItems = array.slice(0, items);

    //     visItems.forEach(el => el.classList.add('is-visible'));

    //     if (visItems.length === productsLength) {
    //         showMore.style.display = 'none';
    //     }
    // });



    // const blogOpenBtn = document.querySelector('.blog__open-btn')
    // const blogCard = document.querySelector('.blog__cards-item-hidden')

    // const loadMore = ('click', () => {
    //     if (!blogCard.contains('blog__cards-item-hidden--visible')) {
    //         blogCard.classList.add('.blog__cards-item-hidden--visible')
    //     }
    // })




    // const a = document.querySelector('.blog__cards-item-hidden--visible')

    // modalButton.addEventListener('click', openModal)
    // closeButton.addEventListener('click', closeModal)

    // function openModal(e) {
    //     e.preventDefault()
    //     document.body.classList.toggle('body--opened-modal')
    // }


    // const blogCads = document.querySelector('.blog__cards-item')
    const data = [];
    const container = document.getElementById('container');
    let currentItemIndex = 0;

    document.getElementById('load-more').addEventListener('click', () => {
        const itemsToLoad = 5; // Load 5 more items each time
        const nextItems = data.slice(currentItemIndex, currentItemIndex + itemsToLoad);
        nextItems.forEach((item) => {
            const html = `<div>${item}</div>`; // Create HTML for each item
            container.innerHTML += html;
        });
        currentItemIndex += itemsToLoad; // Update the current item index

        // Check if there are more items to load
        if (currentItemIndex >= data.length) {
            document.getElementById('load-more').disabled = true; // Disable the button if no more items
        }
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