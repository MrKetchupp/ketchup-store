const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingMenu = document.querySelector('.my-order-container')

function controlDrop(dropContent) {
    const dropContentHidden = dropContent.classList.contains('hidden')
    if(dropContentHidden) {
        dropContent.classList.remove('hidden');
        setTimeout(function () {
            dropContent.classList.toggle('active');
        }, 20);
    } else {
        dropContent.classList.toggle('active');
        dropContent.addEventListener('transitionend', function(e) {
            dropContent.classList.add('hidden');
        }, {
        capture: false,
        once: true,
        passive: false
        });
    }
}

menuEmail.addEventListener('click', () => {
    const shoppingMenuClosed = !shoppingMenu.classList.contains('active');
    console.log(`El carrito esta cerrado?: ${shoppingMenuClosed}`);

    if(shoppingMenuClosed){
        controlDrop(desktopMenu);
    } else {
        shoppingMenu.classList.remove('active');
        controlDrop(desktopMenu);
        shoppingMenu.classList.add('hidden');
    }
} );

burgerMenu.addEventListener('click', () => {
    const shoppingMenuClosed = !shoppingMenu.classList.contains('active');
    console.log(`El carrito esta cerrado?: ${shoppingMenuClosed}`);

    if(shoppingMenuClosed){
        controlDrop(mobileMenu);
    } else {
        shoppingMenu.classList.remove('active');
        controlDrop(mobileMenu);
        shoppingMenu.classList.add('hidden');
    }
} );


if (window.matchMedia("(max-width: 640px)").matches) {
    shoppingCart.addEventListener('click', () => {
        const mobileMenuClosed = !mobileMenu.classList.contains('active');
        console.log(`El menu mobile esta cerrado?: ${mobileMenuClosed}`);

        if(mobileMenuClosed){
            controlDrop(shoppingMenu);
        } else {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('hidden');
            controlDrop(shoppingMenu);
        }
    } );
} else {
    shoppingCart.addEventListener('click', () => {
        const desktopMenuClosed = !desktopMenu.classList.contains('active');
        console.log(`El menu de cuenta esta cerrado?: ${desktopMenuClosed}`);

        if(desktopMenuClosed){
            controlDrop(shoppingMenu);
        } else {
            desktopMenu.classList.remove('active');
            desktopMenu.classList.add('hidden');
            controlDrop(shoppingMenu);
        }
    } );
}



console.log('Ketchup');
