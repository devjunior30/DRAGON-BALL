let time = 3000,
        currentImageIndex = 0,
        image = document.querySelectorAll('section img'),

    max = image.length;

    function nextImage() {

        

        

    }

    function start() {
      setInterval(() => {
        image[currentImageIndex].classList.remove("personagens")

        currentImageIndex ++

        if(currentImageIndex >= max) {
            currentImageIndex = 0
        }

        image[currentImageIndex].classList.add("personagens")
      }, time);
    }

    window.addEventListener("load", start)