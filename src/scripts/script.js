const carrossel = document.querySelector('#carrossel')
const images = carrossel.querySelectorAll('img')

let currentIndexImage = 0

function mover() {
    currentIndexImage++

    if (currentIndexImage === images.length - 1) {
        currentIndexImage = 0
    }else{
        carrossel.style.transform = `translateX(${-currentIndexImage * 100}%)`
    }
    
}

setInterval(mover,3500)