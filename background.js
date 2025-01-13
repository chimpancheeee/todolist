const background = document.querySelector("body");

const images = ['images/picture1.jpg','images/picture2.jpg','images/picture3.jpg','images/picture4.jpg','images/picture5.jpg'];
function getRandomImages() {
    const getNumber = Math.floor(Math.random()*images.length);
    document.body.style.backgroundImage =`url(${images[getNumber]})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
}
getRandomImages();