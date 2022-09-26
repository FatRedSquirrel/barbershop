let cartOpenButton = document.querySelector('.user-nav-button-cart'),
    cart = document.querySelector('.cart-window'),
    cartItemDelete = document.getElementsByClassName('cart-item-delete'),
    cartCloseButtons = document.getElementsByClassName('cart-close'),
    modal = document.querySelector('.modal-container'),
    loginOpenButtons = document.getElementsByClassName('login-window-open'),
    modalCloseButton = document.querySelector('.modal-close'),
    mobileMenu = document.querySelector('.mobile-menu'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay'),
    cartMobileOpen = document.querySelector('.cart-mobile-open'),
    cartMobile = document.querySelector('.cart-window-mobile'),
    windowElementOpenButtons = document.getElementsByClassName('window-element-open');
    windowElements = document.getElementsByClassName('window-element');

for (let i = 0; i < windowElementOpenButtons.length; i++) {
    let button = windowElementOpenButtons[i];
    button.addEventListener('click', function(event) {
        // Закрывает остальные выпадающие окна, когда открывается нужное
        for (let k = 0; k < windowElements.length; k++) {
            windowElement = windowElements[k];
            windowElement.classList.remove('open');
        }
        // Открывает нужное окно
        event.target.closest('.user-nav-item').querySelector('.window-element').classList.add('open');

        // Проверяем есть ли у оверлея класс overlay-additional и если нет - добавляем
        if (!overlay.classList.contains('overlay-additional')) {
            overlay.classList.add('overlay-additional');
        }
        overlay.classList.add('open');
    });
}

cartMobileOpen.onclick = function() {
    cartMobile.classList.add('open');
    mobileMenu.classList.remove('open');
}

for (let i = 0; i < cartCloseButtons.length; i++) {
    let button = cartCloseButtons[i];
    button.addEventListener('click', function(event) {
        event.target.closest('.cart-window').classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
}

for (let i = 0; i < loginOpenButtons.length; i++) {
    let button = loginOpenButtons[i];
    button.addEventListener('click', function() {
        modal.classList.add('open');
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        for (let k = 0; k < windowElements.length; k++) {
            windowElement = windowElements[k];
            windowElement.classList.remove('open');
        }
    });
}

modalCloseButton.onclick = function() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

burger.onclick = function() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    overlay.classList.remove('overlay-additional');
    document.body.style.overflow = 'hidden';
}

overlay.onclick = function() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
    for (let k = 0; k < windowElements.length; k++) {
        windowElement = windowElements[k];
        windowElement.classList.remove('open');
    }
}

for (let i = 0; i < cartItemDelete.length; i++) {
    let button = cartItemDelete[i];
    button.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    })
}
