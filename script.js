const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});

// for clicking nxt and pre btn functionality
const images = [
    {
        src: 'https://i.ytimg.com/vi/x9qCa0wntIY/hqdefault.jpg',
        caption: 'N E W A R R I V A L !!!',
        link:'https://www.google.com'
    },
    {
        src: 'https://offshootbooks.com/cdn/shop/products/91vTgugLZRL.jpg?v=1652863218',
        caption: 'N E W A R R I V A L !!!',
        link:'https://www.google.com'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCDtFkGUrPAvUaG01FOosnnNFztYOQ2hG8w&s',
        caption: 'N E W A R R I V A L !!!',
        link:'https://www.google.com'
    }
];

let currentIndex = 0;

const bookImageElement = document.querySelector('#book1Image img');
const captionElement = document.querySelector('.uppercaption');
const imageLinkElement = document.getElementById('image-link');

document.getElementById('pre-btn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

document.getElementById('nxt-btn').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

function updateImage() {
    bookImageElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
    imageLinkElement.href = images[currentIndex].link;
}

// for the 2nd image
const imagesRight = [
    {
        src: 'https://cdnp.targetpublications.org/media/catalog/product/cache/f63311a2a00c092df9b3c20ab1a8a20f/1/0/10267_2.jpg',
        caption: 'M O S T L O V E D ❤',
        link:'https://www.google.com'
    },
    {
        src: 'https://cdnp.targetpublications.org/media/catalog/product/cache/f63311a2a00c092df9b3c20ab1a8a20f/1/2/12473_2_1.jpg',
        caption: 'M O S T L O V E D ❤',
        link:'https://www.google.com'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCDtFkGUrPAvUaG01FOosnnNFztYOQ2hG8w&s',
        caption: 'M O S T L O V E D ❤',
        link:'https://www.google.com'
    }
];

let currentIndexRight = 0;

const bookImageElementRight = document.querySelector('#book2Image img');
const captionElementRight = document.querySelector('.uppercaption1');
const imageLinkElementRight = document.getElementById('image-link2');

document.getElementById('pre-btn1').addEventListener('click', () => {
    currentIndexRight = (currentIndexRight === 0) ? imagesRight.length - 1 : currentIndexRight - 1;
    updateImageRight();
});

document.getElementById('nxt-btn1').addEventListener('click', () => {
    currentIndexRight = (currentIndexRight === imagesRight.length - 1) ? 0 : currentIndexRight + 1;
    updateImageRight();
});

function updateImageRight() {
    bookImageElementRight.src = imagesRight[currentIndexRight].src;
    captionElementRight.textContent = imagesRight[currentIndexRight].caption;
    imageLinkElementRight.href = imagesRight[currentIndexRight].link;
}
