function changeBg() {
    const images = [
        'url("image1.jpg")',
        'url("image2.jpg")',
        'url("image3.jpg")',
        'url("image4.jpg")',
        'url("image5.jpg")',
        'url("image6.jpg")',
        'url("image7.jpg")',
        'url("image8.jpg")',
        'url("image9.jpg")',
        'url("image10.jpg")',
    ]
    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

setInterval(changeBg, 5000)