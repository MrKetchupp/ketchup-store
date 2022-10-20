const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.my-order-container');

const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail');
const closeButton = document.querySelector('.closeButton');

// abrir y cerrar con animación sobre Display:none
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
    shoppingMenu.classList.remove('active');
    shoppingMenu.classList.add('hidden');

    productDetail.classList.remove('active');
    productDetail.classList.add('hidden');

    controlDrop(desktopMenu);
} );

burgerMenu.addEventListener('click', () => {
    shoppingMenu.classList.remove('active');
    shoppingMenu.classList.add('hidden');

    productDetail.classList.remove('active');
    productDetail.classList.add('hidden');

    controlDrop(mobileMenu);
} );

shoppingCart.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenu.classList.add('hidden');

    desktopMenu.classList.remove('active');
    desktopMenu.classList.add('hidden');

    productDetail.classList.remove('active');
    productDetail.classList.add('hidden');

    controlDrop(shoppingMenu);
} );

//Detalle del producto
closeButton.addEventListener('click', () => {
        productDetail.classList.remove('active');
        productDetail.classList.add('hidden');
} );

function openProductDetail() {
    mobileMenu.classList.remove('active');
    mobileMenu.classList.add('hidden');

    desktopMenu.classList.remove('active');
    desktopMenu.classList.add('hidden');

    shoppingMenu.classList.remove('active');
    shoppingMenu.classList.add('hidden');

    productDetail.classList.remove('active');
    productDetail.classList.add('hidden');

    // abrir aside de productDetail
    productDetail.classList.remove('hidden');
    productDetail.classList.add('active');
}

const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-cart');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.classList.add('product-img');
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')

        const productDivInfo = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price} `;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigureInfo = document.createElement('figure');
        const addCartImg = document.createElement('img');
        addCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        addCartImg.setAttribute('alt', 'add cart');
        addCartImg.classList.add('add-cart')

        productFigureInfo.appendChild(addCartImg);

        productDivInfo.appendChild(productPrice);
        productDivInfo.appendChild(productName);

        productInfo.appendChild(productDivInfo);
        productInfo.appendChild(productFigureInfo);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

console.log('Ketchup');